let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let date = document.getElementById("date");
let time = document.getElementById("time");
let seats = document.getElementById("seats");
let datasaving = document.getElementById("datasaving");
let reserve = document.getElementById("reserve");

 reserve.addEventListener("click",()=> {
    let newdiv = document.createElement("div");
    datasaving.appendChild(newdiv);
    newdiv.classList.add("newdiv")
    
    let newname = document.createElement("input");
    newname.value = name.value;
    newname.setAttribute("readonly","readonly");
    newdiv.appendChild(newname);

    let newemail = document.createElement("input");
    newemail.value = email.value;
    newdiv.appendChild(newemail);

    newemail.setAttribute("readonly","readonly");
   

    let newphone = document.createElement("input");
    newphone.value = phone.value;
    newphone.setAttribute("readonly","readonly");
    newdiv.appendChild(newphone);

    
    let newdate = document.createElement("input");
    newdate.value = date.value;
    newdate.setAttribute("readonly","readonly");
    newdiv.appendChild(newdate);


    let newtime = document.createElement("input");
    newtime.value = time.value;
    newtime.setAttribute("readonly","readonly");
    newdiv.appendChild(newtime);

    
    let newseats = document.createElement("input");
    newseats.value = seats.value;
    newseats.setAttribute("readonly","readonly");
    newdiv.appendChild(newseats);   
    
    let editbutton = document.createElement("button");
    editbutton.innerHTML = "Edit";
    editbutton.classList.add("editbutton");
    newdiv.appendChild(editbutton);
    editbutton.addEventListener("click",function(){
        newname.removeAttribute("readonly","readonly");
        newemail.removeAttribute("readonly","readonly");
        newphone.removeAttribute("readonly","readonly");
        newdate.removeAttribute("readonly","readonly");
        newtime.removeAttribute("readonly","readonly");
        newseats.removeAttribute("readonly","readonly");

    })

    let savebutton = document.createElement("button");
    savebutton.innerHTML = "save";
    savebutton.classList.add("savebutton");
    newdiv.appendChild(savebutton);
    savebutton.addEventListener("click",function(){
        newname.setAttribute("readonly","readonly");
        newemail.setAttribute("readonly","readonly");
        newphone.setAttribute("readonly","readonly");
        newdate.setAttribute("readonly","readonly");
        newtime.setAttribute("readonly","readonly");
        newseats.setAttribute("readonly","readonly");
    })

    let cancelbutton = document.createElement("button");
    cancelbutton.innerHTML = "cancel"
    cancelbutton.classList.add("cancelbutton");
    newdiv.appendChild(cancelbutton);
    cancelbutton.addEventListener("click",function(){
        newdiv.style.display = "none"
    })
})


