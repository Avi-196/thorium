function trim() {
    let name='   Avinay   Mishra'
    console.log('Trimmed name is:',name.trim())
}
 function changetoLowercase(){
     let name='AVINAY MISHRA'
     console.log('Name in lowercase is:',name.toLowerCase())
 }

 function changetoUpperCase(){
     let name ='avinay mishra'
     console.log('Name in uppercase is:',name.toUpperCase())
 }

 module.exports.trim=trim
 module.exports.changetoLowercase=changetoLowercase
 module.exports.changetoUppercase=changetoUpperCase