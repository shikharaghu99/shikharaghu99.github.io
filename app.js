function myFunction(){
    var x=document.getElementById("nav");
    if(x.className=== "header"){
        x.className+=" resp";
    }
    else{
        x.className="header";
    }
}

function showHome(){
    let home = document.getElementById("Home");
    let about = document.getElementById("About");
    let edu = document.getElementById("Education");
    let proj = document.getElementById("Projects");
    let con = document.getElementById("Contact");
    home.style.display="block";
    about.style.display="none";
    edu.style.display="none";
    proj.style.display="none";
    con.style.display="none";
}
function showAbout(){
    let home = document.getElementById("Home");
    let about = document.getElementById("About");
    let edu = document.getElementById("Education");
    let proj = document.getElementById("Projects");
    let con = document.getElementById("Contact");
    home.style.display="none";
    about.style.display="block";
    edu.style.display="none";
    proj.style.display="none";
    con.style.display="none";
}
function showEducation(){
    let home = document.getElementById("Home");
    let about = document.getElementById("About");
    let edu = document.getElementById("Education");
    let proj = document.getElementById("Projects");
    let con = document.getElementById("Contact");
    home.style.display="none";
    about.style.display="none";
    edu.style.display="block";
    proj.style.display="none";
    con.style.display="none";
}
function showProject(){
    let home = document.getElementById("Home");
    let about = document.getElementById("About");
    let edu = document.getElementById("Education");
    let proj = document.getElementById("Projects");
    let con = document.getElementById("Contact");
    home.style.display="none";
    about.style.display="none";
    edu.style.display="none";
    proj.style.display="block";
    con.style.display="none";
}
function showContact(){
    let home = document.getElementById("Home");
    let about = document.getElementById("About");
    let edu = document.getElementById("Education");
    let proj = document.getElementById("Projects");
    let con = document.getElementById("Contact");
    home.style.display="none";
    about.style.display="none";
    edu.style.display="none";
    proj.style.display="none";
    con.style.display="block";
}
function icon(){
    let list=document.getElementById("Network");

    list.addEventListener("mouseover" , function(event){
        event.target.style.color="red";
        
    })
    list.addEventListener("mouseout" , function(event){
        event.target.style.color="black";
    })
}
// for displaying date and time
   var p=document.getElementById("forDate");

   var g= setInterval(function(){ 
        var d=new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var m = months[d.getMonth()];
        var day=d.getDate();
        var y=d.getFullYear();
        var t = d.toLocaleTimeString();
        var ans= day+'-'+m+'-'+y+"   "+ t;
        p.innerHTML=ans;
    }, 1000);

function remImg1(){
        let one=document.getElementById("one");
        let store=document.getElementById("g1");
        let d=document.createElement("div");
        let x=document.createTextNode("Web application project based on Java following MVC design pattern. It has two modules Admin Module and Voter Module. First all the eligible voters will register themselves and after registration they can login using Unique Id i.e, Adhar number and Password. The Admin will register the candidate with their party name and symbol. The Admin can show the result after the voting phase.")
        d.appendChild(x);
        d.style.color="blue";
        d.style.backgroundColor="yellow";
        d.style.borderRadius="5%";
        one.replaceChild(d,store);
            d.addEventListener("mouseout" , function(event){
                d.parentElement.replaceChild(store,d);
            })
}
function remImg2(){
     let two=document.getElementById("two");
     let store=document.getElementById("g2");
     let d=document.createElement("div");
     let x=document.createTextNode("Desktop application based on Java. It is implemented using Java8 features. It has three modules Administrative, Management and Doctors. Administrative module for generating account for hospital staff. Management module through which receptionist books the appointment,here OTP generation is done while booking. Doctors module in which the doctor can check theirappointments.");
     d.appendChild(x);
     d.style.color="blue";
     d.style.backgroundColor="yellow";
     d.style.borderRadius="5%";

     two.replaceChild(d,store);

     d.addEventListener("mouseout" , function(event){
        d.parentElement.replaceChild(store,d);
    })
}
function remImg3(){
    let three=document.getElementById("three");
    let store=document.getElementById("g3");
    let d=document.createElement("div");
    let x=document.createTextNode("Java Desktop based application, containing two phases. Administration Phase for managing account, login id and password, cashier registration and adding or removing the category or dish. Management Phase for placing order and billing. This is a beginner level project for better understanding of database management and java dao and pojo classes. ")
    d.appendChild(x);
    d.style.color="blue";
    d.style.backgroundColor="yellow";
    d.style.borderRadius="5%";
    three.replaceChild(d,store);
    d.addEventListener("mouseout" , function(event){
        d.parentElement.replaceChild(store,d);
    })
}
function remImg4(){
    let four=document.getElementById("four");
    let store=document.getElementById("g4");
    let d=document.createElement("div");
    let x=document.createTextNode("Implemented in C langusge using file handling. Dynamic application providing facilitiesofbooking and cancellation of tickets. Displays the availability of seats. Provides addition and removal of trains.")
    d.appendChild(x);
    d.style.color="blue";
    d.style.backgroundColor="yellow";
    d.style.borderRadius="5%";
    four.replaceChild(d,store);

    d.addEventListener("mouseout" , function(event){
        d.parentElement.replaceChild(store,d);
    })
}