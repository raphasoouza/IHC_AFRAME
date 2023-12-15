var x = true;
AFRAME.registerComponent('mycomponent', {


    events: {
        click: function (e) {
            var mus_sol = document.getElementById('s');
            var sol = document.getElementById('so');
            var mus_mercurio = document.getElementById('m');
            var mercurio = document.getElementById('mer');
            var mus_venus = document.getElementById('v');
            var venus = document.getElementById('ve');
            var mus_terra = document.getElementById('t');
            var terra = document.getElementById('te');
            var mus_marte = document.getElementById('mar');
            var marte = document.getElementById('ma');
            var mus_jupiter = document.getElementById('j');
            var jupiter = document.getElementById('ju');
            if (x) {
                sol.addEventListener('click', function () {
                    console.log('clique sol');
                    mus_sol.components.sound.playSound();
                    x = false;
                });
                mercurio.addEventListener('click', function () {
                    console.log('clique mercurio');
                    mus_mercurio.components.sound.playSound();
                    x = false;
                });

                venus.addEventListener('click', function () {
                    console.log('clique venus');
                    mus_venus.components.sound.playSound();
                    x = false;
                });

                terra.addEventListener('click', function () {
                    console.log('clique terra');
                    mus_terra.components.sound.playSound();
                    x = false;
                });
                marte.addEventListener('click', function () {
                    console.log('clique marte');
                    mus_marte.components.sound.playSound();
                    x = false;
                });

                jupiter.addEventListener('click', function () {
                    console.log('clique jupiter');
                    mus_jupiter.components.sound.playSound();
                    x = false;
                });
            } else {
                sol.addEventListener('click', function () {
                    console.log('pause sol');
                    mus_sol.components.sound.pauseSound();
                    x = true;
                });
                mercurio.addEventListener('click', function () {
                    console.log('pause mercurio');
                    mus_mercurio.components.sound.pauseSound();
                    x = true;
                });
                venus.addEventListener('click', function () {
                    console.log('pause venus');
                    mus_venus.components.sound.pauseSound();
                    x = true;
                });

                terra.addEventListener('click', function () {
                    console.log('pause terra');
                    mus_terra.components.sound.pauseSound();
                    x = true;
                });

                marte.addEventListener('click', function () {
                    console.log('pause marte');
                    mus_marte.components.sound.pauseSound();
                    x = true;
                });

                jupiter.addEventListener('click', function () {
                    console.log('pause jupiter');
                    mus_jupiter.components.sound.pauseSound();
                    x = true;
                });
            }

        }
        
    }
})