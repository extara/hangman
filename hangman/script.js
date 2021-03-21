let name  = prompt("Wpisz swoje imię:");
let q = prompt("Wpisz hasło:");
var pass = q;
var counter = 0;

pass = pass.toUpperCase();

var leng = pass.length;

var pass1 = "";

var fails = 0;

for(i=0; i<leng; i++){
    if(pass.charAt(i)==" ") pass1 = pass1 + " ";
    else pass1 = pass1 + "-";
}

function write(){
    document.getElementById("platform").innerHTML = pass1;
}
window.onload = start;

var lets = new Array(35);

lets[0] = "A";
lets[1] = "Ą";
lets[2] = "B";
lets[3] = "C";
lets[4] = "Ć";
lets[5] = "D";
lets[6] = "E";
lets[7] = "Ę";
lets[8] = "F";
lets[9] = "G";
lets[10] = "H";
lets[11] = "I";
lets[12] = "J";
lets[13] = "K";
lets[14] = "L";
lets[15] = "Ł";
lets[16] = "M";
lets[17] = "N";
lets[18] = "Ń";
lets[19] = "O";
lets[20] = "Ó";
lets[21] = "P";
lets[22] = "Q";
lets[23] = "R";
lets[24] = "S";
lets[25] = "Ś";
lets[26] = "T";
lets[27] = "U";
lets[28] = "V";
lets[29] = "W";
lets[30] = "X";
lets[31] = "Y";
lets[32] = "Z";
lets[33] = "Ż";
lets[34] = "Ź";

function start(){

let cat = prompt("Wpisz kategorie:");
cat = cat.toUpperCase();
document.getElementById("category").innerHTML ="KATEGORIA: " +cat;
    var alph = "";
    
    for(i=0; i<=34; i++){
        var element = "lett" + i;
        alph = alph + '<div class="letter" onclick="check('+i+')" id="'+element+'" >'+lets[i]+'</div>';
        if ((i+1) % 7 == 0) alph = alph + '<div style="clear:both;"></div>';
    }
    
    document.getElementById("letters").innerHTML = alph;
            document.getElementById("counter").innerHTML = name +" : "+ counter;

    write();
} 

String.prototype.setchar = function(place, char){
    if(place > this.length -1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place+1);
}

function check(no){
    var good = false;
    var bad = true;
    for(i=0; i<leng; i++){
        if(pass.charAt(i) == lets[no]){
             pass1 = pass1.setchar(i,lets[no]);
            good = true;
        }
    }
    if(good == true){
        var element = "lett" + no;
        document.getElementById(element).style.background = "#22ff05";
         document.getElementById(element).style.color = "#28691f";
         document.getElementById(element).style.cursor = "default";
        
            write();
    }else{
                var element = "lett" + no;
        document.getElementById(element).style.background = "#ff0d0d";
         document.getElementById(element).style.color = "#000000";
         document.getElementById(element).style.cursor = "default";
                 document.getElementById(element).setAttribute("onclick", ";");
        fails++;
        var pic = "s" + fails +".jpg"
        document.getElementById("parea").innerHTML = '<img src="jpg/' +pic+'"alt="" />';
    }
    if (pass == pass1){
            document.getElementById("counter").innerHTML =  name +" : "+(this.counter + 1);
        document.getElementById("letters").innerHTML = 'Wygrywasz ! <br> Podano prawidłowe hasło: <br>'+pass+'<br>punkt dla ciebie <br><br> <button class="reset" onclick="location.reload()">Następna runda ?</button>';
        
        
    }else     if(fails > 9){
        alert("PRZEGRYWASZ FRAJERZE ! hasłem było: "+pass)
        document.getElementById("parea").innerHTML = '<img src="jpg/go.gif" alt="" />';
    }
        
}

