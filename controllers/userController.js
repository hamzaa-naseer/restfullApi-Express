//user model
const User = require('../model/User');

//get all users
const get_all_users = (req, res) => {
    User.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
 }

//create a user
const create_user = (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
}

//get user by id
const get_user_by_id = (req, res) => {
    User.findById(req.params.id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
}

//update user by id
const update_user_by_id = (req, res) => {
    User.updateOne({_id: req.params.id}, 
        {$set: {name: req.body.name, age: req.body.age, email: req.body.email, password: req.body.password}})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
}
 
//delete user by id
const delete_user_by_id = (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
}

module.exports = {
    get_all_users,
    create_user,
    get_user_by_id,
    update_user_by_id,
    delete_user_by_id
};
