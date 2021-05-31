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


const posts = [
  {
    text: 'post 1',
    is_deleted: true,
  },
  {
    text: 'post 2',
    is_deleted: false,
  },
  {
    text: 'post 3',
    is_deleted: false,
  },
];

const result = posts.filter(fiterPost);
console.log(result);

function fiterPost(post) {
  if (post.is_deleted == true) {
    return false;
  } else {
    return true;
  }
  // return post.is_deleted == true ? false : true;
}
