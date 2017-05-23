

//-----------------------------------------General-------------------------

function showElem(){
    
    document.getElementById("general").style.visibility = "visible";
   
   
}

function hideElem() {
    document.getElementById("general").style.visibility = "hidden";
    pause();
    
   
}





//------------------------------------ Reproductor ---------------------------

function play(){
    var video = document.getElementById("video");
    video.play();
    var dTotal = document.getElementById("duracioTotal");
    dTotal.innerHTML = Math.floor(video.duration); 
    
    
}

function pause(){
    var video = document.getElementById("video");
    video.pause();
}

function bVolum(){
    var bMenys = document.getElementById("video");
    bMenys.volume =  bMenys.volume - 0.1;
}

function pVolum(){
    var bMes = document.getElementById("video");
    bMes.volume =  bMes.volume + 0.1;
}

 video.ontimeupdate = function(){
        var pActual = document.getElementById("posicioActual");
   
    pActual.innerHTML = Math.floor(video.currentTime);
 }

//-------------------------------------------- Ships ------------------

function obrir(nau){
    //obrir div
    
    showElem();
    
    var video = document.getElementById("video");
    var text = document.getElementById("text");
    
    if(nau == "xwing"){
        video.src = "/xwing.mp4";
        video.poster = "imatges/X-wing_lletres.jpg";
        text.innerHTML = '<p>X-wing starfighters were a type of starfighter marked by their distinctive S-foils that resembled an "X" in attack formation.They are heavily armed with each wing containing a laser cannon. X wings are also equipped with proton torpedoes. X wings were designed for dogfighting and long period missions. During the Galactic Civil War, the Rebel Alliance used T-65B X-wing starfighters and T-65C-A2 X-wings in many battles, including the Battle of Yavin and the Battle of Endor.<br>Incom,s engineers strove to build a well-rounded, hyperdrive-equipped snubfighter with no exploitable weakness. The new starfighter was intended to become the backbone of the Imperial Navy, but political forces led to the Galactic Empire deciding to rely on Sienar Fleet Systems more affordable but less capable TIE line. <br><img class="planol" src="imatges/planolxwing.jpg"></p>'; 
    }
    
    
    if(nau=="t47"){
        video.src = "/t47.mp4";
        video.poster = "imatges/T-47_lletres.jpg";
        text.innerHTML = '<p>The T-47 airspeeder was a model of low-altitude vehicle manufactured by Incom Corporation. When the Alliance to Restore the Republic was stationed on the icy planet of Hoth, a contingent of T-47 airspeeders were modified to become ground attack, low-altitude fighters called snowspeeders.<br>It had two heavy, forward-facing laser cannons and a harpoon cannon placed ahead of the tailgunner. During the Battle of Hoth, these snowspeeders used tow cables to easily disable All Terrain Armored Transport walkers by firing the tow cable and chasing it out around the walker\'s legs, stopping its locomotion and immobilising the walker.<br><img class="planol" src="imatges/planol.t47.jpg"></p>';
    }
    
    if(nau=="ywing"){
       video.src = "/ywing.mp4";
        video.poster ="imatges/y-wing_lletres.jpg";
        text.innerHTML = '<p>The BTL Y-wing starfighter was a fighter-bomber built by Koensayr Manufacturing. First used during the Clone Wars, during the Galactic Civil War it was a mainstay of the Alliance Starfighter Corps. It was often used as an assault bomber to attack enemy capital ships directly in conjunction with the later B-wing starfighters.<br>The Y-wing starfighter was deployed as a fighter-bomber, designed to fight its way to its objective, deliver its payload of high explosives, and fight its way out again. Its weaponry included two laser cannons, two ion cannons, and two proton torpedo launchers. An astromech droid, such as an R2 unit, could be plugged into a socket behind the cockpit to act as a co-pilot and manage the ship\'s various systems.<br><img class="planol" src="imatges/planolywing.jpg"></p>';
    }
    
    if(nau=="destructor"){
        video.src ="/destructor.mp4";
        video.poster = "imatges/destructorestelar_lletres.jpg";
        text.innerHTML = '<p>The Imperial II-class Star Destroyer, colloquially known as the "Impstar-Deuce," was a Star Destroyer model that was derived from the Imperial I-class Star Destroyer. Between its two sensor globes, the Imperial II-class ships had a tower-like structure with vertical support beams, while the tractor beam targeting array of the Imperial I-class had support beams running diagonally across it.<br><img class="planol" src="imatges/planol.destructor.PNG"></p>';
    
    }
    
    if(nau=="fire"){
        video.src ="/fire.mp4";
        video.poster="imatges/Firespray2_lletres.jpg";
        text.innerHTML ='<p>The Firespray-31-class patrol and attack craft, also known simply as a Firespray-class interceptor, was a patrol ship manufactured by Kuat Systems Engineerging. Firesprays were used to guard and patrol the prison moon Oovo IV, while bountry hunters Jango Fett and Boba Fett piloted a customized Firespray named Slave I throughout their careers.<br>The ships original design was intended to be a light prisoner transport. As such, considering its size and potent armament under Fett, the craft was relatively lightly equipped, though it did posses some shielding as well as a fairly strong hyperdrive system. Obviously, due to its size and nature, life support was installed as well.<br>Stock Firesprays seem to be fairly lightly armed for a ship of its size. Given its intended role as a law enforcement vessel, it’s hardly surprising it’s not military spec and the stock ship featured a tractor beam as well as two blaster cannons.<br><img class="planol" src="imatges/planol.fire.jpg"></p>';
    }
    
    if(nau=="halcon"){
        video.src ="halcon.mp4";
        video.poster="imatges/halcon_lletres.jpg";
        text.innerHTML ='<p>The Millennium Falcon, originally was a Corellian YT-1300f light freighter used by the smugglers Han Solo and Chewbacca during the Galactic Civil War. It was previously owned by Lando Calrissian, who lost it to Solo in a game of sabacc.<br>Its aged appearance belied numerous advanced modifications to boost the ships speed, weapons and shield, including a hyperdrive engine among the fastest in the entire galaxy, enabling it to outrun Imperial Star Destroyers. It included sensor-proof smuggling compartments, which were used during the rescue of Princess Leia Organa to evade Imperial stormtroopers. Afterwards, the Millennium Falcon saw further action when Solo chose to join the Rebels during the Battle of Yavin, where it was able to sneak up on Darth Vaders TIE Advanced.<br>In addition to its renowned hyperdrive, which supposedly made the Falcon the "fastest ship in the galaxy," the ship was equipped with a backup hyperdrive.<br>The weaponry of the Millennium Falcon was normally suited for a much larger warship. It included two CEC AG-2G quad laser cannons with enhanced laser actuators and gas feeds, which gave them maximum range and damage.<br><img class="planol" src="imatges/planol.halcon.jpg"></p>';
        
    }
    
    if(nau=="lanzadera"){
        video.src="lambda.mp4";
        video.poster="imatges/t-4a_lamda_lletres.jpg";
        text.innerHTML ='<p>The Lambda-class T-4a shuttle, also known as the Imperial Lambda, Imperial Transport or the Imperial Shuttle, was a multi-purpose transport with a trihedral foil design used by the Galactic Empire during the Galactic Civil War, and was considered an elegant departure from the standards of brutish Imperial engineering. The shuttles were often used by high-ranking Imperial officers and such dignitaries as Darth Vader and Emperor Sheev Palpatine, but were more commonly found ferrying stormtroopers or cargo.<br>Although Lambda-class craft could be flown by a single pilot, the presence of a copilot/navigator made it much easier, especially when traveling through hyperspace. Additionally, in order to prove that the shuttle crew was working for the Empire, Lambda-class T-4a shuttles utilized special transponders to transmit secret codes to Star Destroyers.<br><img class="planol" src="imatges/planol.lanzadera.jpg"></p>';
    }
    
    if(nau=="tie"){
        video.src="tie.mp4";
        video.poster="imatges/TIE_Fighter_lletres.jpg";
        text.innerHTML ='<p>The TIE/LN Starfighter, or TIE/line starfighter, simply known as the TIE Fighter was the standard Imperial starfighter seen in massive numbers throughout most of the Galactic Civil War and onward. Colloquially, Rebel and New Republic pilots referred to the craft as "eyeballs."<br>Primary armament was a pair of L-s1 laser cannons, coupled with a powerful sensor suite. The cannons were relatively powerful, and a well-placed hit on a starfighter or medium transport could damage or destroy it. <br>The absence of a hyperdrive also rendered the fighter totally dependent on carrier ships when deployed in enemy systems. <br>TIEs were designed to attack in large numbers, overwhelming the enemy craft. The Imperials used so many that they came to be considered symbols of the Empire and its might. They were also very cheap to produce, reflecting the Imperial philosophy of quantity over quality.<br><img class="planol" src="imatges/planol.tie.png"></p>';
    }
    
}








