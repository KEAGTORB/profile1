function toggle(ele){
    var bg = document.querySelector(".container");
    var btn = document.querySelectorAll(".btn span");
    var data = document.querySelectorAll(".data span");
    var social = document.querySelectorAll(".social span");
    var follower = document.querySelectorAll(".followers span");
    var following = document.querySelectorAll(".following span");
    if(ele.checked ==true){

        bg.style.background = "#333";

for( b of btn)
       b.style.color = "rgba(255, 255, 255, .7)";
      
   data[0].style.color = "#fff";
        data[1].style.color = "#71758d";
   data[2].style.color = "rgba(255, 255, 255, .7)";
  
  for( s of social)
            s.style.color = "#767991";

follower[1].style.color = "#fff";
        follower[2].style.color = "#767991";

following[1].style.color = "#fff";
        following[2].style.color = "#767991";

    } else{

bg.style.background = "#fff";

for( b of btn)
            b.style.color = "rgba(0, 0, 0, .7)";

data[0].style.color = "#000";
        data[1].style.color = "#9b9b9b";
        data[2].style.color = "#535353";

for( s of social)
            s.style.color = "#808080";

follower[1].style.color = "#000";
        follower[2].style.color = "#c2c6d6";

following[1].style.color = "#000";
        following[2].style.color = "#c2c6d6";
        
    }
}