$(function () { // wait for document ready

    // init
    var scrollpagina = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, { z: 0 })		// move back in 3D space
        .to("#slideContainer", 1, { x: "-25%" })
        // move in to first panel
        .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, { z: 0, delay: 0 })
        .to("#slideContainer", 1, { x: "-50%" })
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to forth panel
        .to("#slideContainer", 0.5, { z: 0, delay: 0 })
        .to("#slideContainer", 1, { x: "-75%" })
        .to("#slideContainer", 0.5, { z: 0 });


    // create scene to pin and link animation
    new ScrollMagic.Scene({ triggerElement: "#pinContainer", triggerHook: "onLeave", duration: "1000%" })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)

       /*  .addIndicators({ name: "pagina" }) */ // add indicators (requires plugin)
        .addTo(scrollpagina);




    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }


    var $piso = $("line#piso");
    var $pantalla = $("path#pantalla")
    var $pie = $("path#pie");
    var $dot = $("rect#dot");

    var $cursor = $("path#cursor")
    var $cursordos = $("path#cursordos")
    var $pointer = $("path#pointer")
    var $lineafrontal = $("path#lineafrontal")
    var $lineadorso = $("path#lineadorso")

    var $imagenContenedor = $("rect#imagenContenedor");

    var $figuras = $("path#figuras");
    var $sectionboxes = $("rect.SectionBoxes");

    // panel posproduccion

    var $caja_enchufe = $("path#enchufe");
    var $caja_circuito = $("path#lcircuito");
    var $proyeccion_fondo = $("rect.pfondo");
    var $proyeccion_medio = $("rect.pmedio");
    var $proyeccion_prin = $("path.pprincipal");
    var $proyeccion_prin2 = $("rect.pprincipal2");
    var $btn_play_anim = $("path#btnplay");
    /*     var $btn_trabajo=; */

    //graficos

    var $_1escritorio_tabla = $("path#tabla");
    var $_1escritorio_contorno = $("path#contorno");
    var $_1escritorio_patas = $("path#patas");
    var $_2lineacursor = $("path#_2lineacursor");

    var $_3hojasestaticas = $("path._3hojasestaticas");
    var $_4hojasanim = $("path._4hojasanim");
    var $_5poster = $("rect#_5poster");
    var $_55libro = $("path._55libro");
    var $_6lineacursor1 = $("path._6lineacursor1");
    var $_6lineacursor2 = $("path._6lineacursor2");





    // prepare SVG
    pathPrepare($piso);
    pathPrepare($pie);
    pathPrepare($dot);
    pathPrepare($imagenContenedor);

    pathPrepare($cursor);
    pathPrepare($cursordos);
    pathPrepare($pointer);
    pathPrepare($lineafrontal);
    pathPrepare($lineadorso);

    pathPrepare($pantalla);
    pathPrepare($figuras);
    pathPrepare($sectionboxes);

    //path pantalla pospo
    pathPrepare($caja_enchufe);
    pathPrepare($caja_circuito);
    pathPrepare($proyeccion_fondo);
    pathPrepare($proyeccion_medio);
    pathPrepare($proyeccion_prin);
    pathPrepare($proyeccion_prin2);
    pathPrepare($btn_play_anim);

    //graficos

    pathPrepare($_1escritorio_tabla);
    pathPrepare($_1escritorio_contorno);
    pathPrepare($_1escritorio_patas);
    pathPrepare($_2lineacursor);
    pathPrepare($_3hojasestaticas);
    pathPrepare($_4hojasanim);
    pathPrepare($_5poster);
    pathPrepare($_55libro);
    pathPrepare($_6lineacursor1);
    pathPrepare($_6lineacursor2);

    // build tween
    var tween = new TimelineMax()
    /*  TweenMax.fromTo($pantalla, 1, {drawSVG:"0%"}, {drawSVG:"100%"}); */
    tween
        /* .add(TweenMax.to($piso,5, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
         */.add(TweenMax.to($cursor, 2, { fill: "none", stroke: "none", ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($dot, 3, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($pie, 0.7, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($pointer, 0.5, { strokeDashoffset: 0, scale: 1.05, ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1
        .add(TweenMax.to($pantalla, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($lineafrontal, 0.6, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($cursor, 0.5, { fill: "#c81d3a", ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($cursordos, 0.5, { fill: "#c81d3a", ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($lineadorso, 0.4, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($imagenContenedor, 0.5, { strokeDashoffset: 0, scale: 1.05, ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1  // draw dot for 0.1
        .add(TweenMax.to($figuras, 0.1, { strokeDashoffset: 0, scale: 1.05, ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1
        .add(TweenMax.to($sectionboxes, 1, { strokeDashoffset: 0, scale: 1.06, ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1
        .from('.hidetext', 0.15, { opacity: 0, y: "30%", ease: Linear.easeNone })

        .add(TweenMax.to("path.rosa", 1, { stroke: "#c81d3a", ease: Linear.easeNone }), 0)
        .add(TweenMax.to("path.rosafilled", 1, { stroke: "#c81d3a", fill: "#c81d3b", ease: Linear.easeNone }), 0);

    // init controller
    /*     var P_interactivo = new ScrollMagic.Controller(); */


    // build scene
    var panel2 = new ScrollMagic.Scene({ triggerElement: "#pinContainer", duration: "290%", triggerHook: 0, tweenChanges: true })
        .setPin("pinContainer#dos")
        .setTween(tween)
       /*  .addIndicators({ name: "animacion" })  */// add indicators (requires plugin)
        .addTo(scrollpagina);




    // build tween
    var pospo = new TimelineMax()
    pospo
        /*  TweenMax.fromTo($pantalla, 1, {drawSVG:"0%"}, {drawSVG:"100%"}); */
        /*  .add(TweenMax.to($caja_enchufe, 5, { strokeDashoffset: 0, ease: Linear.easeNone }))  
       clip: "rect(50px 100px 50px 0px)",
        */


        .add(TweenMax.to($caja_circuito, 0.7, { strokeDashoffset: 0, ease: Linear.easeNone }))
        .add(TweenMax.to($proyeccion_fondo, 1, { strokeDashoffset: 0, fill: '#ffffff', ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($proyeccion_medio, 1, { strokeDashoffset: 0, fill: '#ffffff', ease: Linear.easeNone }))  // draw dot for 0.1

        .add(TweenMax.to($proyeccion_prin2, 1, { strokeDashoffset: 0, scale: 1.06, ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1
        .add(TweenMax.to($proyeccion_prin2, 1, { strokeDashoffset: 0, fill: '#ffffff', ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1

        .add(TweenMax.to($proyeccion_prin, 1.4, { strokeDashoffset: 0, fill: '#c81d3a', scale: 1.06, ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1

        .from('.hidetextdos', 0.15, { opacity: 0, y: "30%", ease: Linear.easeNone })
        .add(TweenMax.to($btn_play_anim, 1, { strokeDashoffset: 0, scale: 1.06, ease: ExpoScaleEase.config(2, 0.1) }));  // draw dot for 0.1

    // init controller
    /* var controller3_pospo = new ScrollMagic.Controller();
     */
    // build scene
    var panel3 = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: 0,
        offset: 4500,
        duration: "120%",
        tweenChanges: true
    })
        .setTween(pospo)
        .setPin("#tres")
        /* .addIndicators({ name: "panel3_pospo" }) // add indicators (requires plugin) */
        .addTo(scrollpagina);
        

//ofseet cambio de tiempo 4800 antes 4500 ahora 
    var graficos = new TimelineMax()
    graficos



        .add(TweenMax.to($_1escritorio_tabla, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($_1escritorio_contorno, 0.7, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($_1escritorio_patas, 0.5, { strokeDashoffset: 0, scale: 1.05, ease: ExpoScaleEase.config(2, 0.1) }))  // draw dot for 0.1
        .add(TweenMax.to($_2lineacursor, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($_3hojasestaticas, 0.6, { strokeDashoffset: 0, fill: '#ffffff', ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($_4hojasanim, 1, { strokeDashoffset: 0, fill: '#ffffff', ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($_5poster, 0.6, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($_6lineacursor1, 0.4, { strokeDashoffset: 0, fill: '#c81d3a', ease: Linear.easeNone }))  // draw dot for 0.1
        .from('.hidetexttres', 0.15, { opacity: 0, y: "30%", ease: Linear.easeNone })

        .add(TweenMax.to($_55libro, 1, { strokeDashoffset: 0, fill: '#ffffff', ease: Linear.easeNone }))  // draw dot for 0.1
        .add(TweenMax.to($_6lineacursor2, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.1

    var panel4 = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: 0,
        offset: 6720,
        duration: "120%",
        tweenChanges: true
    })
        .setTween(graficos)
        /* .addIndicators({ name: "panel3_grifca" }) */
        .addTo(scrollpagina);

///////////////////////////////////botones///////////////////
//seccion uno
    $(".Show_Proyectos").click(function () {
        $("#UNO").hide();
        TweenMax.to("#CAJAS_1" ,0.5, {yPercent:+20}, 0.1);
        $("#CAJAS_1").slideDown(100).delay( 800 ).fadeIn( 800 );

    });
   $("#volver_c1").click(function () {
        $("#CAJAS_1").hide();
        $("body").show();
        $("#UNO").show();
     /*    TweenMax.to("#UNO" ,0.5,  0.1);
        $("#UNO").slideUp(400).delay( 600 ).fadeIn( 600 ); */

    }); 

    //seccion dos
    $(".Proy_Animados").click(function () {
        $("#DOS").hide();
        TweenMax.to("#CAJAS_2" ,0.5, {yPercent:+20}, 0.1);
        $("#CAJAS_2").slideDown(100).delay( 800 ).fadeIn( 600 );

    });

    $("#volver_c2").click(function () {
        $("#CAJAS_2").hide();
        $("body").show();
        $("#DOS").show();
     /*    TweenMax.to("#UNO" ,0.5,  0.1);
        $("#UNO").slideUp(400).delay( 600 ).fadeIn( 600 ); */

    }); 

    //seccion tres
    $(".Proy_Graficos").click(function () {
        $("#TRES").hide();
        TweenMax.to("#CAJAS_3" ,0.5, {yPercent:+20}, 0.1);
        $("#CAJAS_3").slideDown(100).delay( 800 ).fadeIn( 600 );

    });
    $("#volver_c3").click(function () {
        $("#CAJAS_3").hide();
        $("body").show();
        $("#TRES").show();
     /*    TweenMax.to("#UNO" ,0.5,  0.1);
        $("#UNO").slideUp(400).delay( 600 ).fadeIn( 600 ); */

    }); 

});
/* .set("#instructions", {text:"Tween to <code>{xPercent:-50, yPercent:-50}</code> to get their centers aligned"}, "+=0.01")
.to("#next", 0.1, {autoAlpha:0})
.staggerTo(".box", 0.5, {xPercent:-50, yPercent:-50}, 0.1)
.to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
.addPause()
 */