//J. Nested Objects and Optional Chaining
const user={
    name:"anikeyt",
    address:{city:"nagpur",pin:445204},
};
console.log(user.address.city)  //nagpur
console.log(user.address.pin)  //445204
//console.log(user.job.title);             // TypeError! job is undefined
console.log(user.job?.title);            // undefined (safe, no crash)
console.log(user.job?.title ?? "noo");   // "noo" (default value)
//?. means: “if the thing before me is null or undefined, stop and return undefined.”




