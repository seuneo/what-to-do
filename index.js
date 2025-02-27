     import activities from "./activities.js";

     var activity = document.querySelector("#activity");
     var button = document.querySelector(".button");
     button.addEventListener("click", newActivity);

     function newActivity(){
        var r = Math.floor(Math.random() * activities.length);
         activity.innerHTML = activities[r];
         
     }