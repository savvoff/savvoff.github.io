/* ========================================================================
 * # Main JS file
 *    Docs:
 *    http://api.jquery.com/
 *    https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know
 *    https://github.com/peterkokot/awesome-jquery
 ========================================================================*/

(() => {
    // Utils
    const PATH = '';
    const $html = $('html');
    const $body = $('body');
    const $loader = $('.loader');
    const $header = $('.page-header');
    const settings = {
      aos: {
        // Global settings:
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        offset: 100, // offset (in px) from the original trigger point
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease-out-quart', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      },
      smoothscroll: {
        // Scrolling Core
        animationTime    : 900, // [ms]
        stepSize         : 60, // [px]

        // Acceleration
        accelerationDelta : 30,  // 50
        accelerationMax   : 3,   // 3

        // Keyboard Settings
        keyboardSupport   : true,  // option
        arrowScroll       : 60,    // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm   : true,
        pulseScale       : 6,
        pulseNormalize   : 1,

        // Other
        touchpadSupport   : false, // ignore touchpad by default
        fixedBackground   : true,
        excluded          : ''
      },
      flickity: {
        sliderGuide: {
          autoPlay: 5000,
          pageDots: false,
          pauseAutoPlayOnHover: false,
          imagesLoaded: true,
          percentPosition: false,
          prevNextButtons: true,
          contain: true,
          arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 65, y2: 45,
            x3: 20
          }
        },
        sliderGuideText: {
          // wrapAround: true,
          asNavFor: '.slider-guide',
          draggable: false,
          pageDots: false,
          percentPosition: false,
          prevNextButtons: false,
          contain: true,
        },
        sliderPrezi: {
          // wrapAround: true,
          asNavFor: '.slider-prezi',
          pageDots: false,
          percentPosition: false,
          prevNextButtons: true,
          adaptiveHeight: true,
          contain: true,
          arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 65, y2: 45,
            x3: 20
          }
        },
        sliderPartners: {
          // wrapAround: true,
          pageDots: false,
          groupCells: true,
          percentPosition: false,
          prevNextButtons: true,
          contain: true,
          arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 65, y2: 45,
            x3: 20
          }
        }
      }
    };

    // load sprite on page
    $('#svg-sprites').load(PATH + 'assets/dist/images/svg/sprite.symbol.svg', r => r.data);

    // Obj fit
    objectFitImages($('.img-fit'));

    // Full height fix on mobile
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

    function setFullHeight() {
      let vh = $(window).innerHeight() * 0.01;
      $('html').attr('style', `--vh: ${vh}px`);
    };

    function isMobile() {
      let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
      return mobile || document.documentElement.clientWidth <= 768 ? true : false;
    }

    // Overflow
    function getScrollbarWidth() {
      let outer = document.createElement('div')
          inner = document.createElement('div');

      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      inner.style.width = '100%';

      outer.appendChild(inner);
      document.body.appendChild(outer);

      let widthWithoutScrollbar = outer.offsetWidth;

      outer.style.overflow = 'scroll';

      let widthWithScrollbar = inner.offsetWidth;

      document.body.removeChild(outer);

      return widthWithoutScrollbar - widthWithScrollbar;
    }

    function blockGlobalScroll() {
      $body.css('overflow', 'hidden');
      $body.css('padding-right', getScrollbarWidth() + 'px');
    }

    function unBlockGlobalScroll() {
      $body.css('overflow', '');
      $body.css('padding-right', 0);
    }
    // Smooth scroll
    SmoothScroll(settings.smoothscroll);

    // Particles init
    const $particles = $('.particles');
    $particles.each((i, el)=> {
      particlesJS.load(el.id, '/assets/dist/javascript/particles.json');
    });

    // Wrapper top
    function wrapperOffset() {
      $('.wrapper').css('margin-top', $header.outerHeight());
    }

    // Menu
    $('.burger').click(() => {
      $body.css('overflow') === 'hidden' ? unBlockGlobalScroll() : blockGlobalScroll();
      $header.toggleClass('is-open');
    })
    function moveBorderSlide() {
      if (isMobile()) return;
      $pos = $(this).position();
      $('.slide-border').stop().css({
        left: $pos.left,
        width: $(this).width()
      })
    }
    function moveBorderSlideToActive() {
      if (isMobile()) return;
      $activePos = $('.page-header__menu .active').position();
      $('.slide-border').stop().css({
        left: $activePos.left,
        width: $('.page-header__menu .active').width()
      })
    }
    $('.page-header__menu li').on('mouseover', moveBorderSlide);
    $('.page-header__menu li').on('mouseout', moveBorderSlideToActive);

    // Modal
    $('.open-modal').on('click', () => $('.modal').toggleClass('is-open'));
    $('.cross').on('click', () => $('.modal').toggleClass('is-open'));

    // to-top button
    const $toTopBtn = $('.btn-to-top');
    $toTopBtn.click(() => {
      $html.animate({ scrollTop: 0 }, 500);
      return false;
    });

    // Sliders
    $('.slider-guide').flickity(settings.flickity.sliderGuide);
    $('.slider-guide-text').flickity(settings.flickity.sliderGuideText);
    $('.slider-prezi').flickity(settings.flickity.sliderPrezi);
    $('.slider-partners').flickity(settings.flickity.sliderPartners);

    // Tabs
    function openTab(e) {
      e.preventDefault()
      let i, id = e.currentTarget.dataset.target;
      $('.tab__content').each((i, el) => {
        $(el).attr('visibility', 'hidden');
        $(el).removeClass('active');
      })
      $('.tab__item').each((i, el) => {
        $(el).removeClass('active');
      })
      $(id).attr('visibility', '');
      $(id).addClass('active');
      $(e.currentTarget).addClass('active');
    }
    $('.tab__item').each((i, el) => el.addEventListener('click', openTab));

  // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', () => {
      setFullHeight();
      wrapperOffset();
      moveBorderSlideToActive();
      setTimeout(() => {
        $loader.addClass('is-load');
        setTimeout(() => {
          // AOS.init(settings.aos)
          unBlockGlobalScroll();
        }, 1100);
      }, 300);
      // SVG FF & IE gradient fix
      $('#svg-sprites svg').each(function (i, el) {
          let svg = $(el),
              symbols = svg.find('symbol');
          svg.append($.merge(symbols.find('radialGradient'), symbols.find('linearGradient')).detach());
      });
    });

  // Scripts that will run on window resize
    $(window).on('resize', () => {
      wrapperOffset();
    });

  // Scripts that will run on window scroll
    let currentScroll = 0;
    $(window).on('scroll', (ev) => {
      // menu anim
      const $nextScrollPos =  $(ev.currentTarget).scrollTop();
      $nextScrollPos > currentScroll ? $header.addClass('is-scroll') : $header.removeClass('is-scroll');
      currentScroll = $nextScrollPos;  //Updates current scroll position

      // btn to top
      $nextScrollPos >= $(this).height()/2 ? $toTopBtn.addClass('is-show') : $toTopBtn.removeClass('is-show');
    });
})();
