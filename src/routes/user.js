// Variable
const express       = require('express');
const router           = express();
// const { Router } 	= require('express'); 
// const app			= Router(); 
const cn          	= require("../config/database");

// Function
const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("../helper.js");


// Model
const user_Model = require('../models/user_model');
const userModel = new user_Model();

// Router
router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
        
    let body = req.query
    let action = body.action
    let number = body.number
    let term = body.term
    console.log("Node: Body => "+JSON.stringify(body));
    if(req.query.action == '' || req.query.action === undefined){   
        // returnJson(res, 0, 'Action Not Found');   
        console.error('No Action');
    }else{ 
        switch(action){
            case "read": //Works with model
                // http://localhost:3030/api/users?action=read&user_id=1
                userModel.findById(body.user_id).then((result) => {
                    let userData = {
                        user_id: result.user_id,
                        user_username: result.user_username,
                    }
                    console.log('USER READ: ', JSON.stringify(userData));
                    // returnJson(res, 1, 'Read '+body.user_id, userData); 
                    res.status(200).send(userData);   
                }).catch((error) => {
                    console.error('Error retrieving user:', error);
                    // returnJson(res, 0, error.sqlMessage);    
                });
                break;
            default:
                returnJson(res, 0, 'Nothing to do');                 
                break;               
        }
    }
})

// Get all users
// router.get('/', (req, res) => {
//     cn.query('SELECT * FROM users', (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.json(results);
//         }
//     });
// });

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

module.exports = router;