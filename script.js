document.querySelector(".btn").addEventListener("click",()=>{
    let Profile = document.querySelector("#git").value
    document.querySelector(".gitt").innerHTML = Profile;

    let f = document.querySelector("#FN").value
    let l = document.querySelector("#LN").value
    document.querySelector("#nm").innerHTML = `${f} ${l}`

    let phno = document.querySelector("#PN").value
    document.querySelector(".pn").innerHTML = phno;

    let maill = document.querySelector("#mail").value;
    document.querySelector(".maiil").innerHTML = maill;

    let addr= document.querySelector("#Add").value
    document.querySelector(".address").innerHTML = addr;
    
    
})

document.querySelector(".clk").addEventListener("click",()=>{
let list = document.querySelector(".list");
    let newlst = document.createElement("li");
    var educ = document.querySelector("#educ").value
    var node = document.createTextNode(educ);
    newlst.appendChild(node);
    list.appendChild(newlst);
})
document.querySelector(".cl").addEventListener("click",()=>{
let list = document.querySelector(".listt");
    let newlst = document.createElement("li");
    var ach = document.querySelector("#ach").value;
    var node = document.createTextNode(ach);
    newlst.appendChild(node);
    list.appendChild(newlst);
})

