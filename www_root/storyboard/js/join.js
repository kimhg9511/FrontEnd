// placeholder 
var placeHolders = [...$('input[type="text"]')];
const regexrid = /^[A-Za-z0-9_]{3,}$/;  
const regexrnick = /^[A-Za-z0-9]{4,}$|^[가-힣]{2,}$/;
const regexrlast = /[ㄱ-ㅎ]/;
function tSound(a)
{
	var r = (a.charCodeAt(0) - parseInt('0xac00',16)) % 28;
    var t = String.fromCharCode(r + parseInt('0x11A8') -1);
	return t;
}
var tstr = tSound('난');
var str = 'ㄴ';
console.log(str.match(regexrlast));

$('input[type="text"]').on('focus',function(){
    this.style.backgroundColor = '#fff';
    placeHolders.forEach(ph => {
        if(this.value === ph.value){
            this.value= "";    
            this.style.color = "#222";
        }
    });
    if(this.id === "upw" || this.id === "repw"){
        this.type = "password";
        return;
    };
});
// button
$('#join').on('click',function(){
    var exit = false;
    placeHolders.forEach(ph => {
        if((ph.value.length === 0 || ph.value === ph.defaultValue)&& !exit){
            // if(tSound(ph.defaultValue)===""){
            //     alert(ph.defaultValue + "은 필수 입력 사항입니다.");
            // }else{
            //     alert(ph.defaultValue + "는 필수 입력 사항입니다.");
            // }
            $(ph).focus();
            exit = true;
        }
    });
    if(exit)return;
    location.href = '../login/login.html';
})
$('#uid').on('blur',function(){
    if(!this.value.match(regexrid)){
        this.value = "id양식을 지켜주세요";
        this.defaultValue = this.value;
        this.style.backgroundColor = 'lightcoral';
    }
})
$('#nick').on('blur',function(){
    if(!this.value.match(regexrnick)){
        this.value = "닉네임 양식을 지켜주세요";
        this.defaultValue = this.value;
        this.style.backgroundColor = 'lightcoral';
    }
})
$('#repw').on('blur',function(){
    if(this.value !== $('#upw').val()){
        this.type = 'text';
        this.value = "비밀번호 확인값이 다릅니다."
        this.style.backgroundColor = 'lightcoral';
    }
})
