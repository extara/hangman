let q = prompt("Choose Password:");
var pass = q;
// NAME + COUNTER //
var username = localStorage.getItem("username");
if(!username){
    username = prompt("Please enter username");
    localStorage.setItem("username", username);
}
var count = localStorage.getItem("count");
if(!count){
    count = 0;
}
// NAME + COUNTER storage remover //
function chname(){
    localStorage.removeItem("username");
}

function chcount(){
    localStorage.removeItem("count");
}

pass = pass.toUpperCase();

var leng = pass.length;

var pass1 = "";

var fails = 0;
// Exchange letters to the "-" symbol //
for(i=0; i<leng; i++){
    if(pass.charAt(i)==" ") pass1 = pass1 + " ";
    else pass1 = pass1 + "-";
}
// write our password //
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

// start function = what will happen after password user and category set //
function start(){ 
 document.getElementById("counter").innerHTML =  username +" : "+count+  "<br> Not your name? <br><button onclick='chname(); location.reload();'> >>Change Player<<</button> <br> or <br>   <button onclick='chcount(); location.reload();'>Reload score </button>";
let cat = prompt("Choose Category:");
cat = cat.toUpperCase();
document.getElementById("category").innerHTML ="Category: " +cat;
    var alph = "";
    
    for(i=0; i<=34; i++){
        var element = "lett" + i;
        alph = alph + '<div class="letter" onclick="check('+i+')" id="'+element+'" >'+lets[i]+'</div>';
        if ((i+1) % 7 == 0) alph = alph + '<div style="clear:both;"></div>';
    }
    
    document.getElementById("letters").innerHTML = alph;
           

    write();
} 

String.prototype.setchar = function(place, char){
    if(place > this.length -1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place+1);
}
// Checking our pass//
function check(no){
    var good = false;
    var bad = true;
    for(i=0; i<leng; i++){
        if(pass.charAt(i) == lets[no]){
             pass1 = pass1.setchar(i,lets[no]);
            good = true;
        }
    }
    // change letters background //
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
        // change our images //
        var pic = "s" + fails +"-min.jpg"
        document.getElementById("parea").innerHTML = '<img src="jpg/' +pic+'"alt="" />';
    }
    // what will happen once password is correct //
    if (pass == pass1){
        count++;
         document.getElementById("counter").innerHTML =  username +" : "+count;
            localStorage.setItem("count", count);
        document.getElementById("letters").innerHTML = 'You Won ! <br> Correct password is: <br>'+pass+'<br>+1 point for you <br><br> <button class="reset" onclick="location.reload()">Next round ?</button>';
          document.getElementById("parea").innerHTML = '<img src="jpg/winning-min.jpg" alt="" />';
         // what will happen once password is incorrect //
    }else     if(fails > 9){
        alert("You lose ! The password was: "+pass)
        document.getElementById("parea").innerHTML = '<img src="jpg/go.gif" alt="" />';
    }
        
}

