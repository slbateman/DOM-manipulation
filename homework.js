/**
 * PROMPT: Using only JavaScript (do not touch the index.html or styles.css file), create a circle that will fill
 * the square and touch all of the edges of the square. Refer to "finished-example.png" to see an example.
 */

 /** BEGIN CODE **/

 let box = document.getElementsByClassName("square");

 let circle = document.createElement("div");
 circle.style.border = "1px solid black";
 circle.style.borderRadius = "50%";
 circle.style.width = "100%";
 circle.style.height = "100%";
 box[0].appendChild(circle);



