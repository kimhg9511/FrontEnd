// object => JSON string(직렬화, stringify)
const o = { 
    name: 'Lee',
    gender: 'male',
    age: 20
};
// console.log(typeof o);                      // object
const strObject = JSON.stringify(o);        
// console.log(typeof strObject, strObject);   // string{"name":"Lee","gender":"male","age":20}
const strp = JSON.stringify(o,null,2);
// console.log(strp);

// JSON string => object(역직렬화, parse)
const newo = JSON.parse(strObject);
// console.log(newo);

// array => JSON string (일반적인 경우)
const todos = [
    {id: 1, content: 'HTML', complete: true},
    {id: 2, content: 'CSS', complete: true},
    {id: 3, content: 'Javascript', complete: false}
]
const astr = JSON.stringify(todos);
// console.log(typeof astr,astr);

// JSON string => array
const retodos = JSON.parse(astr);
// console.log(typeof retodos, retodos);

// AJAX : XMLHttpRequest
// XMLHttpRequest객체 생성
const xhr = new XMLHttpRequest();
// 비동기방식으로 Request 오픈
xhr.open('GET','18_users.json');
console.dir(xhr);
// Request 전송
xhr.send();
xhr.onreadystatechange = function(e){
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    if(xhr.status === 200){
        var response = xhr.responseText;
        console.log(response);
        var o = JSON.parse(response);
        var content = '<ul>';
        var tbcontent= '';
        o.employee.forEach(data => {
            content +="<li>" + data.lastName + " " + data.firstName + "</li>";
            tbcontent += '<tr>';
            tbcontent += '<td>' + data.lastName + '</td>';
            tbcontent += '<td>' + data.firstName + '</td>';
            tbcontent += '</tr>';
        });
        content += '</ul>';
        document.querySelector('#content').innerHTML = content;
        document.querySelector('#tbcontent').innerHTML = tbcontent;
    }else{
        console.log('ERROR' + xhr.status);
    }
}

