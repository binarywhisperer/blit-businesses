<?php
    $workshop = json_decode(file_get_contents('workshop.json'), true);
?>
<html><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Business Workshop</title>

    <!-- Styles -->
    <link href="workshop/blit.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/brands.css" integrity="sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW" crossorigin="anonymous">
    <style>
        <?php include "./pages/community/$workshop/businesses.css" ?>
    </style>
</head>
<body cz-shortcut-listen="true" style="">
<section class="hero is-info is-">
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="workshop/logo-min.jpg" alt="Blacks &amp; Latinos in Tech Logo">
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
                </div>
                <div id="navbarMenuHeroB" class="navbar-menu">
                    <ul class="navbar-end">
                        <li class="navbar-item">
                            <a href="/about">
                                About
                            </a>
                            <ul class="navbar-item-subnav">
                                <li>
                                    <a href="/about">
                                        Our Story
                                    </a>
                                </li>
                                <li>
                                    <a href="/about/team">
                                        Founder/Partners
                                    </a>
                                </li>
                            </ul>
                        </li></ul>
                    <li class="navbar-item">
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                    <li class="navbar-item">
                        <a href="/media">
                            Media
                        </a>
                    </li>
                    <span class="navbar-item">
              <a class="button is-info is-inverted" href="/black-latino-businesses">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>BLB</span>
              </a>
            </span>

                </div>
            </div>
        </nav>
    </div>

    <div class="hero-body">
        <div class="container has-text-centered">
            <p class="title">
                Blacks &amp; Latinos in Tech            </p>
            <p class="subtitle">
                technology is our community            </p>
        </div>
    </div>

    <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/BLiTMemphis">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/BlitMemphis">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</section>
<div class="container">
    <?php include "./pages/community/$workshop/businesses.html" ?>
</div>
<footer class="footer">
    <div class="content has-text-centered">
        <p>
            <span class="brand-highlight">Be lit with BLiT!</span>
        </p>
    </div>
</footer>
<script src="workshop/blit.js"></script>
<script>
    <?php include "./pages/community/$workshop/businesses.js" ?>
</script>
</body></html>