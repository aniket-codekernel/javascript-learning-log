//E. Add, Change, Delete
const user = {name:"Aniket"};
console.log(user)  //{ name: 'Aniket' }
user.age=20;  //add new key and values
console.log(user)  //{ name: 'Aniket', age: 20 }
user.name="ani"  //change an exting one
console.log(user)    //{ name: 'ani', age: 20 }
delete user.age   //delete user specfific key and value
console.log(user) //{ name: 'ani' }

