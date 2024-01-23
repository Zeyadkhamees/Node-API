const express = require('express')
var { saveUser, getAllUsers ,login} = require('../controllers/users')
var router = express.Router()





router.get("/" ,async (req, res) => {
    try {
        var users = await getAllUsers()
        res.status(200).json(users)
    } catch (e) {

    }

})

router.post("/", async (req, res) => {
    var user = req.body

    var newUser = await saveUser(user)

    res.json(newUser)
})



router.post('/login',login)


module.exports = router