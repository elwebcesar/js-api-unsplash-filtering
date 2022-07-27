const types = ['branding', 'web', 'photography', 'app'];
const myObj = "";
const request = new XMLHttpRequest();
let conteo = 1;

cargar(request,conteo);

function cargar(request,conteo){
	request.open('GET', 'https://api.unsplash.com/photos/?client_id=PF_wJS-kfBIeH-LIuMxChWfdgHT2Fm2eu87swvP4Rug&page='+conteo, true);
	request.onload = function() {
		document.getElementById("loader").classList.add("show");
		if (this.status >= 200 && this.status < 400) {
			const myObj = JSON.parse(this.response);
			//console.log (myObj);

			document.getElementById("loader").classList.remove("show");
	
			myObj.forEach(result => {
				ale = Math.floor(Math.random() * 4);

				const figure = document.createElement("figure");
				figure.className = 'column '+types[ale]+' show';

				const img = document.createElement("img");
				img.src = result.urls["small"];

				figure.appendChild(img);
				document.getElementById("load").appendChild(figure);
				//document.getElementById("load").innerHTML = figure;
			});
		}
		else {
			// No carga api.
		}
	};
	request.send();
}

function load(){
    conteo++;
    cargar(request,conteo);
}