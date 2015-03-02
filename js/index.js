CSSPlugin.defaultTransformPerspective = 2000;

var $   = document.querySelector.bind(document);
var $$  = document.querySelectorAll.bind(document);

var logoM     = $('.logo-m');
var circle    = $('.logo-m');
var container = $('.logo-container');

var go = function() {
    TweenMax.set(container, {
        rotationY : '-180deg',
        rotationX : Math.random() * 100,
        rotationZ : Math.random() * 100,
        z         : -3000,
        force3D   : true
    });

    TweenMax.set(logoM, {
        z: 50
    })

    TweenMax.to(container, 9, {
        rotationY : '360deg',
        rotationX : 0,
        rotationZ : 0,
        ease      : Elastic.easeOut,
        z         : 0
    })
}

setInterval(go, 13000);

go();
