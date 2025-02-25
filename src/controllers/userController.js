const path          = require('path');
const {myAsyncFunction, myAsyncFunction2, returnJson, removeStringSender, phoneNumberFormatter}        = require("../config/helper.js");

const userModel    = require('../models/userModel');

exports.index = (req, res) => {
    // res.setHeader('Content-Type', 'application/json')

    // let body = req.query // GET
    let body = req.body; // POST
    let action = body.action

    console.log(action);
    console.log("Node: Body => "+JSON.stringify(body));
    if(action == '' || action === undefined){   
        // returnJson(res, 0, 'Action Not Found');
        console.error('No Action');
        res.sendFile(path.join(__dirname, '../views/menu/user.html'));
    }else{ 
        let userID = (typeof body.user_id !== 'undefined' && body.user_id !== null && body.user_id !== '') ? body.user_id : 0;
        switch(action){
            case "load": //Works with model
                // http://localhost:3030/api/user?action=read&user_id=1
                // const where = {
                //     user_flag: 1 // Contoh: hanya ambil user yang aktif
                // };
                where = {};
                search = {};
                limit = 5;
                start = 0;
                order_by = 'user_username';
                dir = 'DESC';
                userModel.findAll(where,search,limit,start,order_by,dir).then((result) => {

                    // Found Data
                    if(typeof result !== 'undefined'){
                        // console.log('USER READ: ', JSON.stringify(result));
                        // returnJson(res, 1, 'Read '+body.user_id, userData); 
                        res.status(200).send({status:1,message:'Success',result:result});   
                    }else{
                        res.status(200).send({status:1,message:'Not Found'});  
                    }
                }).catch((error) => {
                    // console.error('ERROR:', error);
                    // res.status(400).send('ERROR: Missing user_id');
                    // returnJson(res, 0, error.sqlMessage);    
                    res.status(400).send({status:0,message:'Error'});    
                });
            break;
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
}

exports.page = (req, res) => {
    res.status(404).send("Menampilkan form tambah user...");
    console.error('No Action');
    // res.sendFile(path.join(__dirname, '../views/menu/user.html'));    
};

exports.getUsers = (req, res) => { // Works 
    const userId = req.params.id;

    userModel.findById(userId).then((result) => {

        // Found Data
        if(typeof result !== 'undefined'){
            let userData = {
                user_id: result.user_id,
                user_username: result.user_username,
            }
            console.log('USER READ: ', JSON.stringify(userData));
            // returnJson(res, 1, 'Read '+body.user_id, userData); 
            res.status(200).send({status:1,message:'Success',result:result});   
        }else{
            res.status(200).send({status:1,message:'Not Found'});  
        }
    }).catch((error) => {
        console.error('ERROR:', error);
        // res.status(400).send('ERROR: Missing user_id');
        // returnJson(res, 0, error.sqlMessage);    
        res.status(400).send({status:0,message:'Error'});    
    });
};

exports.createUser = (req, res) => { // Works       
    let body = req.body;    
    if (!body.user_branch_id || !body.user_username) {
        return res.status(400).json({ status: 0, message: "Missing required fields" });
    }

    paramUser = {
        user_branch_id: body.user_branch_id,
        user_username: body.user_username
    };
    // console.log("Node: Body => "+req.body);               
    console.log("Body Data:", req.body); // Debugging, lihat di terminal
    userModel.create(paramUser).then((insertId) => {
        // console.log('USER CREATE: user_id => ', insertId);
        // returnJson(res, 1, 'Success Created user_id => '+ insertId);     
        res.status(200).send({status:1,message:'Created',user_id: insertId});                                 
    }).catch((error) => {
        console.error('ERROR:', error.sqlMessage);
        res.status(400).send({status:0,message:'Error'});                        
        // returnJson(res, 0, error.sqlMessage);                                             
    });      
};

exports.updateUser = (req, res) => {
    let body = req.body;    
    if (!body.user_id) {
        return res.status(400).json({ status: 0, message: "Missing required fields" });
    }     
    const userID = body.user_id;
    console.log(userID);
    // res.send(`Update user dengan ID: ${userId}`);
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
};

exports.deleteUser = (req, res) => { //Works
    let body = req.body;            
    const userID = body.user_id;
    // res.send(`Hapus user dengan ID: ${userId}`);
    userModel.delete(userID).then((affectedRows) => {
        console.log('USER DELETE: ', userID);
        // returnJson(res,1,'Deleted '+userID);
        res.status(200).send({status:1,message:'Deleted '+userID});   
    }).catch((error) => {
        console.error('ERROR:', error.sqlMessage);
        // returnJson(res, 0, error.sqlMessage);  
        res.status(400).send({status:0,message:'Error'});                     
    });    
};
