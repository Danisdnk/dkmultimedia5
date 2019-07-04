$(function () { // wait for document ready

    // init
    var scrollpagina = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, { z: 0 })		// move back in 3D space
        .to("#slideContainer", 1, { x: "-25%" });
      /*   // move in to first panel
        .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, { z: 0, delay: 0 })
        .to("#slideContainer", 1, { x: "-50%" })
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to forth panel
        .to("#slideContainer", 0.5, { z: 0, delay: 0 })
        .to("#slideContainer", 1, { x: "-75%" })
        .to("#slideContainer", 0.5, { z: 0 });
 */

    // create scene to pin and link animation
    new ScrollMagic.Scene({ triggerElement: "#pinContainer", triggerHook: "onLeave", duration: "1000%" })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)

        .addIndicators({ name: "pagina" }) // add indicators (requires plugin)
        .addTo(scrollpagina);




    

});
/* .set("#instructions", {text:"Tween to <code>{xPercent:-50, yPercent:-50}</code> to get their centers aligned"}, "+=0.01")
.to("#next", 0.1, {autoAlpha:0})
.staggerTo(".box", 0.5, {xPercent:-50, yPercent:-50}, 0.1)
.to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
.addPause()
 */