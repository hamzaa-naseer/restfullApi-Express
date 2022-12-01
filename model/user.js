const mongodb = require('mongoose');
const express = require('express');
//require db    
const db =require('../_db/server');


const Schema = mongodb.Schema;
const userSchema = new Schema({

    name: {
        required: true,
        type: String
    },

    age: {
        required: true,
        type: Number
    },

    email:  {
        required: true,
        type: String
    },

    password: {
        required: true,
        type: String
    },
    
});
const User = mongodb.model('User', userSchema);
module.exports = User;
