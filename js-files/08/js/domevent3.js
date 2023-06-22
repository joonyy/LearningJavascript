var pic = document.querySelector('#pic');
pic.addEventListener("mouseover", changePic, false);  // mouseover 이벤트 발생하면 changePic 함수 실행
pic.addEventListener("mouseover", changeStyle, false);// mouseover 이벤트 발생하면 changeStyle 함수 실행
pic.addEventListener("mouseout", originPic, false); // mouseout 이벤트 발생하면 originPic 함수 실행
pic.addEventListener("mouseout", originStyle, false); // mouseout 이벤트 발생하면 originStyle 함수 실행

function changePic() {			
  pic.src = "images/boy.png";
}
function originPic() {
  pic.src = "images/girl.png";
}
function changeStyle() {
  pic.style.border = "1px solid #222";
}
function originStyle() {
  pic.style.border = "none";
}