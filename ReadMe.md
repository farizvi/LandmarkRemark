# Landmark Remark
Landmark Remark is an application which allows users to add notes on the map and view notes added by other users

## Languages / technologies used
- .Net Core 2.2
- Entity Framework Core 2.2
- ReactJS
- Typescript

## Project Structure

### LandmarkRemark.API
This project contains the web api for this application. The front end application access methods exposed by this web api to perform various tasks

#### client-app
This is the user facing application developed using ReactJS and Typescript

### LandmarkRemark.Application
This project contains all the business logic for this application

### LandmarkRemark.Domain
This project contains the domain entities for this application

### LandmarkRemark.Persistence
This project includes database migrations for the application

### LandmarkRemark.Tests
This is project contains the unit tests for this application. (Unit tests not written as yet)

## How to run the application
This application is developed using .Net Core 2.2. To run this application install

1. [.Net Core 2.2 Framework](https://dotnet.microsoft.com/download/dotnet-core/2.2)
2. [Node JS](https://nodejs.org/en/download/)

### Web API
To run the Web API, browse to LandmarkRemark.API folder and type following command
```
dotnet watch run
```

### Client App
To run the client application, browse to LandmarkRemark.API/client-app and type following command
```
npm start
```