const express = require('express')

const db = require('../db')

const { users } = require('../db/schema')

const router = express.Router()

// handle get request for path /users

router.get('/users', async (request, response) => {
	const users = await db.query.users.findMany()

	return response.json(users)
})

module.exports = router
