				var chartArray = new Array();
				
					var chartArray = new Array();
				
				chartArray = [
					{key:'차트 선택', value:""},
					{key:'막대 차트', value:"column"},
					{key:'라인 차트', value:"line"},
					{key:'파이 차트', value:"pie"},
					{key:'바 차트', value:"bar"},
				];
				
				
				chartArray.map(e =>{
					console.log(e)
					var opt=document.createElement("option")
					opt.innerHTML=e.key;
					opt.value=e.value;
					
					selectBox2.appendChild(opt)
				})
			
