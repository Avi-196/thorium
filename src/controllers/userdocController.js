const UserDocModel=require('../models/userdocumentModel')


const CreateUserDoc= async function (req, res) {
    let documents = req.body
    if(!documents.hasOwnProperty('isFreeAppUser')){
        res.send('the request is missing a mandatory header')
    }
    let createdoc = await UserDocModel.create(documents)
    res.send({data: createdoc})
}

module.exports.CreateUserDoc=CreateUserDoc