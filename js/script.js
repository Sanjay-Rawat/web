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

// function filterPost(post) {
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
// let person={
//     firstName:"sanjay",
//     lastName:"rawat",
//     age:24,
//     flag:true

// }
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


//========================================02/06/2021=================================================
// # Dates

// let d = new Date(); //string Date
// console.log(d) 
// console.log(d.getDate())  //  date
// console.log(d.getDay()) // index of day where sunday is 0 and monday is 1.....
// console.log(d.getFullYear()) //  year
// console.log(d.getHours()) // hour
// console.log(d.getMilliseconds()) // milliseconds
// console.log(d.getMinutes()) // minute
// console.log(d.toISOString())
// console.log(d.toUTCString())

// console.log(d.getHours())
// d.setHours(12)
// console.log(d.getHours())
// validTill= d.setHours(d.getHours() +1) //

// console.log(Date.now()) // Timestamp DateTime

// const timeStamp=1622596307856;
// const abc = new Date(timeStamp)
// console.log(abc.getDate())

// # Event Handling
    // function eventHandler(event){
    //     document.getElementById("abc").innerHTML="something"
    //     console.log(event)
        // event.preventDefault();

        // console.log("Event Happen");
    // }

    // function onBodyInit(){
    //     console.log("DOM is ready")
    // }

    // function onDivScroll(){
    //     console.log("Div is scrolling")
    // }
//========================================03/06/2021=================================================
// #How to access html tags through JS?
// function myFunction() {
    // document.getElementById("demo").innerHTML = "<b>this is a bold text</b> <p>this is normal text</p>";
    // document.getElementById("demo").innerText = "this is text value";
    // console.log( document.getElementsByTagName("p"))
    // document.getElementsByTagName("p")[1].innerText = "this is text value";
//  const name =document.getElementsByName("firstName")[0];
//  name.value="test"
//  name.remove()
 
// name.values="changes value"

// let abc = document.querySelector("#demo")
// abc.innerHTML= "<b>bold text</b>"
// }




// #eventOdd

// const num= "fdsafdsa";
// const result = isEven(num)
// console.log(result)


// function isEven(num){
//     // if(num%2==0){ // when num is even
//     //     return 'even'
//     // }
//     // return 'odd'
//     if( typeof num != 'number'){
//         return 'Not a valid Number'
//     }
//     return num%2==0 ? 'even' : 'odd';
// }

// let  arr =[12,67,54,98,40,33];
//  for even => even-5
//  for odd => odd-5

// for( let i=0; i<arr.length;  i++ ){
//     if(arr[i]%2==0){ //when element is event
//         arr[i]= arr[i]-5;
//     }else{ // when element is odd
//         arr[i]= arr[i]+5;
//     }
// }


// function abc(){

// }
// const abc = function(){

// }
// const abc = () =>{

// }


// let result  =arr.map( (element)=>{
//     return element % 2 ==0 ? element -5 : element +5
    // if(element % 2==0){
    //     element = element -5;
    // }else{
    //     element = element +5
    // }
    // return element
// })

// console.log(result)

//========================================04/06/2021=================================================
// function onVideoPlay(){
//     console.log("video has started")
// }


// function playAudio(){
//     var audio = new Audio('in.aac');
//     audio.play();
// }


// function appendElement(){
//     var result  = document.createElement("h1");  
//     result.innerText="This is a h1 tag"
//     document.getElementById('abc').appendChild(result)
//     // console.log(result)
//     // node.innerText="This is a bold text";
//     // document.getElementById("abc").appendChild(node)
// }


// let numbers = [32,54,67,43,98];


// const result = numbers.map(function xyz(num){
//     if(num%2==0){
//         return 'even'
//     }else{
//         return 'odd'
//     }
// })
// console.log(result)


// input :  6
// output : 6*5*4*3*2*1


// const num= 5;
// let result=1; 
// for(let i=1; i<=num; i++){
//     result = result * i
// }
// console.log(result)


console.log("changed value")


//========================================05/06/2021=================================================
//========================================06/06/2021=================================================