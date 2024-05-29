// Variable
const express           = require('express');
const router            = express();
// const { Router } 	= require('express'); 
// const app			= Router(); 
// const cn          	    = require("../config/database");

// Function
// const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("../config/helper.js");

// Model
const user_Model = require('../models/user_model');
const userModel = new user_Model();

// Router
router.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // let body = req.query // GET
    let body = req.body; // POST
    let action = body.action

    // console.log(action);
    console.log("Node: Body => "+JSON.stringify(body));
    if(action == '' || action === undefined){   
        // returnJson(res, 0, 'Action Not Found');   
        console.error('No Action');
    }else{ 
        let userID = (typeof body.user_id !== 'undefined' && body.user_id !== null && body.user_id !== '') ? body.user_id : 0;
        switch(action){
            case "create": //Works with model
                // http://localhost:3030/api/user?action=create&user_branch_id=22&user_username=joeejoee
                paramUser = {
                    user_branch_id: body.user_branch_id,
                    user_username: body.user_username
                };
                userModel.create(paramUser).then((insertId) => {
                    // console.log('USER CREATE: user_id => ', insertId);
                    // returnJson(res, 1, 'Success Created user_id => '+ insertId);     
                    res.status(200).send({status:1,message:'Created'});                                 
                }).catch((error) => {
                    console.error('ERROR:', error.sqlMessage);
                    res.status(400).send({status:0,message:'Error'});                        
                    // returnJson(res, 0, error.sqlMessage);                                             
                });
                break; 
            case "update": //Works with model
                // http://localhost:3030/api/user?action=update&user_id=9&user_username=joeupdate&user_branch_id=33
                
                //Check ID First
                if(userID > 0){
                    paramUser = {
                        user_username: body.user_username,
                        user_branch_id: body.user_branch_id
                    };
                    userModel.update(userID, paramUser).then((affectedRows) => {
                        console.log('USER UPDATE: ', userID);
                        res.status(200).send({status:1,message:'Updated'});  
                        // returnJson(res, 1, 'Success Update '+body.device_id);                                     
                    }).catch((error) => {
                        console.error('ERROR:', error.sqlMessage);
                        res.status(400).send({status:0,message:'Error'});                         
                        // returnJson(res, 0, error.sqlMessage);                                             
                    });        
                }else{
                    // console.error('ERROR: missing user_id');
                    res.status(400).send({status:0,message:'Error missing user_id'}); 
                }
                break;                                  
            case "read": //Works with model
                // http://localhost:3030/api/user?action=read&user_id=1
                userModel.findById(userID).then((result) => {

                    // Found Data
                    if(typeof result !== 'undefined'){
                        let userData = {
                            user_id: result.user_id,
                            user_username: result.user_username,
                        }
                        console.log('USER READ: ', JSON.stringify(userData));
                        // returnJson(res, 1, 'Read '+body.user_id, userData); 
                        res.status(200).send({status:1,message:'Success',result:userData});   
                    }else{
                        res.status(200).send({status:1,message:'Not Found'});  
                    }
                }).catch((error) => {
                    console.error('ERROR:', error);
                    // res.status(400).send('ERROR: Missing user_id');
                    // returnJson(res, 0, error.sqlMessage);    
                    res.status(400).send({status:0,message:'Error'});    
                });
                break;
            case "delete": //Works with model
                // http://localhost:3030/api/user?action=delete&user_id=2
                // let userID = body.user_id;
                userModel.delete(userID).then((affectedRows) => {
                    console.log('USER DELETE: ', userID);
                    // returnJson(res,1,'Deleted '+userID);
                    res.status(200).send({status:1,message:'Deleted '+userID});   
                }).catch((error) => {
                    console.error('ERROR:', error.sqlMessage);
                    // returnJson(res, 0, error.sqlMessage);  
                    res.status(400).send({status:0,message:'Error'});                     
                });
                break;
            default:
                returnJson(res, 0, 'Nothing to do');                 
                break;               
        }
    }
})

// Get all users
/*
router.get('/', (req, res) => {
    cn.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Get a single user by ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    cn.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results[0]);
        }
    });
});

// Create a new user
router.post('/', (req, res) => {
    const { name, age, city } = req.body;
    cn.query('INSERT INTO users (name, age, city) VALUES (?, ?, ?)', [name, age, city], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId, name, age, city });
        }
    });
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const { name, age, city } = req.body;
    cn.query('UPDATE users SET name = ?, age = ?, city = ? WHERE id = ?', [name, age, city, userId], (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id: userId, name, age, city });
        }
    });
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    cn.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
});
*/

module.exports = router;