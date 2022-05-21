const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title has to be at least 2 characters long"]
    },
    company: {
        type: String,
        required: [true, "Company is required"],
        minlength: [2, "Company has to be at least 2 characters long"]
    },
    salary: {
        type: Number,
        required: [true, "Salary is required"],
        min: [0, "Must earn something at least"]
    },
    remote: {
        type: Boolean,
    }

}, {timestamps: true})

// creating Product schema and calling it Product
module.exports.Job = mongoose.model('Author', JobsSchema)