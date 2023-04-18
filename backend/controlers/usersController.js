
const User = require("../models/usersModel");

const getAllUsers = (req, res) => {
    try {
        User.find({}, (err, data) => {
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const signup = async (req, res) => {
    try {
        const newUser = await User.signup(req);
        res.status(201).json(newUser)
    }
    catch (err) {
        await res.status(500).json({ error: err.message })
    }

}
const login = async (req, res) => {
    try {
        const newUser = await User.login(req);
        res.status(201).json(newUser)
    }
    catch (err) {
        await res.status(500).json({ error: err.message })
    }

}

module.exports = { 
    getAllUsers, 
    signup, 
    login };
