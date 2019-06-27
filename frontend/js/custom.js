// document.addEventListener("scroll", function(){
//   if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//     document.getElementById("myImg").className = "slideUp";
// }

// });

let container = document.getElementsByClassName('sideflag-container')[0];
let animatedThingy = document.getElementsByClassName('sideflag');

let omondercontent01container = document.getElementsByClassName('omondercontent01')[0];
let omondercontent01image = document.getElementsByClassName('ondercontent01-image');


document.addEventListener("scroll", function(){
    // console.warn();('event triggered');

    if (document.body.scrollTop > getPosition(container).y - window.innerHeight + animatedThingy[0].offsetHeight|| document.documentElement.scrollTop > getPosition(container).y - window.innerHeight + animatedThingy[0].offsetHeight) {
      // console.error('if triggered');
      animatedThingy[0].classList.remove("hidden");
      setTimeout(function(){
        animatedThingy[1].classList.remove("hidden");
        setTimeout(function(){
          animatedThingy[2].classList.remove("hidden");
        }, 300);
      }, 300);
    }

    if (document.body.scrollTop > getPosition(omondercontent01container).y - window.innerHeight + omondercontent01image[0].offsetHeight|| document.documentElement.scrollTop > getPosition(omondercontent01container).y - window.innerHeight + omondercontent01image[0].offsetHeight) {
      omondercontent01image[0].classList.remove("scale01");
      setTimeout(function(){
        omondercontent01image[1].classList.remove("scale01");
        setTimeout(function(){
          omondercontent01image[2].classList.remove("scale01");
        }, 300);
      }, 300);
}
});

function getPosition(el) {

   var x = 0,
       y = 0;

   while (el != null && (el.tagName || '').toLowerCase() != 'html') {
       x += el.offsetLeft || 0;
       y += el.offsetTop || 0;
       el = el.parentElement;
   }

   return { x: parseInt(x, 10), y: parseInt(y, 10) };
 }
