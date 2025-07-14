window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');

    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});


window.addEventListener("load", () => {
    gsap.to(".light", {
        duration: 2,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
            document.querySelector(".light").style.display = "none";
        }
    });


    gsap.from(".first-view-text", {
        duration: 2,
        y: 50,
        opacity: 0,
        delay: 1.5,
        ease: "power2.out"
    });
});
