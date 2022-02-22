const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

//1. get/movies return the array  movies
router.get('/movies', function(req,res) {
    res.send('["pushpa","udaan","venom","matrix","endgame"]')

})
//2 GET /movies/1 is a valid request and it should return the movie in your array at index 1

router.get('/movies/:movieId',function(req,res) {
     let movi=["pushpa","udaan","venom","matrix","endgame"]
    let value=req.params.movieId;
    if (value>movi.lenghth-1){
        res.send("does not exist")
    }else{
        res.send(movi[value])
    }
})
 //3
 //router.get('/moviezs',function(req,res){
   //  res.send()
 //}

 //4
   router.get('/films/:filmId',function(req,res){
       let moviee=[{id:1,name:'The shining'},{id:2,name:'incendies'},{id:3,name:"Rang De Basanti"},{id:4,name:"Finding Demo"}]
       let value=res.params.filmId;
       let found =false;
       for(i=0;i<moviee.length;i++){
           if (moviee[i].id==value){
               found=true
               res.send(moviee[i])
               break;

           }
       } 
       if(found==false){
           res.send('No movies exists with this id')
       }
       
   })








module.exports = router;
