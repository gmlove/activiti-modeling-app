# Activiti Modeling Application

| master | [![Build Status](https://travis-ci.org/Activiti/activiti-modeling-app.svg?branch=master)](https://travis-ci.org/Activiti/activiti-modeling-app) |
| - | - |

<p align="center">
    <img title="Activiti" width="250px" src="activiti.png" alt="Activiti">
</p>

## Introduction

The Alfresco Modeling Application is an extended version of the [Activiti Modeling application  (AMA)](https://github.com/Activiti/activiti-modeling-app), built using
[Alfresco Application Development Framework (ADF)](https://github.com/Alfresco/alfresco-ng2-components) components.

## Introduction about the fork

This is a changed version of Alfresco Modeling Application. The main changes are:

1. auth removed
2. pre-defined some mock data

With the modified version, you can start the modeler quickly without other activiti components. But please be noted that all the persistence related functionality are not supported since it is now a pure frontend app. (Don't be surprise if you see any errors when try to access some persistence functionality.)

A demo has been deployed to heroku, you can have a try [here](https://node-bpm-modeler.herokuapp.com/).

The model could be used with the other tool [nodebpm](https://github.com/gmlove/nodebpm/). More info could be found [here](https://github.com/gmlove/nodebpm/).

## Installing dependencies

Run the following command to install all third-party dependencies:

```bash
npm install
```

### Running the application

Use one of the following commands to run the application:

```bash
# develop server
npm start

# Production server
npm start -- --prod
```

### Building the application

Use one of the following commands to build the application:

```bash
# develop build
npm run build

# Production build
npm run build -- --prod
```

### Running unit tests

```bash
npm test
```

## Browser Support

The application is supported in the following browsers:

| **Browser**   | **Version** |
| ------------- | ----------- |
| Chrome        | Latest      |
| Safari (OS X) | 9.x         |
| Firefox       | Latest      |
| Edge          | 13, 14      |