//--------------------------------------t47---------------------------------------------------


document.getElementById("t47").onmouseover = mouseOver;
document.getElementById("t47").onmouseout = mouseOut;




function mouseOut(){
   document.getElementById('t47').src = "imatges/t47.png";
 }

function mouseOver () {
  document.getElementById('t47').src = "imatges/t47il.png";
}

        

  //   ------------------------------------------------- X-WING--------------------------------------
  
  document.getElementById("xwing").onmouseover = mouseOverxwing;
document.getElementById("xwing").onmouseout = mouseOutxwing;




function mouseOutxwing(){
   document.getElementById('xwing').src = "imatges/x-wing.png";
 }

function mouseOverxwing () {
  document.getElementById('xwing').src = "imatges/x-wing_2.png";
}




 
    
 //----------------------------------------- DESCTRUCTOR------------------------------------- destructor   



 document.getElementById("destructor").onmouseover = mouseOverdestructor ;
document.getElementById("destructor").onmouseout = mouseOutdestructor ;




function mouseOutdestructor (){
   document.getElementById('destructor').src = "imatges/destructor.png";
 }

function mouseOverdestructor  () {
  document.getElementById('destructor').src = "imatges/destructor_2.png";
}






//----------------------------------------------------Y-WING------------------------------ ywing


