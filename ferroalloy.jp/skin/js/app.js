(function ($) {

    'use strict';

    // STICKY
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $(".defaultscroll").addClass("scroll");
        } else {
            $(".defaultscroll").removeClass("scroll");
        }
    });

    // Menu

    $('.has-submenu a').on('click', function(e) {
        if ($(window).width() < 992) {
            //e.preventDefault();
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
    });

    var scroll = $(window).scrollTop();

    $('.navbar-toggle').on('click', function(event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-2).addClass('last-elements');

    $('.menu-arrow,.submenu-arrow').on('click', function(e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
    });

    $(".navigation-menu a").each(function() {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
            $(this).parent().addClass("active"); // add active to li of the current link
            $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
            $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
        }
    });


    // Magnific Popup - IMAGE
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    //  VIDEO 
    $('.video-play-icon').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
})(jQuery)
    function contactform() {
      let postForm = document.querySelector("#postform")
      var nameInp = postForm.querySelector("input[name='name']")
      var emailInp = postForm.querySelector("input[name='email']")
      var commentsTex = postForm.querySelector("textarea[name='comments']")

      if (nameInp.value == "") {
        nameInp.setAttribute('placeholder', '入力してください。');
        return false;
      } else if (emailInp.value == "") {
        emailInp.setAttribute('placeholder', '入力してください。');
        return false;
      } else if (!/\S+@\S+\.\S+/g.test(emailInp.value)) {
        emailInp.value = ''
        emailInp.setAttribute('placeholder', 'ご確認ください。');
        return false;
      } else if (commentsTex.value == "") {
        commentsTex.setAttribute('placeholder', '入力してください。');
        return false;
      }
    }