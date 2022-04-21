document.addEventListener("DOMContentLoaded",()=>{
const recentImageDataUrl=localStorage.getItem("presentimage");
	if(recentImageDataUrl)
	{
		document.querySelector("#imgPreview").setAttribute("src",recentImageDataUrl); 
	}
	});
	let newObject = window.localStorage.getItem("myObject");
	var obj=JSON.parse(newObject); 
	for (var key in obj) { 
		if (obj.hasOwnProperty(key)) {
		var tag = document.createElement("p");
		tag.setAttribute("class","myP") ;
		  var text = document.createTextNode(key + " -> " + obj[key]); 
		  tag.appendChild(text); 
		  var element = document.getElementsByTagName("body")[0];
		  element.appendChild(tag);
		}
	}