document.getElementById("ywing").onmouseover = mouseOverywing ;
document.getElementById("ywing").onmouseout = mouseOutywing ;




function mouseOutywing (){
   document.getElementById('ywing').src = "imatges/y-wing.png";
 }

function mouseOverywing  () {
  document.getElementById('ywing').src = "imatges/y-wing_2.png";
}




            


//------------------------------------------------------ FIRESPRAY-31-------------------------- fire

document.getElementById("fire").onmouseover = mouseOverfire ;
document.getElementById("fire").onmouseout = mouseOutfire ;




function mouseOutfire (){
   document.getElementById('fire').src = "imatges/firespray-31.png";
 }

function mouseOverfire  () {
  document.getElementById('fire').src = "imatges/firespray-31_2.png";
}






//----------------------------------------------------- HALCON------------------------------halcon

document.getElementById("halcon").onmouseover = mouseOverhalcon ;
document.getElementById("halcon").onmouseout = mouseOuthalcon ;




function mouseOuthalcon (){
   document.getElementById('halcon').src = "imatges/halcon.png";
 }

function mouseOverhalcon () {
  document.getElementById('halcon').src = "imatges/halcon2.png";
}





//----------------------------------------------------LANZADERA----------------------------------- lanzadera


document.getElementById("lanzadera").onmouseover = mouseOverlanzadera ;
document.getElementById("lanzadera").onmouseout = mouseOutlanzadera ;




function mouseOutlanzadera (){
   document.getElementById('lanzadera').src = "imatges/lanzadera.png";
 }

function mouseOverlanzadera () {
  document.getElementById('lanzadera').src = "imatges/lanzadera_2.png";
}






//--------------------------------------------------TIE FIGHTER---------------------------------------- tie

document.getElementById("tie").onmouseover = mouseOvertie ;
document.getElementById("tie").onmouseout = mouseOuttie ;




function mouseOuttie (){
   document.getElementById('tie').src = "imatges/tiefighter.png";
 }

function mouseOvertie () {
  document.getElementById('tie').src = "imatges/tiefighter_2.png";
}





