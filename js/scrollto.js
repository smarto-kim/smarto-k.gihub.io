    "use strict";

    /*------------------------------------*\
        Skrollr (parallax)
        http://git.io/L7phbA
    \*------------------------------------*/

    /* Setup */
    skrollrParallax();

    /* Init */
    var skrollrP = skrollr.init({
      smoothScrolling: false,
      forceHeight: false
    });

    /* Skrollr-menu  */
    skrollr.menu.init(skrollrP, {
      easing: 'swing'
    });

    /*------------------------------------*\
        Parallax (for Skrollr)
    \*------------------------------------*/

    function skrollrParallax() {

      /**
       * Get all parallax section conatiners
       */
      var parallaxSection = document.getElementsByClassName("js-parallax");

      /**
       * forEach method borrowing
       */
      parallaxSection.forEach = [].forEach;

      /**
       * Set parallax effect
       *
       * Add after #skrollr-body parallax images like in
       * the example classic.html (Skrollr plugin examples)
       * for each parallax section
       *
        <div class="skrollr-parallax"
             data-anchor-target="#section-id"
             data-bottom-top="transform:translate3d(0px, 200%, 0px)"
             data-top-bottom="transform:translate3d(0px, 0%, 0px)">

          <div class="skrollr-parallax__image"
               style="background-image:url(section-image)"
               data-anchor-target="#section-id"
               data-bottom-top="transform: translate3d(0px, -80%, 0px);"
               data-top-bottom="transform: translate3d(0px, 80%, 0px);"></div>
        </div>
       */

      parallaxSection.forEach(function(item, i) {

        /* Get the url of the background image from the parent (.c-parallax) */
        var urlBgImage = window.getComputedStyle(item, null).getPropertyValue("background-image");

        /* Random class name instead id */
        var randomClassName = "js-parallax-" + Math.floor((Math.random() * 100000) + 1);

        /* Set random class to the .c-parallax */
        item.className = item.className + " " + randomClassName;

        /* Half height of the viewport */
        var halfSize = item.classList.contains("parallax--50");

        /* Parallax effect */
        var imageWrapperStartTransform = "translate3d(0px, 200%, 0px)";
        var imageWrapperEndTransform = "translate3d(0px, 0%, 0px)";
        var imageStartTransform = "translate3d(0px, -80%, 0px);";
        var imageEndTransform = "translate3d(0px, 80%, 0px);";

        /* If container with half height of the viewport */
        if (halfSize) {
          imageWrapperStartTransform = "translate3d(0px, 300%, 0px)";
          imageStartTransform = "translate3d(0px, -60%, 0px);";
          imageEndTransform = "translate3d(0px, 60%, 0px);";
        }

        var imageWrapper = document.createElement("div");
        imageWrapper.className = halfSize ? "skrollr-parallax skrollr-parallax--50" : "skrollr-parallax";
        imageWrapper.setAttribute("data-anchor-target", "." + randomClassName);
        imageWrapper.setAttribute("data-bottom-top", "transform:" + imageWrapperStartTransform);
        imageWrapper.setAttribute("data-top-bottom", "transform:" + imageWrapperEndTransform);

        var image = document.createElement("div");
        image.className = halfSize ? "skrollr-parallax__image skrollr-parallax__image--50" : "skrollr-parallax__image";
        image.setAttribute("style", "background-image:" + urlBgImage);
        image.setAttribute("data-anchor-target", "." + randomClassName);
        image.setAttribute("data-bottom-top", "transform:" + imageStartTransform);
        image.setAttribute("data-top-bottom", "transform:" + imageEndTransform);

        imageWrapper.appendChild(image);
        document.body.appendChild(imageWrapper);

        // Parallax body
        var scrollDown = item.firstElementChild;
        scrollDown.setAttribute("data-anchor-target", "#" + item.id);
        scrollDown.setAttribute("data-center", "opacity: 1");
        scrollDown.setAttribute("data-top-bottom", "opacity: 0");
        scrollDown.setAttribute("data-bottom-top", "opacity: 0");
      });

    };