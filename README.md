
#Node [How to start]
- node watch server.js
- node run app

#Nodemon [How to start] With package.json
- npm run server
OR
- npm install
- npm start
- npm run dev
- npm install package-name
- npm uninstall

#PM2 
pm2 start server.js --watch
pm2 list

#Port Used on VPS
lsof -i:3030

#Port Kill
kill -9 <PIDNUMBER>

npm install
node server.js

#env
APP_PORT=3030
WEBSOCKET_PORT=8080
