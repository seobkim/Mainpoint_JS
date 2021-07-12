	var video
	var canvas
	
	window.onload = function(){
		video = document.getElementById("video")
		canvas = document.getElementById("canvas")
	}
	
	function btnClick(e){
		var atag= document.greateElement("a")
		document.body.appendChild(atag)
		a.style = "display:none"
		
		canvas.width = video.clientWidth
		canvas.height = video.clientHeight
		
		var cap = canvas.getContext("2d")
		cap.drawImage(video,0,0,video.clientWidth,video.clientHeight)
		
		a.href = canvas.toDataURL()
		a.download = "test.png"
		a.click()
	}
	