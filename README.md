## Github Searcher Backend
This project contains the backend for the Github Search Application. This server contains two RESTful APIs. One retrieves Github information and the other one clears the redis-server cache:
```
/api/search
/api/clear-cache
```


## Motivation
This project was created as a result of a code challenge provided by Tradeling. \
More details on the code challenge implementation can be found [here](https://github.com/tradeling/coding-tasks/tree/develop/fullstack-javascript).


## Technologies Used
<b>Built with</b>
- [NodeJS](https://nodejs.org/en/)
- [Redis](https://redis.io/)


## Standards
<b>Code Conventions:</b>
- [Airbnb](https://github.com/airbnb/javascript)


## Installation Server
```
git clone https://github.com/arantzardzm/github-searcher
cd github-searcher/
cp env .env
yarn install
yarn start
```
The server should start in: http://localhost:2900.


## Installation Redis Server
Make sure to install the redis server. You can start it by running;
```
redis-server
```


## Implementation Setup
The server is split into two routes and two controllers. Each pair handles the search or the clear cache functionalities.


## Implementation Redis
The application uses Redis for handling cache storage. You can find the functions used for this implementation inside the redis folder. \
The redisSearch function is called before the actual API call to Github, it quickly makes a request to our redis-server and if it finds the search and select key, it returns the previously stored data. \
If it does not find anything, it makes the API call to Github and then sets the retrieved data inside our redis-server using the search and select key using the redisSet function. \
This implementation allows for faster retrieval of data.


## Tests
In order to run the test cases created for this project, you can run the following command:
```
yarn test:cover
```


## Swagger
In order to view the swagger file, please go to: http://localhost:2900/api-docs


## Author
Arantza Rodriguez Melchor
