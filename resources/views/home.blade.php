@extends('layouts.app')

@section('content')
<!-- Intro-->
<section class="section" id="home">
    <div class="swiper-container swiper-pagination-minimal" data-swiper='{"scrollbar":{"el":""},"autoplay":{"delay":5000,"disableOnInteraction":false},"breakpoints":{"320":{"autoplay":false},"1200":{"autoplay":{"delay":5000,"disableOnInteraction":false}}}}'>
      <div class="bg-layer d-flex align-items-end">
        <svg class="image-svg" width="1920" height="792" viewbox="0 0 1920 792" fill="none">
          <path d="M155.44 227.32H227.26V523H155.44L35.32 336.94V523H-36.5V227.32H35.32L155.44 413.38V227.32ZM389.935 525.94C355.775 525.94 327.775 515.02 305.935 493.18C284.095 471.06 273.175 441.8 273.175 405.4C273.175 369 283.955 340.02 305.515 318.46C327.355 296.9 355.495 286.12 389.935 286.12C424.375 286.12 452.935 296.76 475.615 318.04C498.295 339.32 509.635 368.86 509.635 406.66C509.635 414.78 509.075 422.34 507.955 429.34H346.675C348.075 439.7 352.695 448.24 360.535 454.96C368.375 461.4 376.775 464.62 385.735 464.62C394.975 464.62 401.835 463.78 406.315 462.1C410.795 460.14 414.015 458.32 415.975 456.64C418.215 454.68 421.015 451.6 424.375 447.4H502.075C495.355 470.92 481.915 489.96 461.755 504.52C441.595 518.8 417.655 525.94 389.935 525.94ZM434.875 384.4C433.755 373.48 428.995 364.66 420.595 357.94C412.195 350.94 402.255 347.44 390.775 347.44C379.295 347.44 369.635 350.94 361.795 357.94C353.955 364.66 349.055 373.48 347.095 384.4H434.875ZM696.466 449.5C705.986 439.42 710.746 424.86 710.746 405.82C710.746 386.78 705.846 372.36 696.046 362.56C686.246 352.48 674.626 347.44 661.186 347.44C647.746 347.44 636.126 352.48 626.326 362.56C616.806 372.36 612.046 386.78 612.046 405.82C612.046 424.86 616.946 439.42 626.746 449.5C636.826 459.58 648.586 464.62 662.026 464.62C675.466 464.62 686.946 459.58 696.466 449.5ZM574.246 492.76C550.726 470.64 538.966 441.52 538.966 405.4C538.966 369.28 550.726 340.44 574.246 318.88C597.766 297.04 626.886 286.12 661.606 286.12C696.326 286.12 725.306 297.04 748.546 318.88C772.066 340.44 783.826 369.28 783.826 405.4C783.826 441.52 772.206 470.64 748.966 492.76C725.726 514.88 696.746 525.94 662.026 525.94C627.306 525.94 598.046 514.88 574.246 492.76ZM901.98 288.64V323.08C916.82 298.44 940.48 286.12 972.96 286.12C999.84 286.12 1021.54 295.08 1038.06 313C1054.86 330.92 1063.26 355.28 1063.26 386.08V523H991.86V395.74C991.86 380.62 987.8 369 979.68 360.88C971.84 352.48 960.92 348.28 946.92 348.28C932.92 348.28 921.86 352.48 913.74 360.88C905.9 369 901.98 380.62 901.98 395.74V523H830.16V288.64H901.98Z" fill="url(#paint0_linear)"></path>
          <path opacity="0.03" d="M1245 671.5H0V792H1920V0.5H1450C1392.01 0.5 1345 47.5101 1345 105.5V571.5C1345 626.728 1300.23 671.5 1245 671.5Z" fill="white"></path>
          <circle cx="509" cy="121" r="18" fill="#45494B"></circle>
          <circle cx="367.5" cy="138.5" r="9.5" fill="#FF8C68"></circle>
          <circle cx="526.5" cy="431.5" r="6.5" fill="#78C5D6"></circle>
          <defs>
            <lineargradient id="paint0_linear" x1="-30.2098" y1="414" x2="1076.2" y2="412.898" gradientunits="userSpaceOnUse">
              <stop offset="0" stop-color="#323436"></stop>
              <stop offset="1" stop-color="#282A2D"></stop>
          </lineargradient>
      </defs>
  </svg>
</div>
<div class="swiper-wrapper">
    <div class="swiper-slide section-lg">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between flex-md-row-reverse">
          <div class="col-8 col-md-5 col-lg-7 text-right"><img src="media/image-01-827x730.png" alt="" width="827" height="730">
          </div>
          <div class="col-md-7 col-lg-5 col-xxl-4">
            <h1>#1 Everyday Application</h1>
            <div class="offset-xxs">
              <!-- <p class="biggest">Welcome to Neon, an award-winning & easy-to-use mobile application that revolutionizes your daily work tasks.</p> -->
          </div>
          <div class="offset-sm">
              <button class="btn" data-modal-trigger='{"target":"#modal-login"}'>Start Using for Free</button>
          </div>
      </div>
  </div>
