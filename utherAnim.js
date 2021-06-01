/*
------ The repo : https://github.com/GeneralNZR/Uther-minal ------
------     A small JavaScript animation in the terminal     ------
*/
const noam1 =  "GENERAL NZR           NOAM";
const noam2 =  "            ****          ";
const noam3 =  "     ****#########****    ";
const noam4 =  "    ***@@@ O @@ O @@@**   ";
const noam5 =  "    #@@@@@@@@@@@@@@@@@#   ";
const noam6 =  "   #####** OCLOCK **####  ";
const noam7 =  "   #####** UTHER  **####  ";
const noam8 =  "   #####** OCLOCK **####  ";
const noam9 =  "    #@@@@@@@@@@@@@@@@@#   ";
const noam10 =  "   ***@@@ 20 @@ 21 @@@**  ";
const noam11 =  "     ****#########****    ";
const noam12 =  "            ****          ";

var sautLigne = "\n" 			// Pour le faire bouger de haut en bas (le défilement le fait aussi)
var compteur = 0;
var breakTimer = 0;
i = 0;
 

function noamRun()
{
    var espaces = " "; 		// si elle est créée en dehors de la fonction, cette variable elle print : "undefined" sur la première boucle
                    
    run = true; 
    vitesse = 3; 			// la fréquence d'impression de l'ascii
    intervalle = 2900; 		// le temps entre les impressions, vous pouvez jouer avec :)
    pause = 0.001; 			// créer un effet de pause

    while(run)
    {
       espaces += " ";
       compteur += 1;
       breakTimer += 1;
       timer = 0;
       //console.log(breakTimer)
       if(breakTimer > 10000000)break;
       if(compteur % vitesse == 0) 	// modifiez ce paramètre pour accélérer ou ralentir le mouvement :) :) :)
       { 
         console.log('\033[2J');  	// merci stackOverflow,  " \033[2J ", permet de clear l'espace à l'écran 
         			   	// et ne pas laisser d'impression "fantôme" !
         console.log(espaces, noam1);
         console.log(espaces, noam2);
         console.log(espaces, noam3);
         console.log(espaces, noam4);
         console.log(espaces, noam5);
         console.log(espaces, noam6);
         console.log(espaces, noam7);
         console.log(espaces, noam8);
         console.log(espaces, noam9);
         console.log(espaces, noam10);
         console.log(espaces, noam11);
         console.log(espaces, noam12);
         console.log(sautLigne);
         //------------------------------  déplacement vers le haut ou le bas avec une nouvelle ligne
         sautLigne += "\n";
         if(sautLigne.length > 5)
         {
           sautLigne = "\n";
         }
       }
         //----------- TIMER ------------
       else
       {
         				// c'est similaire à l'utilisation de set intervalle
         				// pensez à 1000 compteurs comme une milliseconde
         while(timer < intervalle )
         {
           timer += pause;
           breakTimer += .001; 	// combien de temps pour exécuter
         }

       }
       				//-- réinitialiser les espaces pour éviter de remplir l'écran
       				//-- avec des espaces vides
        if(espaces.length > 50)	// Augmentez cette valeur pour augmenter la distance entre les deux messages.
        { 				
            espaces = " ";
        }
    }
}
noamRun();
