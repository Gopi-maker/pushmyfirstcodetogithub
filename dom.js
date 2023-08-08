//console.dir(document);
//onsole.log(document.domain);
//const headerTitle=document.getElementById("header-title");
//console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.style.borderBottom="solid 3px black";
//console.log(headerTitle.textContent);
//const qrty=document.querySelector(".title");
//console.log(qrty);
//const items=document.getElementsByClassName("list-group-item");
//console.log(items);
//items[1].textContent="gopi";
//const items=document.getElementsByClassName("title");
//console.log(items);
//for(let i=0;i<items.length;i++){
// items[0].style.fontWeight="bold";
// items[0].style.color="green";
//}
//const header=document.querySelector(".title:nth-child(1)");
//console.log(header);
//const h1=document.getElementsByTagName("title");
//console.log(h1.innerText);
// const itm=document.getElementsByClassName("list-group-item");
// itm[2].style.backgroundColor="green";
// for(let i=0;i<itm.length;i++){
//     itm[i].style.fontWeight="bold";
// }


// //className method override by tagname method
// const li=document.getElementsByTagName("li");
// li[3].style.color="blue";
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor="#f4f4f4";
// }

// const query1=document.querySelector(".list-group-item:nth-child(2)");
// query1.style.backgroundColor="green";
// const query2=document.querySelector(".list-group-item:nth-child(3)");
// query2.style.display="none";

// const select1=document.querySelectorAll(".list-group-item");
// select1[1].style.color="green";
// let odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
// for(let i=0;i<odd.length;i++){
//     odd[i].style.background="green";
// }

//Dom treversing
const parent=document.querySelector("#items");
//console.log(parent.childNodes);
//console.log(parent.children);
//parent.children[1].style.color="blue";
// 
const newDiv=document.createElement('div');
newDiv.className="gopi";
newDiv.id="gopi";
const text=document.createTextNode("HEllo");
newDiv.appendChild(text);
//console.log(newDiv);
const bd=document.querySelector('header .container');
const div=document.querySelector("header h1");
bd.insertBefore(newDiv, div);

const le=document.createElement("li");
le.className="list-group-item";
const nodet=document.createTextNode("HEllo");
le.appendChild(nodet);
const list=document.querySelector(".list-group");
console.log(list);
const li=document.querySelector('.list-group-item:nth-child(1)');
list.insertBefore(le,li);
console.log(li);