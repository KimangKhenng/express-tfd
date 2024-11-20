
const asyncHandler = require('express-async-handler')
const userModel = require('../models/user-model')

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await userModel.find({})
    return res.json(users)
})

const updateById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await userModel.updateOne({ _id: id }, req.body)
    return res.json(result)
})

const getUserById = asyncHandler(async (req, res) => {
    const id = req.params.bookId
    const user = await userModel.findById(id)
    return res.json(user)
})

const createUser = asyncHandler(async (req, res) => {
    const user = new userModel(req.body)
    const result = await user.save()
    return res.send(result)
})

const deleteById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = await userModel.deleteOne({ _id: id })
    return res.json(result)
})

module.exports = { getAllUsers, getUserById, createUser, deleteById, updateById }