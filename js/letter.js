$(document).ready(function(){

		//letter animation ml6
        var textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: true})
        .add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 3500,
            delay: (el, i) => 250 * i
        }).add({
            targets: '.ml6',
            opacity: 1,
            duration: 0,
            easing: "easeOutExpo",
        });

        
        
        // ml11 letter animation
        var textWrapper2 = document.querySelector('.ml11 .letters');
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
        .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 2000
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.ml11 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
        }).add({
            targets: '.ml11',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

        
});