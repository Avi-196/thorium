function printDate(Date){
    let today=new Date()
    let date=today.getDate()+'_'+(today.getMonth() +1 )+'_'+today.getFullYear()
    console.log('console date is:',date)


}

 function printMonth(){
     let today=new Date()
     let month=today.getMonth()+1
     console.log(' current month is:',month)
 }

   function getBatchInfo(){
       console.log('Thorium,W3D1,the topic for today is Nodejs module system')
   }
   module.exports.PrintCurrentDate=printDate
   module.exports.PrintCurrentMonth=printMonth
   module.exports.printBatchInfo=getBatchInfo