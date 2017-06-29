<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="<?php bloginfo('charset')?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/nav.css" type="text/css">
  <link rel="stylesheet" href="css/footer.css" type="text/css">
  <link rel="stylesheet" href="css/main.css" type="text/css">
  <link rel="stylesheet" href="css/hover.css" type="text/css">
  <link rel="stylesheet" href="css/border.css" type="text/css">
  <link rel="stylesheet" href="css/animate.css" type="text/css">
  <link rel="stylesheet" href="css/hamburgers.css" type="text/css">
  <link rel="stylesheet" href="css/bootstrap.css" type="text/css">
  <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css">
  <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css">
  <link rel="stylesheet" href="css/reset.css" type="text/css">
  <script src="js/wow.min.js" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.6/SmoothScroll.min.js" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
  <script src="js/main.js" type="text/javascript"></script>
  <link rel="icon" href="favicon_32x32.png" type="image/png">
  <title>Услуги</title>
  <?php wp_head()?>
</head>
<body>
  <header class="header">
    <div class="header-topbar">
      <div class="container">
        <div class="row">
          <p class="header-topbar__text col-xs-8 col-sm-9">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            BIZUP | Многогранный Интернет-маркетинг, ул. Бугаевская 21, офис 401
          </p>
          <div class="header-topbar__social-icons text-right col-xs-4 col-sm-3">
            <i class="fa fa-vk" aria-hidden="true"></i>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <div class="container">
        <div class="row">
          <div class="header-logo col-xs-3">
            <img src="img/logo.png" class="header-logo__img" alt="logo">
          </div>
          <button type="button" class="navbar-toggle collapsed hidden-md hidden-lg" data-toggle="collapse" data-target="#myMenu" aria-expanded="true">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nav class="header-nav col-xs-12 col-md-7 col-lg-6 collapse navbar-collapse" id="myMenu">
            <ul class="header-list">
              <li class="header-list__item"><a class="header-list__link hvr-underline-from-left" href="services.php">Услуги</a></li>
              <li class="header-list__item"><a class="header-list__link hvr-underline-from-left" href="#">Клиенты и отзывы</a></li>
              <li class="header-list__item"><a class="header-list__link hvr-underline-from-left" href="#">О нас</a></li>
              <li class="header-list__item"><a class="header-list__link hvr-underline-from-left" href="#">Контакты</a></li>
              <li class="header-list__item"><a class="header-list__link hvr-underline-from-left" href="#">Блог</a></li>
            </ul>
          </nav>
          <div class="header-feedback col-md-2 col-lg-3 hidden-xs hidden-sm text-right" style="float:right">
            <div class="header-feedback__text-block hidden-xs hidden-sm hidden-md">
              <p class="header-feedback__text">+38 096 60 88 096</p>
              <p class="header-feedback__text">+38 073 60 88 096</p>
            </div>
            <div class="header-feedback__button-block">
              <div class="header-feedback__button">Заказать звонок</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="slider services-banner">
    <div class="gradient-mask">
      <div class="container">
        <div class="banner__block row">
          <div class="col-lg-offset-4 col-lg-4 text-center">
            <h1 class="banner__title">Наши услуги</h1>
            <p class="banner__text">Главная / Услуги</p>
          </div>
        </div>
      </div>
  </div>
  </section>
  <section class="services-tabs">
    <div class="container">
      <div class="row">
        <div class="services-pills col-md-12">
          <ul class="nav nav-pills">
            <li class="services-pills__list active"><a class="services__links" data-toggle="tab" href="#biz">Бизнесс процессы</a></li>
            <li class="services-pills__list"><a class="services__links" data-toggle="tab" href="#seo">Продвижения сайтов</a></li>
            <li class="services-pills__list"><a class="services__links" data-toggle="tab" href="#dev">Разработка</a></li>
            <li class="services-pills__list"><a class="services__links" data-toggle="tab" href="#smm">SMM</a></li>
            <li class="services-pills__list"><a class="services__links" data-toggle="tab" href="#desig">Дизайн</a></li>
            <li class="services-pills__list"><a class="services__links" data-toggle="tab" href="#domen">Хостинг и домен</a></li>
            <li class="services-pills__list"><a class="services__links" data-toggle="tab" href="#e-mail">E-mail маркетинг</a></li>
            <li class="services-pills__list"><a class="services__links" data-toggle="tab" href="#cr">Наполение сайтов</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="tab-content">
          <div id="biz" class="tab-pane fade in active">
            <p class="services-desc col-md-12">To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
          </div>
          <div id="seo" class="tab-pane fade">
          </div>
          <div id="dev" class="tab-pane fade">
          </div>
          <div id="smm" class="tab-pane fade">
          </div>
          <div id="desig" class="tab-pane fade">
            <p class="services-desc col-md-12">To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
            <div class="service-group col-md-4 col-sm-6">
              <div class="service-group__item">
                <img class="service-group__item-img" src="img/webdesign.png" alt="service__img">
                <h4 class="service-group__item-heading col-md-offset-4">Дизайн сайта</h4>
                <p class="service-group__item-text col-md-offset-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, asperiores voluptatibus nobis laudantium, porro quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, reiciendis. Rerum, officiis.</p>
              </div>
            </div>
            <div class="service-group col-md-4 col-sm-6">
              <div class="service-group__item">
                <img class="service-group__item-img" src="img/prototypes.png" alt="service__img">
                <h4 class="service-group__item-heading col-md-offset-4">Прототипирование</h4>
                <p class="service-group__item-text col-md-offset-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, asperiores voluptatibus nobis laudantium, porro quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, reiciendis. Rerum, officiis.</p>
              </div>
            </div>
            <div class="service-group col-md-4 col-sm-6">
              <div class="service-group__item">
                <img class="service-group__item-img" src="img/logotype.png" alt="service__img">
                <h4 class="service-group__item-heading col-md-offset-4">Логотип</h4>
                <p class="service-group__item-text col-md-offset-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, asperiores voluptatibus nobis laudantium, porro quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, reiciendis. Rerum, officiis.</p>
              </div>
            </div>
            <div class="service-group col-md-4 col-sm-6">
              <div class="service-group__item">
                <img class="service-group__item-img" src="img/branding.png" alt="service__img">
                <h4 class="service-group__item-heading col-md-offset-4">Фирменный стиль</h4>
                <p class="service-group__item-text col-md-offset-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, asperiores voluptatibus nobis laudantium, porro quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, reiciendis. Rerum, officiis.</p>
              </div>
            </div>
            <div class="service-group col-md-4 col-sm-6">
              <div class="service-group__item">
                <img class="service-group__item-img" src="img/socialdesign.png" alt="service__img">
                <h4 class="service-group__item-heading col-md-offset-4">Оформление осоциальных сетей</h4>
                <p class="service-group__item-text col-md-offset-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, asperiores voluptatibus nobis laudantium, porro quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, reiciendis. Rerum, officiis.</p>
              </div>
            </div>
          </div>
          <div id="domen" class="tab-pane fade">
            <p class="services-desc">To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
          </div>
          <div id="e-mail" class="tab-pane fade">
            <p class="services-desc">To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
          </div>
          <div id="cr" class="tab-pane fade">
            <p class="services-desc">To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-us bg-parallax">
    <div class="container">
      <div class="contact-us__block row">
        <p class="contact-us__text col-md-9 col-sm-8">Понравились наши работы? <br>Не теряйте время и станьте нашим клиентом</p>
        <div class="contact-us__button col-md-3 col-sm-4">
          <a class="contact-us__link">Стать нашим клиентом</a>
        </div>
      </div>
    </div>
  </section>
  <section class="blog">
	  <div class="container">
      <div class="row">
        <h1 class="blog__title col-md-12">Блог</h1>
      </div>
		  <div class="blog-group row">
			  <div class="col-md-4">
				  <div class="blog-thumbnail">
					  <div class="blog-thumbnail__img"></div>
					  <div class="blog-thumbnail__caption text-center">
					  	<h3 class="blog-thumbnail__title">Thumbnail label</h3>
              <p class="blog-thumbnail__date">February 3, 2016</p>
						  <p class="blog-thumbnail__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
						  <a href="#" class="blog-thumbnail__button">Подробнее</a>
					  </div>
				  </div>
			  </div>
			  <div class="col-md-4">
          <div class="blog-thumbnail">
					  <div class="blog-thumbnail__img"></div>
					  <div class="blog-thumbnail__caption text-center">
						  <h3 class="blog-thumbnail__title">Thumbnail label</h3>
              <p class="blog-thumbnail__date ">February 3, 2016</p>
						  <p class="blog-thumbnail__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
						  <a href="#" class="blog-thumbnail__button">Подробнее</a>
					  </div>
				  </div>
			  </div>
			  <div class="col-md-4">
          <div class="blog-thumbnail">
			  		<div class="blog-thumbnail__img"></div>
			  		<div class="blog-thumbnail__caption text-center">
			  			<h3 class="blog-thumbnail__title">Thumbnail label</h3>
              <p class="blog-thumbnail__date">February 3, 2016</p>
				  		<p class="blog-thumbnail__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				  		<a href="#" class="blog-thumbnail__button">Подробнее</a>
				  	</div>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>
  <footer class="footer">
	<div class="container">
    <div class="row">
      <div class="footer-about col-sm-3 col-xs-12">
  			<h3 class="footer-about__title"><strong>Bizup Company</strong></h3>
  			<p class="footer-about__text">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
        <div class="footer-about__social-icons">
          <i class="fa fa-vk" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
  		</div>
  		<div class="footer-service col-sm-2 col-xs-offset-1 hidden-xs">
  			<ul class="footer-service__list">
  				<li class="footer-service__list-item"><a class="footer-service__link" href="#">SEO</a></li>
  				<li class="footer-service__list-item"><a class="footer-service__link" href="#">PPC</a></li>
  				<li class="footer-service__list-item"><a class="footer-service__link" href="#">SMM</a></li>
  				<li class="footer-service__list-item"><a class="footer-service__link" href="#">Разработка</a></li>
  				<li class="footer-service__list-item"><a class="footer-service__link" href="#">Дизайн</a></li>
          <li class="footer-service__list-item"><a class="footer-service__link" href="#">Бизнес-процессы</a></li>
        </ul>
  		</div>
  		<div class="footer-contacts col-sm-3 hidden-xs">
  			 <address class="footer-address">
           <p class="footer-address__item"><strong>Контакты:</strong> <br></p>
           <p class="footer-address__item"><i class="fa fa-map-marker" aria-hidden="true"></i> Одесса, ул. Бугаёвская, 21 <br></p>
           <p class="footer-address__item"><i class="fa fa-clock-o" aria-hidden="true"></i> ПН - ПТ 09:00 - 18:00 <br></p>
           <p class="footer-address__item"><i class="fa fa-phone" aria-hidden="true"></i> +380 96-608-80-96 <br></p>
           <p class="footer-address__item"><i class="fa fa-phone" aria-hidden="true"></i> +380 73-608-80-96 <br></p>
         </address>
  		</div>
  		<div class="footer-copyright col-sm-3 col-xs-12 text-right">
  			<img class="footer-logo" src="img/logo_footer.png" alt="logo-footer">
  			<p class="footer-copyright__text">
  				Все права защищены 2017
  			</p>
  		</div>
    </div>
	</div>
</footer>
<script>
  var nav = $('.header');
  var scrolled = false;
  $(window).scroll(function () {
    if (300 < $(window).scrollTop() && !scrolled) {
      nav.animate({ top: '-40px' } , {duration: 600});
      scrolled = true;
    }
    if (300 > $(window).scrollTop() && scrolled) {
    //animates it out of view
    nav.animate({ top: '0px' }, {duration: 200});
    //sets it back to default style
    setTimeout(function(){
    nav.removeClass('visible');
    }, 500);
    scrolled = false;
    }
  });
</script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/owl.carousel.min.js" type="text/javascript"></script>
  <?php wp_footer()?>
</body>
</html>
