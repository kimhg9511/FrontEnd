// legacy DOM control
// var elem = document.getElementsByTagName('h1');
// elems = [...elem];
// elems.forEach(element => {
//     element.textContent = 'Hello';
// });

// jQuery usage : $(selector).method(...params) ...chain
$('div.foo').click(function(){
    $(this).slideUp();
});

// jQuery가 실행되기 전, 모든 요소들이 로드되어 있어야 함. (safe coding)
// $(document).ready(function(){
//     //
// });
$().ready(function(){
    $('h1').text('Hello, jQuery!');
    const p = '<p id="test">My <em>new</em> text</p>';
    $(p).appendTo('body');
});