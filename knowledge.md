1. several line tags
- method 1-1  
eg. Home.js  
lines include in <div></div>

- method 1-2 
eg. Home.js  
lines include in <Fragment></Fragment>

2. use image
- method 1-1  
eg. home.js  
import ImgA from "xxpath/xx.jpg"  
<img src={ImgA}>  

- method 1-2  
eg. home.js  
<img src={require("xxpath/xx.jpg")}/>

3. props & state  
same with single file version

4. pass value  
- child->parent  
eg. home & news

- between same level(pubsub-js)  
eg. news & phone

5. data request & json-server
eg. home.js(arr) + mock/data.json

6. Cross domain request
eg. when use api by setting in node_modules\react-scripts\config\webpackDevServer.config.js & home.js

7. Route navigation
eg. index.js + App.js + Home.js

8. High order component
eg. app.js

9. Route pass parameters
eg. app.js

10. hook
eg. app.js

11. redux
eg. home.js + redux(action/reducer/store)