let knopf = document.getElementById("knopf");
var zufallsnummer = parseInt(Math.random() * 10 + 1);
var vesuche = 0; 
var nummereingegeben = document.getElementById("bet");

function neuLaden(){
    zufallsnummer = parseInt(Math.random() * 10 + 1) ;
    vesuche = 0;
    nummereingegeben.value = ""
    
}

nummereingegeben.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        nummerUberprufen();
        event.preventDefault();
    }
});

function nummerUberprufen(){
    if (nummereingegeben.value > 10 || nummereingegeben.value < 1 || isNaN(nummereingegeben.value)){
        alert("ungültig");
        neuLaden();
        return;
    }
    vesuche++

    let vesucheText = vesuche === 1 ? "vesuch" : "vesuche";
    if(nummereingegeben.value > zufallsnummer){
        alert("die Zufallszahl ist kleiner");
        
    } else if(nummereingegeben.value < zufallsnummer){
        alert("die Zufallszahl ist größer");
        
    } else{
        alert(`You won with ${vesuche} ${vesucheText}!! :D `);
        neuLaden();
    }

    nummereingegeben.value = "";
}