const userModel = require('../models/user');

const addUser = (req, res) => {
    try {
        const { fname, lname, email, password, phone } = req.body;
        userModel.create({
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            phone: phone
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => res.status(400).json({'err' : 'something went wrong'}));
    }
    catch(err){
        res.status(400).json({'err' : 'something went wrong'})
    }
}

const getUsers = (req, res) => {
    try{
        userModel.find()
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => res.status(400).json({'err' : 'something went wrong'}));
    }
    catch(err){
        res.status(400).json({'err' : 'Users not found'});
    }
}

const getUserById = (req, res) => {
    try{
        const id = req.params.id;
        userModel.findById({_id : id})
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => res.status(400).json({'err' : 'User not found'}));
    }
    catch(err){
        res.status(400).json({'err' : 'User not found'});
    }
}

module.exports = { addUser, getUsers, getUserById };