$(document).ready(function(){
	$("form[id='uploadForm']").submit(function(evt){	 
      	evt.preventDefault();
      	var formData = new FormData($(this)[0]);
      	formData.append('path','files/');
   		$.ajax({
       		url: 'upload.php',
       		type: 'POST',
       		data: formData,
       		cache: false,
       		contentType: false,
       		enctype: 'multipart/form-data',
       		processData: false,
       		success: function (response) {
        				alert(response);
       				},
       		beforeSend: function (xhr){
       			xhr.upload.addEventListener('progress',renderProgresBar,false);
       		}

   		});
   		return false;
 	});

	function renderProgressBae(e){
		if(e.lengthComputable){
			var percent = e.loaded/e.total;
			
		}
	}

});
