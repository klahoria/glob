'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');

const basename = path.basename(__filename);
const models = {};

fs.readdirSync(__dirname)
  .filter(file => 
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    !file.endsWith('.test.js') // Simplified test file check
  )
  .forEach(file => {
    const modelPath = path.join(__dirname, file);
    
    try {
      const model = require(modelPath);

      if (model) {
        const modelName = file.replace('.js', '');
        models[modelName] = model;
      } else {
        console.warn(`Warning: ${file} did not export anything`);
      }
    } catch (error) {
      console.error(`Error loading model ${file}:`, error);
    }
  });

module.exports = models;
