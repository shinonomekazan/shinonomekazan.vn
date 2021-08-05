jQuery(function ($) {
    $('.content-link').click(function(e) {
        //e.preventDefault();
        var content_section = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(content_section).offset().top
        }, 500);
    });

    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 5000,
        },
        pagination: false,
        navigation: false,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //         if (window.screen.width > 900) {
        //             return '<span class="slide-nav slide-nav-'+(index + 1)+' ' + className + '">0' + (index + 1) + "</span>";
        //         } else {
        //             return '<span class="' + className + '">' + (index + 1) + "</span>";
        //         }
        //     },
        // },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        on: {
            slideChangeTransitionStart: function () {
                $('.banner-title').hide(0);
                $('.banner-title').removeClass('aos-init').removeClass('aos-animate');
            },
            slideChangeTransitionEnd: function () {
                $('.banner-title').show(0);
                AOS.init();
            },
        }
    });
    AOS.init({
        duration: 1200,
    });

    //add active a menu when scroll
    var topMenu = $("#main-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        menuItems
            .parent().removeClass("active_main")
            .end().filter("[href='#"+id+"']").parent().addClass("active_main");
    });

    // $('.btn-about-us').click(function (){
    //     var data_view = $(this).data('view');
    //     if (data_view=='show') {
    //         $(this).data('view', 'hide');
    //         $(this).html('Thu gọn');
    //     } else {
    //         $(this).data('view', 'show');
    //         $(this).html('Xem thêm');
    //     }
    //     $('.text-about-us-hide').toggle();
    // })
});


document.addEventListener("scroll", function () {
    let e = document.querySelector(".main-menu"), t = document.querySelector("#main-menu"),
        n = e ? e.clientHeight : 0;
    if (!t) return !1;
    window.pageYOffset > n ? t.classList.add("menu_fix") : t.classList.remove("menu_fix")
})


let btnTop = document.getElementById('scrollTop');
// Reveal the button
let btnReveal = function () {
    if (window.scrollY >= 300) {
        btnTop.classList.add('is-visible');
    } else {
        btnTop.classList.remove('is-visible');
    }
}
let topScrollTo = function () {
    if (window.scrollY !== 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 30);
            topScrollTo();
        }, 5);
    }
}
window.addEventListener('scroll', btnReveal);
btnTop.addEventListener('click', topScrollTo);


