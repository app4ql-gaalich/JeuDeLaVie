window.onload = function() {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
        var nb = document.getElementById("nb").value;
        var taille = document.getElementById("taille").value;
        
        var color1 = document.getElementById("color").value;
		var color2 = document.getElementById("color2").value;
        
        setInterval(anime, 1000);
       
        function anime() {
            context.fillStyle = color1;
			var nb = document.getElementById("nb").value;
			var taille = document.getElementById("taille").value;
			
			var color1 = document.getElementById("color").value;
			var color2 = document.getElementById("color2").value;
			
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (i=0; i<nb; i++) {
                for (j=0; j<nb; j++) {
                    if (Math.random() > 0.9) {
                        a[i*nb+j] = 1;
                        context.fillStyle = color1;
                    } else {
                        a[i*nb+j] = 0;
                        context.fillStyle = color2;
                    }
                    context.fillRect(taille*i, taille*j, taille, taille);
                }
            }
        }
    }