</div>
</div>
<div class="swiper-slide section-lg">
  <div class="container">
    <div class="row align-items-center justify-content-lg-between flex-md-row-reverse">
      <div class="col-7 col-md-5 col-xxl-7 text-center"><img class="ml-xxl-4" src="media/image-02-573x615.png" alt="" width="573" height="615">
      </div>
      <div class="col-md-7 col-lg-6 col-xxl-4">
        <h1>Do More with Hashtag</h1>
        <div class="offset-xxs">
          <!-- <p class="biggest">Our app was designed to let you manage your time more effectively. Also, it is a great personal companion for every smartphone user.</p> -->
      </div>
      <div class="offset-sm">
          <button class="btn" data-modal-trigger='{"target":"#modal-login"}'>Start Using for Free</button>
      </div>
  </div>
</div>
</div>
</div>
<div class="swiper-slide section-lg">
  <div class="container">
    <div class="row align-items-center justify-content-md-between flex-md-row-reverse">
      <div class="col-5 col-md-4 col-lg-4 col-xxl-7 text-center"><img class="mb-xxl-3" src="media/image-03-451x630.png" alt="" width="451" height="630">
      </div>
      <div class="col-md-7 col-lg-6 col-xxl-4">
        <h1>Awesome Features</h1>
        <div class="offset-xxs">
          <!-- <p class="biggest">Neon delivers high performance and a variety of features that you’ll surely appreciate even if you use a budget-class device.</p> -->
      </div>
      <div class="offset-sm">
          <button class="btn" data-modal-trigger='{"target":"#modal-login"}'>Start Using for Free</button>
      </div>
  </div>
</div>
</div>
</div>
</div>
<div class="swiper-pagination" data-pagination-ordered=""></div>
</div>
</section>
<!-- Features-->
<section class="section section-lg">
    <div class="container">
      <div class="d-md-flex align-items-md-center">
        <h2>How it work</h2>
        <p class="biggest mt-md-0 ml-md-4 border-md-left pl-md-3">Quick and Intuitive #HASHTAG generator</p>
    </div>
    <div class="offset-xl blurb-hovered">
        <div class="row row-30 row-lg-0">
          <div class="col-md-6 col-lg-3">
            <div class="blurb-hovered-item">
                <!-- Blurb boxed-->
                <article class="blurb blurb-boxed">
                  <div class="media media-sm flex-lg-column flex-xxl-row">
                    <div class="media-left">
                      <div class="blurb-embed"><span class="icon icon-round icon-md icon-primary icon-style-3 font-weight-medium">01</span></div>
                  </div>
                  <div class="media-body">
                      <div class="blurb-title h5">Select Image</div>
                      <!-- <div class="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> -->
                  </div>
              </div>
          </article>
      </div>
  </div>
  <div class="col-md-6 col-lg-3">
    <div class="blurb-hovered-item">
        <!-- Blurb boxed-->
        <article class="blurb blurb-boxed">
          <div class="media media-sm flex-lg-column flex-xxl-row">
            <div class="media-left">
              <div class="blurb-embed"><span class="icon icon-round icon-md icon-primary icon-style-3 font-weight-medium">02</span></div>
          </div>
          <div class="media-body">
              <div class="blurb-title h5">Upload Image</div>
              <!-- <div class="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> -->
          </div>
      </div>
  </article>
</div>
</div>
<div class="col-md-6 col-lg-3">
    <div class="blurb-hovered-item">
        <!-- Blurb boxed-->
        <article class="blurb blurb-boxed">
          <div class="media media-sm flex-lg-column flex-xxl-row">
            <div class="media-left">
              <div class="blurb-embed"><span class="icon icon-round icon-md icon-primary icon-style-3 font-weight-medium">03</span></div>
          </div>
          <div class="media-body">
              <div class="blurb-title h5">Image will be Processed </div>
              <!-- <div class="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> -->
          </div>
      </div>
  </article>
</div>
</div>
<div class="col-md-6 col-lg-3">
    <div class="blurb-hovered-item">
        <!-- Blurb boxed-->
        <article class="blurb blurb-boxed">
          <div class="media media-sm flex-lg-column flex-xxl-row">
            <div class="media-left">
              <div class="blurb-embed"><span class="icon icon-round icon-md icon-primary icon-style-3 font-weight-medium">04</span></div>
          </div>
          <div class="media-body">
              <div class="blurb-title h5">#HASHTAG generated</div>
              <!-- <div class="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> -->
          </div>
      </div>
  </article>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Features-->
