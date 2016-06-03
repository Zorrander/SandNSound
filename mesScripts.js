
$(function () {

$onglet = $(".onglet-vertical"); // on cible les onglets  

//BOUTONS DU MENU
    
$accueil = $("#accueil");
$apropos = $("#apropos");

$noussponsoriser = $("#nousponsoriser");
$nospartenaires = $("#nospartenaires");
$contact = $("#contact");  
$actualites = $("#actualites");
    
//BOUTON ACCUEIL
$decouvrirteam = $("#link-aPropos");
$goSponsor = $("#sponsoriser");
$dossier = $("#dossier");
//BOUTON SUBMIT
$boutton = $(".button"); 
    
//PUBLICATIONS
$calendrier = $("#calendrier");
$papa_noel = $("#papa_noel");
$tonton = $("#tonton");  
$film = $("#film");    

$backtotop = $('.backtotop');   
 

  //GESTION BANDEAU =============================
//====================================
     
var sticky_navigation_offset_top = 10;
    
var sticky_navigation = function(){
            var scroll_top = jQuery(window).scrollTop(); 
            
    
            if (scroll_top > sticky_navigation_offset_top) { //SI DEPASSEMENT
                    jQuery('.backtotop').css({ 
                        'display':'block', 'cursor':'pointer'
                        }); 
               // if (window.matchMedia("(min-width: 1024px)").matches) { //OU BIEN LA TAILLE DE LECRAN EST CELLE CI
                    jQuery('.bandeau').css({ 
                    'position': 'fixed' , 'z-index': '3', 'top': '0' ,  'width': '95%', 'max-height':'20%',  'height': 'auto',  'left': '2.5%', 
                    'font-family' : "Century Gothic" ,  'text-align': 'center',  'background-image': 'url(img/fond_barre%20outil.png)',
                    'background-size' : 'cover','border-bottom-left-radius' : '5px', 'border-bottom-right-radius' : '5px'}); 
                
            }
            else {
                jQuery('.backtotop').css({ 
                        
                    'display':'none'
                        });
                
                    jQuery('.bandeau').css({ 
                    'position': 'fixed' , 'z-index': '3', 'top': '3%' ,  'width': '95%', 'max-height':'20%',  'height': 'auto',  'left': '2.5%', 
                    'font-family' : "Century Gothic" ,  'text-align': 'center',  'background-image': 'url(img/fond_barre%20outil.png)',
                    'background-size' : 'cover','border-bottom-left-radius' : '5px', 'border-bottom-right-radius' : '5px'});
                    } 
        };
    
var previous = 1000 ;  
  
//$('.player').mb_YTPlayer();
    
    //============================================================================
    //======     LISTENERS ==========================================
    //============================================================================
$accueil.click(function(){
window.location='index.html';
  });
$apropos.click(function(){ 
    window.location='a_propos.html';
  });
$noussponsoriser.click(function(){
    window.location='nous_sponsoriser.html';
  });
$nospartenaires.click(function(){ 
    window.location='nos_partenaires.html';
  });
$contact.click(function(){  
    window.location='nous-contacter.html';
  });
$actualites.click(function(){ 
    window.location='actualites.html';
  });
    
    
$decouvrirteam.click(function(){
    window.location='a_propos.html';
  });
$goSponsor.click(function(){
    window.location='nous_sponsoriser.html';
});  
$dossier.click(function(){ 
    window.open("Dossier-de-sponsoring-4L-Trophy.pdf");
  });
    
//PUBLICATIONS
$calendrier.click(function(){ 
    window.open("https://www.facebook.com/4lsandnsound/posts/163889843942590");
  });
$papa_noel.click(function(){ 
    window.open("https://www.facebook.com/4lsandnsound/posts/156185324713042");
  });
$tonton.click(function(){ 
    window.open("https://www.facebook.com/4lsandnsound/posts/154251531573088");
  }); 
$film.click(function(){ 
    window.open("https://www.facebook.com/4lsandnsound/posts/119953425002899");
  });
    
    
jQuery(window).scroll(function() {
    sticky_navigation();
}); 

$(window).resize( function() {  
     sticky_navigation();   
});
    
$(window).load(function () {
    sticky_navigation();   
});
    
});