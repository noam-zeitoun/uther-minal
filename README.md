### Launch :
first, you must have Node installed. Then open a terminal where your script to be executed is located and type : 
  ```
$ node utherAnim
  ```
  
### Precisions :
We can modulate the space that the animation takes in the terminal by changing the numerical value in this part of the code (l.78-81).
Play with " x " to see the differences. The bigger the value, the more space the animation will take in the window :

```
if(espaces.length > x)    
{ 				                           
  espaces = " ";
}
```
We can also play with the general printing speed of the ascii characters and its movement (l.28-30).
Play with " x " to modulate the ascii printing frequency (I recommend 0 < x < 10) and " y " to modulate time between each print (I recommend 2000 < y < 5000) :
```
vitesse = x; 			
intervalle = y; 		
pause = 0.001; 			
```
