// select one
var elem = document.getElementById('one');
// elem.className = 'blue';
var elem2 = document.querySelector('li.red'); 
// elem2.className = 'yellow';
// select n
//HTMLCollection live(유사배열)
var elems = document.getElementsByClassName('red'); 
// // 하나만 변경됨 - 상태가 바뀌자마자 배열에 반영되기 때문
// for(let i=0;i<elems.length;i++){ 
//     elems[i].className = 'blue';
// }
// 실제 배열로 바꾸어 처리(권장)
var arr = [...elems];
// for(var i=0;i<arr.length;i++){
//     arr[i].className = 'blue';
// }
// querySelectorAll : non-live
elems = document.querySelectorAll('li.red');
// getElementsByTagName : non-live
elems = document.getElementsByTagName('li');
console.log([...elems]);
[...elems].forEach(elem => elem.className = 'blue');
// parent node
var elem = document.querySelector('#two');
var parent = elem.parentNode;
parent.className = 'backblue';
console.log(elem);
// first,last child
// // 정상동작하지 않음. 공백도 child로 받기 때문
// parent.firstChild.className = 'yellow'; 
// parent.lastChild.className = 'yellow'; 
parent.firstElementChild.className = 'yellow';
parent.lastElementChild.className = 'yellow';
// hasChildNode() boolean
// childNodes : 텍스트 요소를 포함한 자식 노드 컬렉션 반환(non-live)
// children : 텍스트 요소 x, live
var child = parent.childNodes;          // NodeList(9)
var children = parent.children;         // HTMLCollection(4)
if(parent.hasChildNodes()){
    for(let i=0;i<child.length;i++){    // 3 (1) 3 (1) 3 (1) 3 (1) 3 
        console.log(child[i].nodeType); // 5 texts, 4 elements 
    }
    for(let i=0;i<children.length;i++){ // 1 1 1 1
        console.log(children[i].nodeType); // 4 elements
    }
}
// previousSibling, nextSibling
parent.firstElementChild.nextElementSibling.className = 'red';
parent.lastElementChild.previousElementSibling.className = 'red';
// 조작 : 텍스트 노드 접근&수정
// 텍스트 노드의 부모 => firstchild.nodeValue
var one = document.getElementById('one'); // li#one.yellow
var textNode = one.firstChild;
textNode.nodeValue = 'Pusan';
one.innerText = 'Busan';
// 조작 : attribute node 접근&수정
// classList
var liList = document.querySelectorAll('li');
[...liList].forEach(li =>{
    if(li.className === 'red'){
        li.className = 'blue';
    } else{
        li.className = 'red';
    }
});
[...liList].forEach(li =>{
    if(li.classList.contains('red')){
        li.classList.replace('red','blue');
    }
    if(li.classList.contains('blue')){
        li.classList.replace('blue', 'red');
    }
});
var heading = document.querySelector('h1');
console.dir(heading);
heading.id = "heading";
console.log(heading.id);
// hasAttribute() : boolean
// getAttribute() : get, String
// setAttribute() : set
// removeAttribute() : remove
var input = document.querySelector('input[type=text]');
console.log(input);
if(!input.hasAttribute('value')){
    input.setAttribute('value','hello');
}

var str = input.getAttribute('value');
console.log(str);
var $password = document.querySelector('.password');
var $show = document.querySelector('.show');
var makeClickHandler = function(){
    let isShow = false;
    return function(){
        $password.setAttribute('type', isShow ? 'password' : 'text');
        isShow = !isShow;
    }
}
$show.onclick = makeClickHandler();
// textContent
var ul = document.querySelector('ul');
console.log(ul.textContent);
one.textContent += ', Korea';
one.textContent = '<h1>Seoul</h1>';
// innerText(비표준, visibility:hidden;이면 텍스트 반환 안됨), innerHTML
console.log(ul.innerHTML);
one.innerHTML = 'Seoul<em class="blue">, Korea</em>';
// createElement(tag name)
// createTextName(Content)
// appendChild(Node)
// removeChild(Node)
var newElem = document.createElement('li');
var newText = document.createTextNode('Beijing');
newElem.appendChild(newText);
var ul = document.querySelector('ul');
ul.appendChild(newElem);
var one = document.querySelector('#one');
ul.removeChild(one);
// insertAdjacentHTML(position, string)
/** 
 * position : 
 * 'beforebegin' 
 * <p>
 * 'afterbegin' 
 * content
 * 'beforeend' 
 * </p>
 * 'afterend'
 * */ 
var two = document.getElementById('two');
// var two = document.querySelector('#two');
two.insertAdjacentHTML('beforeend','<em class="blue">, Korea</em>')

// var four = document.getElementById('four');
var four = document.querySelector('#four');
console.log();
