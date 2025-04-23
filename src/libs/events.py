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
from typing import Callable
import inspect
from threading import Thread

# // Main
class Event():
    """
    An event that functional callbacks can subscribe to (+ with async support!)
    """

    def __init__(self):
        """
        Initializes a new instance of the `Event` class.
        """    
    
        self._callbacks = []

    def subscribe(self, callback: Callable):
        """
        Subscribe to this event.
        
        Args:
            callback (Callable): The callback to subscribe
        """    
        
        self._callbacks.append(callback)
    
    def unsubscribe(self, callback: Callable):
        """
        Unsubscribe a callback from this event.

        Args:
            callback (Callable): The callback to unsubscribe
        """        
        
        self._callbacks.remove(callback)
    
    def fire(self, *args, **kwargs):
        """
        Fire this event (non-async callbacks only).
        
        Args:
            *args: The arguments to pass to the callbacks
            **kwargs: The keyword arguments to pass to the callbacks
        """        
        
        for callback in self._callbacks:
            if not inspect.iscoroutinefunction(callback):
                callback(*args, **kwargs)
                
    def fire_threaded(self, *args, **kwargs):
        """
        Fire this event in a separate thread (non-async callbacks only).
        
        Args:
            *args: The arguments to pass to the callbacks
            **kwargs: The keyword arguments to pass to the callbacks
        """        
        
        thread = Thread(target = self.fire, args = args, kwargs = kwargs, daemon = True)
        thread.start()
                
    async def fire_async(self, *args, **kwargs):
        """
        Fire this event (async callbacks only).
        
        Args:
            *args: The arguments to pass to the callbacks
            **kwargs: The keyword arguments to pass to the callbacks
        """        
        
        for callback in self._callbacks:
            if inspect.iscoroutinefunction(callback):
                await callback(*args, **kwargs)
                
    __add__ = subscribe
    __sub__ = unsubscribe
    __fire__ = fire_threaded