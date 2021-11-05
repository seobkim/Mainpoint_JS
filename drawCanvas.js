
var cvs = document.createElement("canvas");
var ctx = cvs.getContext("2d");

//이미지 로드
var img2 = document.createElement("img")
img2.src = "data:image/jpeg;base64,"+targetImg; 

//캔버스 크기 지정						
cvs.width = 1280;
cvs.height = 720;

//context에 이미지 draw
ctx.drawImage(img2,0,0,1280,720); //(targetImage, x, y, w, h)

//이미지가 올라간 context 위에 네모 박스 draw
ctx.strokeStyle = 'yellow';
ctx.strokeRect(tableRect[0],tableRect[1],tableRect[2],tableRect[3]); //(x,y,w,h)

//이미지 재로드
Div.querySelector('img').src = cvs.toDataURL("image/jpeg",1.0);  //(확장자,(jpeg 경우 압축률))
