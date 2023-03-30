var color=document.getElementById('colored');
      var x;
      window.addEventListener('load',function(){setTimeout(function(){doFirst(0);},500)},false);
      function doFirst(x){
        if(x==0)
        {
          color.style.clipPath="polygon(0 0,100% 0,100% 100%,0 100%)";
          color.style.transition="clip-path .8s";
          setTimeout(function(){
            color.style.clipPath="polygon(99.99% 0,100% 0,100% 100%,99.99% 100%)";
            color.style.transition="clip-path .8s";
          },900);
          x=99.99;
        }
        else {
          color.style.clipPath="polygon(0 0,100% 0,100% 100%,0 100%)";
          color.style.transition="clip-path .8s";
          setTimeout(function(){
            color.style.clipPath="polygon(0 0,0.01% 0,0.01% 100%,0 100%)";
            color.style.transition="clip-path .8s";
          },900);
          x=0;
        }


        setTimeout(function(){doFirst(x);},1900);}