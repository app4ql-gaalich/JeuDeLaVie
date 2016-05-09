window.onload = function() {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
        var nb = document.getElementById("nb").value;
        var taille = document.getElementById("taille").value;
        var timer = document.getElementById('timer').value;
        var myInterval = setInterval(anime, timer);
       
        function anime() {
            context.fillStyle = "green";
			var nb = document.getElementById("nb").value;
			var taille = document.getElementById("taille").value;
            context.clearRect(0, 0, canvas.width, canvas.height);
            var timer_temp = document.getElementById('timer').value;
            if(timer_temp != timer)
            {	    
				clearInterval(myInterval);		
				myInterval = setInterval(anime, timer_temp);
				timer = timer_temp;
			}
            for (i=0; i<nb; i++) {
                for (j=0; j<nb; j++) {
                    if (Math.random() > 0.9) {
                        a[i*nb+j] = 1;
                        context.fillStyle = "green";
                    } else {
                        a[i*nb+j] = 0;
                        context.fillStyle = "red";
                    }
                    context.fillRect(taille*i, taille*j, taille, taille);
                }
            }
        }
    }
