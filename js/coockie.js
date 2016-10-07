$bouton=document.getElementById("bouton");
$affichage=document.getElementById("affichage");
$multiplicateur=document.getElementById("multiplicateur");
$autoclick=document.getElementById("autoclick");
score = 199;
multiplicateur =1;
prix=10;
var IntervalId;
var Autoclick_achat=false;

function AfficherScore() {
	$affichage.innerHTML = "Score : "+score;
}	

function AjouterScore() {
	score=score+multiplicateur;
	check_affichage();
}

function Activer_Multiplicateur(){
	if(score>=prix){
  	$multiplicateur.classList.remove("button_desactiver");
  }else{
  	$multiplicateur.classList.add("button_desactiver");
   }
}

function Activer_Autoclick() {
	if((score>=200)&&(!Autoclick_achat)){
  	$autoclick.classList.remove("button_desactiver");
  }else{
  	$autoclick.classList.add("button_desactiver");
   }

}

function Incrementer() {
	    multiplicateur*=2;
      score-=prix;
      prix*=2;
      $multiplicateur.innerHTML="Mutiplicateur X"+multiplicateur+" -  Prochain achat :"+prix;
	check_affichage();
}

function Autoclick() {
	if(score>=200){
  	InervalId=setInterval(AjouterScore,1000);
    Autoclick_achat=true;
    score-=200;
    check_affichage();
  }
}

function check_affichage(){
	AfficherScore();
  Activer_Multiplicateur();
  Activer_Autoclick(); 
}

check_affichage();
$multiplicateur.onclick=Incrementer;
$bouton.onclick=AjouterScore;
$autoclick.onclick=Autoclick;
