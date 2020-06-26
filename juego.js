var mundo=[
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,1,3,1,2,2,1,1,2,1,1,2,2,3,1,1,1,2,2,2,2,2,1,1,2],
	[2,2,2,1,2,1,1,2,2,1,2,2,1,1,1,1,2,2,1,1,2,1,1,2,2],
	[2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,3,2],
	[2,1,1,1,1,1,2,2,2,1,1,1,2,2,2,2,1,2,2,2,1,1,1,1,2],
	[2,2,1,2,2,1,1,1,1,1,2,1,2,1,2,1,1,1,2,2,2,1,1,1,2],
	[2,1,1,2,2,2,1,1,1,1,2,1,1,3,1,1,1,1,1,1,1,1,1,2,2],
	[2,1,1,1,2,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,2,1,1,1,1,2,1,1,1,1,2,2,1,2,2,2,2,1,1,1,2,2,2],
	[2,1,2,1,1,2,1,2,2,1,1,1,1,1,1,2,2,0,2,2,1,1,2,2],
	[2,1,1,3,2,2,1,1,2,1,1,2,1,1,1,2,0,0,2,2,1,1,0,2],
	[2,0,2,2,2,1,1,2,2,2,2,2,2,1,1,2,0,0,0,2,2,2,2],
	[2,2,0,0,0,2,2,0,0,0,0,0,0,2,2,2]
];

var pacman = {
	x:1,
	y:11
};

var pacman2 = {
	x:22,
	y:10
};

var fantasma1 = {
	x:5,
	y:3
};

var fantasma2 = {
	x:20,
	y:6
};

var puntuacion =0;
//var puntuacion2=0;

var vida=2;
function displayworld(){
	var output='';
	for(var i=0; i<mundo.length; i++){
		output+="\n<div class='fila'>\n";
		for(var j=0; j<mundo[i].length; j++){
			if(mundo[i][j]==2)
				output+="<div class='ladrillos'></div>";
			else if(mundo[i][j]==1)
				output+="<div class='monedas'></div>";
			if(mundo[i][j]==0)
				output+="<div class='vacio'></div>";
			else if(mundo[i][j]==3)
				output+="<div class='cereza'></div>";
		}
		output +="\n</div>";
	}
	//console.log(output);
	document.getElementById('mundo').innerHTML=output;
}
displayworld();

function displaypacman(){
	document.getElementById('pacman').style.left=pacman.x*25+"px";
	document.getElementById('pacman').style.top=pacman.y*25+"px";
}

function displaypacman2(){
	document.getElementById('pacman2').style.left=pacman2.x*25+"px";
	document.getElementById('pacman2').style.top=pacman2.y*25+"px";
}

function displayfantasma1(){
	document.getElementById('fantasma1').style.left=fantasma1.x*25+"px";
	document.getElementById('fantasma1').style.top=fantasma1.y*25+"px";
	
}

function displayfantasma2(){
	document.getElementById('fantasma2').style.left=fantasma2.x*25+"px";
	document.getElementById('fantasma2').style.top=fantasma2.y*25+"px";
}
function moverfantasma1(){
	var mover=Math.floor(Math.random()*4);

	if(mover == 0 && mundo[fantasma1.y][fantasma1.x-1] !=2){
		fantasma1.x--;
	}
	else if(mover ==1 && mundo[fantasma1.y][fantasma1.x+1] !=2){
		fantasma1.x++;
	}
	else if(mover == 2 && mundo[fantasma1.y-1][fantasma1.x] !=2){
		fantasma1.y--;
	}
	else if(mover == 3 && mundo[fantasma1.y+1][fantasma1.x] !=2){
		fantasma1.y++;
	}
	if (fantasma1.y == pacman.y && fantasma1.x == pacman.x) {
        vida = vida - 1;
        displayvida();
        if (vida==0){
        	alert("Has Perdido!");
        }
	}
	displayfantasma1();
}
function moverfantasma2(){
	var mover=Math.floor(Math.random()*4);

	if(mover == 0 && mundo[fantasma2.y][fantasma2.x-1] !=2){
		fantasma2.x--;
	}
	else if(mover ==1 && mundo[fantasma2.y][fantasma2.x+1] !=2){
		fantasma2.x++;
	}
	else if(mover == 2 && mundo[fantasma2.y-1][fantasma2.x] !=2){
		fantasma2.y--;
	}
	else if(mover == 3 && mundo[fantasma2.y+1][fantasma2.x] !=2){
		fantasma2.y++;
	}
	if (fantasma2.y == pacman2.y && fantasma2.x == pacman2.x) {
        vida = vida - 1;
        displayvida();
        if (vida==0){
        	alert("Has Perdido!");
        }
    }   
	displayfantasma2();
}

