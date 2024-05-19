# Challenge XII Frontend

## Stack

<div align="left">
<img src="https://img.shields.io/badge/Next-gray?logo=next.js" />
<img src="https://img.shields.io/badge/React-black?logo=react" />
<img src="https://img.shields.io/badge/Styled%20Components-pink?logo=styled-components&logoColor=black&color=%23DB7093
" />
<img src="https://img.shields.io/badge/Axios-purple?logo=axios&color=%235A29E4" />
<img src="https://img.shields.io/badge/Eslint-purple?logo=eslint&color=%234B32C3"/>
<img src="https://img.shields.io/badge/Docker-blue?logo=docker&logoColor=white&color=%232496ED"/>
<img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white&color=%233178C6"/>
<img src="https://img.shields.io/badge/Nginx-blue?logo=nginx&logoColor=white&color=%23009639"/>
</div>

## Author:

Emmanuel Barros Moraes

## Description:

This is the front-end part of the project "Challenge XII" from Compass UOL Internship. It's the 3rd and last challenge which integrates back-end with front-end as part of the "Full Stack" role. If you want to understand the endpoint, please feel free to read back-end part first.

## First Step - Go to the folder where the project is

```bash
cd challenge-xii-frontend
```

## Second Step - Creating your .env file <div style="padding-left: 1em;"><img src="https://img.shields.io/badge/Env-blue?logo=.env&logoColor=black&color=%23ECD53F"/></div>

This is the endpoint where the "drivers form" is sent, so in order to use this project with the back-end set the url to:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/drivers
```

And this is the "posts" endpoint where the cards are retrieved from the back-end on section 2

```bash
NEXT_PUBLIC_API_URL_POSTS=http://localhost:3000/posts
```

## Third Step - Building your docker compose

Now, let's build the docker compose

<div style="padding-left: 1em;" >
<img src="https://img.shields.io/badge/Docker-blue?logo=docker&logoColor=white&color=%232496ED"/>
</div>

```bash
docker-compose build
```

## Fourth Step - Starting the docker container we just built

If you don't want to run it on background just remove the "-d"

<div style="padding-left: 1em;" >
<img src="https://img.shields.io/badge/Docker-blue?logo=docker&logoColor=white&color=%232496ED"/>
</div>

```bash
docker-compose up -d
```
