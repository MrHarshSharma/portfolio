AOS.init({
      offset:30,
      duration:1000,
    }); 

var nameInterval;

var freeVar = 10;
var finalCount=100;
  (function(){
        document.getElementById('loadercontainer').style.display="block";   
        document.getElementById('page-top').style.overflowY="hidden";

         var counter = 0;
      var c = 0;
      var i = setInterval(loadingScreen, 100);

        function loadingScreen(){
            counter=counter+5;
            c++;
              $("#counter span").html(c);

            if(counter<freeVar){
              $(".status h2 span").html('Processing..');
            }
              $("#counterline").css("width", c + "%");
             

            if(counter==freeVar){
              clearInterval(i);
              i= setInterval(loadingScreen, 20);
              // $(".status h2 span").attr('data-aos','fade-up');
               $(".status h2 span").html('Almost done..');
            }

            if(counter==70){
              var changes = $(".loadercontainer");
              changes.css("border-bottom-right-radius","50px")
              changes.css("border-bottom-left-radius","50px")

            }
            if(counter==90){

               $(".loadercontainer").attr('data-aos','fade-down');
            }

            if(counter == finalCount) {
                clearInterval(i);
                
                document.getElementById('page-top').style.overflowY="auto";
               
               setTimeout(()=>{
                document.getElementById('loadercontainer').style.display="none";
                     changebubble()
               },400)
              nameInterval = setInterval(autotype, 100);
            }
             document.getElementById('loadercontainer').style.backdropFilter="blur("+(100-c)+"px)";
            
          }

  }());


  $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


const name = [
"H", 
"HA", 
"HAR",
"HARS",
"HARSH",
"HARSH",
"HARSH",
"HARSH",
"HARSH S",
"HARSH SH",
"HARSH SHA",
"HARSH SHAR",
"HARSH SHARM",
"HARSH SHARMA",
];

var c=0;

// var nameInterval = setInterval(autotype, 200);

function autotype(){
  document.getElementById('myname').innerHTML = name[c] ;
  c=c+1;
  if(name.length==c){
    clearInterval(nameInterval);
    setTimeout(function(){
      document.getElementById('blinking-cursor').style.display='none';
    },1000);
  }
}


function changebubble(){

  setInterval(function(){

    let a = Math.floor(Math.random() * (100 - 10)) + 10;
    let b = Math.floor(Math.random() * (100 - 10)) + 10;
    let c = Math.floor(Math.random() * (100 - 10)) + 10;
    let d = Math.floor(Math.random() * (100 - 10)) + 10;
    let e = Math.floor(Math.random() * (100 - 10)) + 10;
    let f = Math.floor(Math.random() * (100 - 10)) + 10;
    let g = Math.floor(Math.random() * (100 - 10)) + 10;
    let h = Math.floor(Math.random() * (100 - 10)) + 10;
    
    let bubble1 = document.querySelectorAll('.bubble-1');
    for(let ele = 0;ele < bubble1.length;ele++){
      bubble1[ele].setAttribute('style','border-radius:'+a+'% '+b+'% '+c+'% '+d+'% / '+e+'% '+f+'% '+g+'% '+h+'% !important')
    }

  
  },1200)

}
