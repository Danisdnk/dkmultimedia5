// init
/* var movimiento = new ScrollMagic.Controller();
 */
/* $(function() { // wait for document ready
    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#Anclaje", duration: })
    .addIndicators({ name: "1 (duration: 300)" }) // add indicators (requires plugin)
        .addTo(movimiento);
}); */
TweenMax.to("#desplaz", 1.2, { y: 100 });
TweenMax.to(".nubepin", 10, { y: 50 });