<section class="section section-lg" id="features">
    <div class="container">
        <div class="row row-30 align-items-center">
            <div class="col-lg-6 col-xl-6 col-xxl-6">
                <div class="col-xs-12">
                    <div class="form-group">
                        <img id="img" src="media/image-06-549x597.png" height="500" width="500" style="object-fit: cover;">
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-xl-6 col-xxl-6">
                <div class="row row-30 align-items-center">
                    <div class="col-lg-8">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <input class="form-control" type="file" onchange="readURL(this);">
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <br>
                            <div class="form-group">
                                <button class="btn btn-block" onclick="load();">Generate #HASHTAG</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="d-sm-flex align-items-sm-center col-lg-12" data-animate='{"class":"fadeInLeft"}'>
                        <h2>#HASHTAG's</h2>
                        <!-- <p class="mt-sm-0 ml-sm-4 border-sm-left pl-sm-3">Just upload the post rest leave it on us</p> -->
                    </div>
                    <div id="img-hashtag" class="d-flex col-lg-12">
                        <a class="btn pl-1" href="#"><span class="btn-icon icon icon-round icon-sm icon-primary icon-style-3 mdi-pound"></span><span>AWESOMESITE</span></a>
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>
<!-- Get in touch-->
<section class="section section-lg" id="contacts">
    <div class="container">
      <div class="row row-30 align-items-xl-center justify-content-xxl-between">
        <div class="col-lg-6">
          <h2>Get in Touch</h2>
          <!-- <p class="bigger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing.</p> -->
          <form>
            <div class="row row-30">
              <div class="col-xs-6">
                <div class="form-group">
                  <input class="form-control" type="text" name="name" placeholder="Your name *" data-constraints="@Required">
              </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <input class="form-control" type="email" name="email" placeholder="Your e-mail address *" data-constraints="@Email @Required">
          </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <textarea class="form-control" name="question" placeholder="Your question" rows="5" data-constraints="@Required"></textarea>
      </div>
  </div>
</div>
<div class="offset-sm group-40 d-flex flex-wrap flex-xs-nowrap align-items-center">
  <button class="btn" type="submit">Submit</button>
  <!-- Checkbox-->
  <!-- <div class="custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" id="check1">
      <label class="custom-control-label" for="check1">Lorem ipsum dolor sit amet, consectetur adipiscing.
      </label>
  </div> -->
</div>
</form>
</div>
<div class="col-lg-6 col-xxl-5">
  <div class="box px-xl-3 px-xxl-4">
    <div class="row row-30">
        <div class="col-md-12 col-lg-12 col-xl-12">
            <h4>Get The App:</h4>
            <div class="group-30 offset-sm justify-content-between">
                <a class="btn pl-1" href="#">
                    <span class="btn-icon icon icon-round icon-sm icon-primary icon-style-3 mdi-apple"></span>
                    <span>Apple Store</span>
                </a>
                <a class="btn pl-1" href="#">
                    <span class="btn-icon icon icon-round icon-sm icon-primary icon-style-3 mdi-google-play"></span>
                    <span>Google Play</span>
                </a>
            </div>
        </div>
    <!-- <div class="col-md-6 col-lg-12 col-xl-6">
        <h4>Contacts:</h4>
        <table class="table table-sm table-responsive-xl table-no-bordered bigger">
          <tbody>
            <tr>
              <td class="text-right text-600 pl-0 align-middle">Ph.</td>
              <td class="biggest"><a class="link-inherit" href="tel:#">1-800-901-234</a></td>
          </tr>
          <tr>
              <td class="text-right text-600 pl-0">Mail.</td>
              <td><a class="link-inherit" href="mailto:#">info@demolink.org</a></td>
          </tr>
          <tr>
              <td class="text-right text-600 pl-0">Office.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          </tr>
      </tbody>
  </table>
</div> -->
</div>
<hr class="divider">
<div class="group-20 d-flex flex-wrap align-items-center justify-content-between">
  <div>
      <!-- List social-->
      <ul class="list list-social">
        <li class="list-social-item"><a class="icon icon-circle icon-md icon-style-1 mdi-facebook" href="#"></a></li>
        <li class="list-social-item"><a class="icon icon-circle icon-md icon-style-1 mdi-twitter" href="#"></a></li>
        <li class="list-social-item"><a class="icon icon-circle icon-md icon-style-1 mdi-youtube-play" href="#"></a></li>
    </ul>
</div>
<div>
  <!-- Copyright-->
  <p class="rights bigger"><span>&copy; 2021.&nbsp;</span><span>#HASHTAG</span><span>. All rights reserved</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="form-output snackbar snackbar-secondary" id="form-output-global"></div>
</section>
<script>
  // Notice there is no 'import' statement. 'cocoSsd' and 'tf' is
  // available on the index-page because of the script tag above.
  console.log(cocoSsd);
  const img = document.getElementById('img');
  console.log(img);
  // var image = tf.fromPixels(canvas, 1);
 // img.reshape([1, 28, 28]);
 function load(){
    cocoSsd.load().then(model => {
        const img = document.getElementById('img');
    // detect objects in the image.
    model.detect(img).then(predictions => {
        var data = "";
        $("#img-hashtag").empty();
        $.each(predictions, function(key, value){
            // data += "Object : "+value.class+ ",    Score : "+value.score+"<br>";
            data = '<a class="btn pl-1" href="#"><span class="btn-icon icon icon-round icon-sm icon-primary icon-style-3 mdi-pound"></span><span>'+value.class.toUpperCase()+'</span></a>';
            $("#img-hashtag").append(data);
        });

        console.log('data', data);


        // alert(data);

        console.log('Predictions: ', predictions);
    });
});
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img')
            .attr('src', e.target.result)
            .width(500)
            .height(500);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

</script>
@endsection
