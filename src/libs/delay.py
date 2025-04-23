"""
----------------------------------------------
cuhHub: A community hosting numerous servers for Stormworks: Build and Rescue
https://github.com/cuhHub/frontend
----------------------------------------------

Copyright (C) 2025 cuhHub

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

# // Imports
from __future__ import annotations

from threading import Thread, Event, Lock

from log import logger

# // Main
class AlreadyStartedException(Exception):
    """
    Raised when a delay is attempted to be started twice.
    """
    
class AlreadyCancelledException(Exception):
    """
    Raised when a delay is attempted to be cancelled twice.
    """

class Delay():
    """
    Represents a callback waiting to be called.
    """
    
    def __init__(self, seconds: float, callback: callable, *args, **kwargs):
        """
        Initializes a new instance of the `Later` class.

        Args:
            seconds (float): The delay in seconds
            callback (callable): The function to call
            *args: The arguments to pass to the function
            **kwargs: The keyword arguments to pass to the function
        """        
        
        self.seconds = seconds
        self.callback = callback
        self.args = args
        self.kwargs = kwargs
        self.started = False
        self.cancelled = False
        
        self._event = Event()
        self._lock = Lock()
        
    def start(self):
        """
        Starts this delay.
        """        
        
        if self.started:
            raise AlreadyStartedException("Delay already started.")
        
        self.started = True
        Thread(target = self._handle, daemon = True).start()
        
    def cancel(self):
        """
        Cancels this delay.
        """
        
        if self.cancelled:
            raise AlreadyCancelledException("Delay already cancelled.")
        
        with self._lock:
            self.cancelled = True
            
        self._event.set()
        
    def _handle(self):
        """
        Handles the callback.
        """

        if not self._event.wait(self.seconds):  # Wait for the delay or cancellation
            with self._lock:
                if self.cancelled:
                    return

                try:
                    self.callback(*self.args, **self.kwargs)
                except Exception as exception:
                    logger.warning(f"Failed to call delay callback '{self.callback.__name__}': {exception}")

def delay(seconds: float, callback: callable, *args, **kwargs) -> Delay:
    """
    Calls a function after *x* seconds.

    Args:
        seconds (float): The delay in seconds
        callback (callable): The function to call
        *args: The arguments to pass to the function
        **kwargs: The keyword arguments to pass to the function
        
    Returns:
        Delay: The created delay
    """
    
    awaiting_delay = Delay(
        seconds,
        callback,
        *args, **kwargs
    )
    
    awaiting_delay.start()
    
    return awaiting_delay