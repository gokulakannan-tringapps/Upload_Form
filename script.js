document.querySelector("#image").addEventListener("change",function(){
		const reader=new FileReader();  

		reader.addEventListener("load",function(){
		localStorage.setItem("presentimage", reader.result);
		}); 

		reader.readAsDataURL(this.files[0]);

		});
		document.getElementById("jsonfileinput").addEventListener("change", function() {
		  var file_to_read = document.getElementById("jsonfileinput").files[0];
		  var fileread = new FileReader();
		  fileread.onload = function(e) {
	        var content = e.target.result;
    		var data = JSON.parse(content); 
    		window.localStorage.setItem("myObject", JSON.stringify(data));
  		};
  		fileread.readAsText(file_to_read);
		});
