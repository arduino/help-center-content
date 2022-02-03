---
title: 'Error "undeclared function" or "undeclared type"'
---

The Arduino environment attempts to automatically generate prototypes for your functions, so that you can order them as you like in your sketch. This process however, is not perfect, and sometimes leads to error messages.

If you declare a custom type in your code and create a function that accepts or returns a value of that type, you'll get an error when you try to compile the sketch. This is because the automatically-generated prototype for that function will appear above the type definition.

If you declare a function with a two-word return type (e.g. "unsigned int") the environment will not realize it's a function and will not create a prototype for it. That means you need to provide your own, or place the definition of the function above any calls to it.
