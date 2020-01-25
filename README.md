# React External script loading Sample
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation

Most of the external tools that we need to integrate into a regular website just adds a script and injects
their code/elements into a container, on any regular webpage it is meant to be just a copy and paste issue
but on a React app it is connected to the App life cycle.

This small sample app shows how to add a remote script on the componentWillMount event which will allow
the Add To Any script (for this example) to find the container div and inject its code. 
