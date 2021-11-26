
	var xhr;	
	function hoverPopAndLoadImg(data){
		
		if(xhr && xhr.readystate !=4){
			//요청이 완료되기 전에 새로운 요청이 들어오면 이전 요청 중지
			xhr.abort();
		}
		xhr = $.ajax({
			url: "./selectData.do",
            type: "POST",
            data: data,
            dataType: "text",
            async: true,
            success: function (response) {
            	
            },
    		error:function(request,status,error){		

    		}
    	});
	}
