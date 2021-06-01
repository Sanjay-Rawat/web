// let arr= [1,2,3,4,5,6,7,8];

// cos

// const result =arr.filter(isEven);
// function isEven(number){
//     if(number%2==0){
//         return true;
//     }else{
//        return false
//     }
// }

// const data= [10,20,30,40];

// console.log(data.reverse())

// const result = data.map(addLastName)
// console.log(result)

// function addLastName(number){
//     return number +11
// }

// [].

// var name="sanjay"
// console.log(`my name is ${name}`);

// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3= arr1.concat(arr2)
// console.log(arr3)

// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[...arr1, ...arr2]
// console.log(arr3)

// const studentData= {
//     "photo_urls" : ["....abc.png" , "....xyz.gif"],
//     videos_urls :[],
//     created_by:{
//         "name":"abc",
//     },
//     create_at:362187362
// }

// console.log(studentData.address)
// // console.log(`My name is ${studentData.firstName} ${studentData.lastName}`)

// ["hghj","gfhjgj","ghfhjgkj"]
// const post =

// const post =["sanjay","63426743","fhj"]


// const posts = [
//   {
//     text: 'post 1',
//     is_deleted: true,
//   },
//   {
//     text: 'post 2',
//     is_deleted: false,
//   },
//   {
//     text: 'post 3',
//     is_deleted: false,
//   },
// ];

// const result = posts.filter(fiterPost);
// console.log(result);

// function fiterPost(post) {
//   if (post.is_deleted == true) {
//     return false;
//   } else {
//     return true;
//   }
//   // return post.is_deleted == true ? false : true;
// }



//========================================01/06/2021=================================================
// # == vs ===
// let a=20;
// let b='20';
// console.log(a==b)
// console.log(a===b)


// # Switch Case
// switch(a){
//     case 20:
//         console.log("value is 20");
//         break;
//     case 30:
//         console.log("value is 30")
//         break;
//     case 40:
//         console.log("value is 40")
//         break;
// }

// # Break

// for(let i=0;i<5;i++){
//     if(i==4){
//         break;
//     }
//     console.log(i)
// }

// # Continue
// for(let i=0;i<=5;i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }

// # Logical Operators (&&, || , !)
// if(true && true){ 
//     console.log("if block")
// }else{
//     console.log("else block")
// }

// if(true || true){ 
//     console.log("if block")
// }else{
//     console.log("else block")
// }


// let isBulbOn = true;

// function toggleBulb(){
//     isBulbOn = !isBulbOn
//     console.log(isBulbOn)
// }

// # Object Operations(add,delete,update)
let person={
    firstName:"sanjay",
    lastName:"rawat",
    age:24,
    flag:true

}
// console.log(person["firstName"])
// console.log(person.firstName)

// person["age"]=25;
// person.age=25;
// console.log(person)

// person.firstName="abc xyz"
// console.log(person)


// delete person.firstName;
// console.log(person)

// #spread Operator in Objects
// let updatedPerson = {...person, age:25}
// console.log(updatedPerson)

// # Object Destructuring
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// const {firstName,lastName,age} = person
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// const {firstName,...xyz } = person
// console.log(xyz)
// console.log(firstName)
// # Array Destructuring

// const names=["subhash","rawat","pankaj","sunil"];
// const [firstName, ...restName] = names;
// console.log(restName)

// # Dates
//========================================02/06/2021=================================================
//========================================03/06/2021=================================================
//========================================04/06/2021=================================================
//========================================05/06/2021=================================================
//========================================06/06/2021=================================================