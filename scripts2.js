
var heart = document.getElementById('svg');

var EaseIs = Power4.easeOut;
var delay = 0.3;
var timeIs = 0.3;
console.log('hi');

var tl = gsap.timeline( {repeat:-1, repeatDelay: 0} );

function start() {
  
  
  tl.fromTo(heart,timeIs,{
  transform:'scale(1)'
},{
  transform:'scale(1.1)'
},delay, EaseIs )
    
    .fromTo(heart,timeIs,{
  transform:'scale(1.1)'
},{
  transform:'scale(1)'
},delay*2, EaseIs)

  
  .fromTo(heart,timeIs,{
  transform:'scale(1)'
},{
  transform:'scale(1.1)'
},delay*2.5, EaseIs)
  
  .fromTo(heart,timeIs,{
  transform:'scale(1.1)'
},{
  transform:'scale(1)'
},delay*3.5, EaseIs)

}

start()