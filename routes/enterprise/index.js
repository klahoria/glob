const express = require('express');
const router = express.Router();
const fs = require('fs');
const { glob } = require('glob');
const path = require('path');
const basename = path.basename(__filename);

async function loadRoutes() {
    try {
      const routeFiles = glob.sync("routes/**/").filter(file => file !== __filename);

      for (const file1 of routeFiles) {
        // console.log(file1,"file11");
        fs.readdirSync(file1).filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        }).forEach(file => {
            let userRoute = file1.replace(/^[/\\]?routes[\\/]+enterprise[/\\]?/, '');
            const routes = require(path.join(__dirname,'/' ,userRoute, '/', file));
            userRoute = userRoute.replace(/\\/g, '/')
            router.use(`/enterprise/${userRoute}`, routes);
        });
      }
  
    } catch (err) {
      console.error('Error in route traversing', err);
    }
  }

  loadRoutes();
module.exports = router;