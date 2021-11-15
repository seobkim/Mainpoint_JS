function speedbtn(){
		video = document.getElementById("video");
		//playbackRate 옵션에 원하는 배속 지정
		video.playbackRate = video.playbackRate+video.playbackRate;
	}


//정방향 재생 시 intervalRewind 값이 있을시 ClearInterval 함수를 이용하여 없애줌
function fowordPlay(e) {
	speedBtn_status(false);
	directionBtn_initClassName();
	e.className = "btn btn-success btn-sm direction";
	var video = document.getElementById("video")
	video.controls=true;
	if(typeof intervalRewind !== 'undefined'){
		video.playbackRate = 1.0;
	clearInterval(intervalRewind);
		document.getElementById("1_Btn").className= "btn btn-success btn-sm speed";
	video.play();
	}else{
		document.getElementById("1_Btn").className= "btn btn-success btn-sm speed";
		video.play();	
	}
	};

//역방향 재생
function RewindVideo(){
	video = document.getElementById("video");
	
	//비디오 정지:브라우저에서 앞 방향으로 요청하게 됨
	video.pause()
	
	//역방향 재생 시 컨트롤 막기 재생 버튼 누를시 로딩 생김
	video.controls = false;
	
	intervalRewind = setInterval(function(){
		video.playbackRate = 1.0;
		if(video.currentTime == 0){
			clearInterval(intervalRewind);
			video.pause();
		}
		else{
			video.currentTime += -.03;
		}
	},30);
	
}
