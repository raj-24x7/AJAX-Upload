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
       		xhr: function (){
            var xhr = new XMLHttpRequest();
            if(xhr.upload){
       				xhr.upload.addEventListener('progress',renderProgressBar, true);

       			} else {
       				console.log("xhr.upload not readable");
       			}
            return xhr;
       		}

   		});
   		return false;
 	});

	function renderProgressBar(e){
		if(e.lengthComputable){
			var percent = e.loaded/e.total * 100;
			$('#progress-bar').html('<p> '+percent+' % </p>');
		}
	}

});
