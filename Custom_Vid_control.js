function speedbtn(){
		video = document.getElementById("video");
		video.playbackRate = video.playbackRate+video.playbackRate;
		console.log(video.playbackRate);
	}
	
	function RewindVideo(){
		video = document.getElementById("video");
		intervalRewind = setInterval(function(){
		       video.playbackRate = 1.0;
		       if(video.currentTime == 0){
		           clearInterval(intervalRewind);
		           video.pause();
		       }
		       else{
		           video.currentTime += -.1;
		       }
		                },30);
	}