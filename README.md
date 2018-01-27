# Economic Machine API

API to use for simulating an economic system.

# Prerequisite

> Docker
> Pull mongo image (https://hub.docker.com/_/mongo/)
> node
> npm

# Usage
## Usage
Create or restart my-mongo container before doing the following steps.

Install:
```
npm install
```
Start:
```
npm start
```

## mongodb
### Create or restart

Create a mongodb container:
```
docker run -d -p 27017:27017 --name my-mongo mongo
```

or restart stopped container:
```
docker start my-mongo
```
