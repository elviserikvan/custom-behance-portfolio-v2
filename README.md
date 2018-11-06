# Custom behance portfolio (improved)

This is a custom behance portfolio built with NodeJS. I have another custom behance portfolio where you can check it [here](https://github.com/GamertodArk/custom-behance-portfolio), this version is improved in the code structure, security and the FrontEnd

## Some important updates

- The App Key is not in the FrontEnd
- The projects are shown 3 in a row
- The http requests send to the Behance API ara sent from the BackEnd

## How to install 

Run this line

```
git clone git@github.com:GamertodArk/custom-behance-portfolio-v2.git
```

Then create a new file called `.env` and add the following data
```
APP_PORT=<port for the app>

BEHANCE_API_KEY=<behance api key>
BEHANCE_USER_ID=<behance user id>
BEHANCE_PER_PAGE=<the max number of project shown>
``` 
Now install the dependencies

```
npm install
```

And run the app
```
node app.js
```

## Project Screenhots

![Land Page](https://github.com/GamertodArk/custom-behance-portfolio-v2/blob/master/project-screenshots/Screenshot_2018-11-06%20Hello%20World.png "Land Page")

![Hover over project](https://github.com/GamertodArk/custom-behance-portfolio-v2/blob/master/project-screenshots/Screenshot_2018-11-06%20Hello%20World(1).png "Hover over project")