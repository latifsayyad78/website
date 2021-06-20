<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <script src="js/3ts2ksMwXvKRuG480KNifJ2_JNM.js"></script><link rel="icon" href="media/favicon.ico" type="image/x-icon"> -->
    <link rel="stylesheet" href="css/base.css">
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> -->
    <script src="js/core.min.js"></script>
    <script src="js/script.js"></script>
    <!-- Load TensorFlow.js. This is required to use coco-ssd model. -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"> </script>
    <!-- Load the coco-ssd model. -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"> </script>
    <!-- Place your code in the script tag below. You can also use an external .js file -->
  </head>
  <body>
    <div class="page">
      @include('layouts.header')
      @yield('content')
      @include('layouts.footer')
    </div>
    <!-- Modal-->
    <div class="modal fade" id="modal-login" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body text-center">
            <h3>Log In</h3>
            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p> -->
            <form>
              <div class="form-group">
                <input class="form-control" type="text" name="name" placeholder="Email *" data-constraints="@Required">
              </div>
              <div class="form-group">
                <input class="form-control" type="password" name="password" placeholder="Password *" data-constraints="@Required">
              </div>
              <div class="offset-xxs group-40 d-flex flex-wrap flex-xs-nowrap align-items-center">
                <button class="btn btn-block" type="submit">Log in</button>
              </div>
            </form>
          </div>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
      </div>
    </div>
    <!-- Preloader-->
    <div class="preloader">
      <div class="preloader-inner">
        <div class="preloader-dot"></div>
        <div class="preloader-dot"></div>
        <div class="preloader-dot"></div>
        <div class="preloader-dot"></div>
      </div>
    </div>
  </body>
</html>