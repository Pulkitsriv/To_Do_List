//                                                 Console Operations
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// console.log(document.links);
// console.log(document.all);
// document.all[5].textContent='hello world';
// console.log(document.all[12].textContent);       
// console.log(document.all[12].innerText);


//                                         Getting Element in a document by ID
// let header=document.getElementById('header-title');
// header.style.backgroundColor='red';
// header.innerHTML="<h3>H3</h3>";
// console.log(header)


//                                      Getting Element in a document by classname
// var items=document.getElementsByClassName("list-group-item");
// console.log(items)
// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='lightgreen';
//     Object.assign(items[i].style,{color:'orange',fontWeight:'bold'})
// }


//                                        Getting Element in a document by tagname
// var items=document.getElementsByTagName("li");
// console.log(items)
// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='lightgreen';
//     Object.assign(items[i].style,{color:'orange',fontWeight:'bold'})
// }


//                                     Getting Element in a document by QuerySelector
// var heading=document.querySelector(".title");
// heading.style.backgroundColor='green'


//                                     Getting Element in a document by QuerySelectorAll
// var heading=document.querySelectorAll(".title");
// for(let i=0;i<heading.length;i++){
//     heading[i].style.backgroundColor='green';
// }


//                                                  Traversing in DOM
// var itemList=document.getElementById('items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='lightgrey';
// console.log(itemList.parentElement);
// console.log(itemList.childNodes);
// console.log(itemList.children);                     //only child nodes of particulars 
// itemList.children[1].style.backgroundColor='yellow';
// console.log(itemList.nextSibling);                  //include text nodes
// console.log(itemList.nextElementSibling);           //does not include text node


//                                                        Events
// Used before DOM by calling onclick in HTML
// function buttonClick(){
//     console.log("Hello World");
// }

// New Method
// var button=document.querySelector('#btn');
// button.addEventListener('click',addEvent);
// function addEvent(e){
//     console.log(e);                    //all methods on events can be accessed
//     console.log(e.target);             //return element by which event is fired
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log(e.ctrlKey);
//     console.log(e.altKey);
//     console.log(e.shiftKey);
//     console.log(e.value);
//     console.log('1');
//     var mainTitle=document.getElementById('main-title');
//     mainTitle.innerText='changed';
// }

// To stop refresh behaviour every time ,makes refresh only once
// var button=document.querySelector('#btn');
// var form=document.getElementById('addForm');
// form.addEventListener('submit',runEvent);
// button.addEventListener('click',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);
// function runEvent(e){
    // e.preventDefault();
    // console.log('1');                                   //work on the add items submit button
    // console.log("Event type :"+e.type);
// }


//                                                       Themes
// const themeColors=document.querySelectorAll('[name="theme"]');


//                                                     store themes
// const storeTheme=function(theme){
//     localStorage.setItem('theme',theme);
// }
// const applyTheme=function(){
//     const activeTheme=localStorage.getItem('theme');
//     themeColors.forEach((themOption)=>{
//         if(activeTheme===themOption.id){
//             themOption.checked=true;
//         }
//     })
// }
// themeColors.forEach((themOption)=>{
//     themOption.addEventListener('click',()=>{
//         console.log(themOption)
//         storeTheme(themOption.id)
//     })
// })
// document.onload=applyTheme();


//                                                   Add or Delete               ***IMP 
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',addEvent)
itemList.addEventListener('click',removeEvent);
function addEvent(e){
    e.preventDefault();
    var item=document.getElementById('item').value;
    // console.log(item)
    var newItem=document.createElement('li');
    // console.log(newItem);
    newItem.className='list-group-item';
    newItem.appendChild(document.createTextNode(item));
    // console.log(newItem)
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    newItem.appendChild(deleteBtn);
    itemList.appendChild(newItem);
}
function removeEvent(e){
    if(e.target.classList.contains('delete')){
        if(confirm('delete')){
            var li=e.target.parentElement;
            // console.log(li)
            itemList.removeChild(li);
        }
    }
}