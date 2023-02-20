// conditions and loops
let age = 18
if(age>=18){
    console.log("you are allowed")
}
else{
    console.log("Not Allowed");
}

let signal = "Pink"
if(signal == "Red"){
    console.log("Red==Stop");
}
else if(signal=="yellow"){
console.log("yelow==GO slow");
}
else if(signal=="Green"){
    console.log("Green==GO Fast");
    }
else{
    console.log("Invalid");
}

// switch case is alternate of if else 
let user = "Admin"
switch(user){
    case "Admin":
        console.log("He is Admin");
        break;
    case"Student":
        console.log("He is Student");
        break;

    case "Mentor":
            console.log("He is Mentor")
            break;

    default:
        console.log("I a default");
}



// Loops

// Do while 
//  while
//  for

for(let i=0;i<5;i++){
    console.log(i);
}

// while(intailize, condition, inc/dec)

let i = 0;
while(i < 5){
    console.log(i);
    i++;

}

// do while
let a = 0;
do{
    console.log("hello World")
    a++;

}while(a<5)


// taenary operator

// Condition?True:False

isloggedin = true;
isloggedin? console.log("Home Page") : console.log("Login");

