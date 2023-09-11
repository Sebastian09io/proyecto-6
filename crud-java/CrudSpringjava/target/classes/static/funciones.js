function eliminar(id) {
	console.log(id);
	swal({
	title: "Deseas eliminarlo?",
	text: "Sera permanente",
	icon: "warning",
	buttons: true,
	dangerMode: true,
		})
		.then((OK) => {
	    if (OK) {
	    $.ajax({
	    url:"/delete/"+id,
		success: function(res) {
					console.log(res);
				},
          	  });
		    swal("Eliminado", {
		    icon: "success",
		    }).then((ok)=>{
		    	if(ok){
		    		location.href="/listar";
		    	}
		    });
		    }
		});
}