function displaypuntuacion(){
	document.getElementById('puntuacion').innerHTML=puntuacion;
}
//function displaypuntuacion2(){
//	document.getElementById('puntuacion2').innerHTML=puntuacion2;
//}

function displayvida(){
	document.getElementById('vida').innerHTML=vida;
}

displayworld();
displaypacman();
displaypacman2();
displayfantasma1();
displayfantasma2();
displaypuntuacion();
//displaypuntuacion2();

document.onkeydown=function(e){
	if(e.keyCode == 65 && mundo[pacman.y][pacman.x-1] !=2){
		pacman.x--;
		document.getElementById('pacman').style.transform='rotate(180deg)';
	}
	else if(e.keyCode == 68 && mundo[pacman.y][pacman.x+1] !=2){
		pacman.x++;
		document.getElementById('pacman').style.transform='rotate(0deg)';
	}
	else if(e.keyCode == 87 && mundo[pacman.y-1][pacman.x] !=2){
		pacman.y--;
		document.getElementById('pacman').style.transform='rotate(270deg)';
	}
	else if(e.keyCode == 83 && mundo[pacman.y+1][pacman.x] !=2){
		pacman.y++;
		document.getElementById('pacman').style.transform='rotate(90deg)';
	}
	if(mundo[pacman.y][pacman.x]==1){
		mundo[pacman.y][pacman.x]=0;
		puntuacion+=10;
	}	
	else if(mundo[pacman.y][pacman.x]==3){
		mundo[pacman.y][pacman.x]=0;
		puntuacion+=50;
	}	
    //pacman2
	if(e.keyCode == 37 && mundo[pacman2.y][pacman2.x-1] !=2){
		pacman2.x--;
		document.getElementById('pacman2').style.transform='rotate(0deg)';
	}
	else if(e.keyCode == 39 && mundo[pacman2.y][pacman2.x+1] !=2){
		pacman2.x++;
		document.getElementById('pacman2').style.transform='rotate(180deg)';
	}
	else if(e.keyCode == 38 && mundo[pacman2.y-1][pacman2.x] !=2){
		pacman2.y--;
		document.getElementById('pacman2').style.transform='rotate(90deg)';
	}
	else if(e.keyCode == 40 && mundo[pacman2.y+1][pacman2.x] !=2){
		pacman2.y++;
		document.getElementById('pacman2').style.transform='rotate(270deg)';
	}
	if(mundo[pacman2.y][pacman2.x]==1){
		mundo[pacman2.y][pacman2.x]=0;
		puntuacion+=10;
	}	
	else if(mundo[pacman2.y][pacman2.x]==3){
		mundo[pacman2.y][pacman2.x]=0;
		puntuacion+=50;
	}
	displaypuntuacion();
	if(puntuacion==1700){
		alert("¡GANASTE!");
	}

	displayworld();
	//displaypuntuacion2();
	//console.log(e.keyCode);
	displaypacman();
	displaypacman2();
}
setInterval(moverfantasma1, 600);
setInterval(moverfantasma2, 600);

		
	