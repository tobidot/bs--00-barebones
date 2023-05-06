# bs--0-barebones

This project is an entry to my ["Baby-Steps"-project-series](https://www.game-object.de/projects/2)

## Description

The most barebone of a project, a blank screen with some text and a game loop function.

## Library

This project provides basic typescript helper

- `getElementById('app', HTMLElement)` to get the elements of a dom in a safe manner.
- `Class<T>` a type to indicate an instantiatable class.
- `assert(condition, message)` a assertion function narrowing down the types.
- `preventDefault` an initializer function to interupt all browsernative interactions on an element.

And a few interfaces for the abstract MVC concept
- `Model` the interface to a Model
- `View` the interface to a view able to render a Model
- `Controller` handles the interaction between the View and the Model
- `ControllerResponse` the Response a controller can return, in this response the new View and Controller should be encoded

