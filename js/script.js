'use strict';

// Global components list
let components = window.components = {};

components.fonts = {
	selector: 'html',
	styles: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
};

components.mdi = {
	selector: '[class*="mdi"]',
	styles: './css/mdi.css'
};

components.grid = {
	selector: '.container, .container-fluid, .row, [class*="col-"]',
	styles: './css/grid.css'
};

components.block = {
	selector: '.block',
	styles: './css/block.css'
};

components.blurb = {
	selector: '.blurb',
	styles: [
		'./css/media.css',
		'./css/blurb.css'
	]
};

components.box = {
	selector: '.box',
	styles: './css/box.css'
};

components.button = {
	selector: '.btn, .btn-group',
	styles: './css/button.css'
};

components.divider = {
	selector: '.divider',
	styles: './css/divider.css'
};

components.form = {
	selector: '.form-group, .input-group, .form-check, .custom-control, .form-control',
	styles: './css/form.css'
};

components.formOutput = {
	selector: '.form-output',
	styles:   './css/form-output.css'
};

components.icon = {
	selector: '.icon',
	styles: './css/icon.css'
};

components.imageSvg = {
	selector: '.image-svg',
	styles: './css/image-svg.css'
};

components.list = {
	selector: '.list',
	styles: './css/list.css'
};

components.media = {
	selector: '.media',
	styles: './css/media.css'
};

components.partner = {
	selector: '.partner',
	styles: './css/partner.css'
};

components.post = {
	selector: '.post, .post-modern',
	styles: './css/post.css'
};

components.pricing = {
	selector: '.pricing, .pricing-modern',
	styles: './css/pricing.css'
};

components.quote = {
	selector: '.quote',
	styles: [
		'./css/media.css',
		'./css/quote.css'
	]
};

components.rights = {
	selector: '.rights',
	styles: './css/rights.css'
};

components.section = {
	selector: 'section',
	styles: './css/section.css'
};

components.snackbar = {
	selector: '.snackbar',
	styles: './css/snackbar.css'
};

components.table = {
	selector: '.table',
	styles: './css/table.css'
};

components.team = {
	selector: '.team, .team-mini',
	styles: './css/team.css'
};

components.video = {
	selector: '.video',
	styles: './css/video.css'
};

components.accordion = {
	selector: '.accordion',
	styles: './css/accordion.css',
	script: [
		'./js/jquery.min.js',
		'./js/current-device.min.js',
		'./js/multiswitch.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				items = node.querySelectorAll( '.accordion-item' ),
				click = device.ios() ? 'touchstart' : 'click';

			items.forEach( function ( item ) {
				let
					head = item.querySelector( '.accordion-head' ),
					body = item.querySelector( '.accordion-body' );

				MultiSwitch({
					node: head,
					targets: [ item, body ],
					isolate: node.querySelectorAll( '.accordion-head' ),
					state: item.classList.contains( 'active' ),
					event: click,
				});

				if ( !body.multiSwitchTarget.groups.active.state ) body.style.display = 'none';

				body.addEventListener( 'switch:active', function () {
					let $this = $( this );

					if ( this.multiSwitchTarget.groups.active.state ) {
						$this.stop().slideDown( 300 );
					} else {
						$this.stop().slideUp( 300 );
					}
				});
			});
		});
	}
};

components.animate = {
	selector: '[data-animate]',
	styles: './css/animate.css',
	script: './js/current-device.min.js',
	init: function ( nodes ) {
		let observer = new IntersectionObserver( function ( entries, observer ) {
			entries.forEach( function ( entry ) {
				let node = entry.target;

				if ( entry.isIntersecting ) {
					node.animationStart();
					observer.unobserve( node );
				}
			});
		});

		nodes.forEach( function ( node ) {
			let params = parseJSON( node.getAttribute( 'data-animate' ) );
			params.class = params.class ? [ 'animated' ].concat( params.class ) : [ 'animated' ];
			if ( params.delay ) { node.style.animationDelay = params.delay; }
			if ( params.duration ) { node.style.animationDuration = params.duration; }

			node.animationStart = ( function () {
				this.classList.add.apply( this.classList, params.class );
			}).bind( node );

			observer.observe( node );
		});
	}
};

components.countdown = {
	selector: '[data-countdown]',
	styles: './css/countdown.css',
	script: [
		'./js/progress-circle.min.js',
		'./js/countdown.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			new Countdown( strictMerge({
				node: node,
				from: null,
				to: null,
				count: 'auto',
				tick: 100
			}, parseJSON( node.getAttribute( 'data-countdown' ) ) ) );
		} )
	}
};

components.counter = {
	selector: '[data-counter]',
	styles: './css/counter.css',
	script: './js/counter.min.js',
	init: function ( nodes ) {
		let observer = new IntersectionObserver( function ( entries, observer ) {
			entries.forEach( function ( entry ) {
				let node = entry.target;

				if ( entry.isIntersecting ) {
					node.counter.run();
					observer.unobserve( node );
				}
			});
		}, {
			rootMargin: '0px',
			threshold: 1.0
		});

		nodes.forEach( function ( node ) {
			let counter = new bCounter( Object.assign( {
				node: node,
				duration: 1000,
				autorun: false
			}, parseJSON( node.getAttribute( 'data-counter' ) ) ) );

			if ( window.xMode ) {
				counter.run();
			} else {
				observer.observe( node );
			}
		})
	}
};

// TODO move to blurb component
components.currentDevice = {
	selector: 'html',
	script: './js/current-device.min.js'
};

components.fullpage = {
	selector: '.fullpage',
	styles: './css/fullpage.css',
	script: [
		'./js/jquery.min.js',
		'./js/fullpage.min.js',
		'./js/util.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				timerId = null,
				animationIsFinished = false,
				state = null,
				newState = null,
				defaults = {
					navigation: true,
					navigationPosition: 'left',
					easingcss3: 'ease-in',
				},
				mobile = {
					navigation: false,
					paddingTop: '60px'
				},
				resizeHandler = function () {
					if ( window.matchMedia("( min-width: 1200px )").matches ) {
						newState = 'desktop';
					} else {
						newState = 'mobile';
					}

					if ( state !== newState ) {
						if ( document.documentElement.classList.contains( 'fp-enabled' ) ) $.fn.fullpage.destroy( 'all' );
						state = newState;

						switch( state ) {
							case 'desktop':
								$( node ).fullpage( defaults );
								break;
							case 'mobile':
								$( node ).fullpage( Object.assign( defaults, mobile ) );
								break;
						}
					}
				};

			resizeHandler();
			window.addEventListener( 'resize', resizeHandler );
		});
	}
};

components.imageHover = {
	selector: '.image-hover',
	styles: './css/image-hover.css',
	script: [
		'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js',
		'./js/three.min.js',
		'./js/hover.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				img = node.querySelector( 'img' ),
				imgSrcFrom = img.getAttribute( 'src' ),
				imgSrcTo = img.getAttribute( 'data-image-to' );

			new hoverEffect({
				parent: node,
				intensity: -0.2,
				speedIn: 1.2,
				image1: imgSrcFrom,
				image2: imgSrcTo ? imgSrcTo : imgSrcFrom,
				displacementImage: 'components/image-hover/displacement/4.png'
			});
		});
	}
};

components.lightgallery = {
	selector: '[data-lightgallery]',
	styles: './css/lightgallery.css',
	script: [
		'./js/jquery.min.js',
		'./js/lightgallery.min.js'
	],
	init: function ( nodes ) {
		if ( !window.xMode ) {
			nodes.forEach( function ( node ) {
				let
					$node = $( node ),
					params = merge( {
						selector: 'this',
						hash: false
					}, parseJSON( $node.attr( 'data-lightgallery' ) ) );

				if ( params.dynamic ) {
					node.addEventListener( 'click', function () {
						$node.lightGallery( params );
					});
				} else {
					$node.lightGallery( params );
				}
			});
		}
	}
};

components.modalBtn = {
	selector: '[data-modal-trigger]',
	dependencies: 'modal',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let params = parseJSON( node.getAttribute( 'data-modal-trigger' ) );

			node.addEventListener( 'click', function () {
				let modal = document.querySelector( params.target );
				if ( modal.classList.contains( 'show' ) ) {
					$( modal ).modal( 'hide' );
				} else {
					$( modal ).modal( 'show' );
				}
			});
		});
	}
};

components.modal = {
	selector: '.modal',
	styles: './css/modal.css',
	script: [
		'./js/jquery.min.js',
		'./js/popper.min.js',
		'./js/bootstrap.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).modal({
				show: false,
				focus: false
			});
		});
	}
};

components.multiswitch = {
	selector: '[data-multi-switch]',
	styles: './css/multiswitch.css',
	script: [
		'./js/current-device.min.js',
		'./js/multiswitch.min.js'
	],
	dependencies: 'rdNavbar',
	init: function ( nodes ) {
		let click = device.ios() ? 'touchstart' : 'click';

		nodes.forEach( function ( node ) {
			if ( node.tagName === 'A' ) {
				node.addEventListener( click, function ( event ) {
					event.preventDefault();
				});
			}

			MultiSwitch( Object.assign( {
				node: node,
				event: click,
			}, parseJSON( node.getAttribute( 'data-multi-switch' ) ) ) );
		});
	}
};

components.nav = {
	selector: '.nav',
	styles: './css/nav.css',
	script: [
		'./js/jquery.min.js',
		'./js/popper.min.js',
		'./js/bootstrap.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).on( 'click', function ( event ) {
				event.preventDefault();
				$( this ).tab( 'show' );
			});

			$( node ).find( 'a[data-toggle="tab"]' ).on( 'shown.bs.tab', function () {
				window.dispatchEvent( new Event( 'resize' ) );
			});
		});
	}
};

components.owl = {
	selector: '.owl-carousel',
	styles: './css/owl.carousel.css',
	script: [
		'./js/jquery.min.js',
		'./js/owl.carousel.min.js',
		'./js/util.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				params = parseJSON( node.getAttribute( 'data-owl' ) ),
				defaults = {
					items: 1,
					margin: 30,
					loop: true,
					mouseDrag: true,
					stagePadding: 0,
					nav: false,
					navText: [],
					dots: false,
					autoplay: true,
					autoplayHoverPause: true
				},
				xMode = {
					autoplay: false,
					loop: false,
					mouseDrag: false
				};

			node.owl = $( node );

			let tmp = Util.merge( window.xMode ? [ defaults, params, xMode ] : [ defaults, params ] );

			$( node ).owlCarousel( tmp );
		});
	}
};

components.pageReveal = {
	selector: 'html',
	init: function( nodes ) {
		window.addEventListener( 'components:ready', function () {
			window.dispatchEvent( new CustomEvent( 'resize' ) );
			document.documentElement.classList.add( 'components-ready' );

			setTimeout( function() {
				document.documentElement.classList.add( 'page-loaded' );
			}, 300 );
		}, { once: true } );
	}
};

components.rdNavbar = {
	selector: '.rd-navbar',
	styles: './css/rd-navbar.css',
	script: [
		'./js/jquery.min.js',
		'./js/util.min.js',
		'./js/current-device.min.js',
		'./js/rd-navbar.min.js'
	],
	dependencies: 'currentDevice',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				backButtons = node.querySelectorAll( '.navbar-navigation-back-btn' ),
				params = parseJSON( node.getAttribute( 'data-rd-navbar' ) ),
				defaults = {
					stickUpClone: false,
					anchorNav: true,
					autoHeight: false,
					stickUpOffset: '1px',
					responsive: {
						0: {
							layout: 'rd-navbar-fixed',
							deviceLayout: 'rd-navbar-fixed',
							focusOnHover: 'ontouchstart' in window,
							stickUp: false
						},
						992: {
							layout: 'rd-navbar-fixed',
							deviceLayout: 'rd-navbar-fixed',
							focusOnHover: 'ontouchstart' in window,
							stickUp: false
						},
						1200: {
							layout: 'rd-navbar-fullwidth',
							deviceLayout: 'rd-navbar-fullwidth',
							stickUp: true,
							stickUpOffset: '1px'
						}
					},
					callbacks: {
						onStuck: function () {
							document.documentElement.classList.add( 'rd-navbar-stuck' );
						},
						onUnstuck: function () {
							document.documentElement.classList.remove( 'rd-navbar-stuck' );
						},
						onDropdownToggle: function () {
							if ( this.classList.contains( 'opened' ) ) {
								this.parentElement.classList.add( 'overlaid' );
							} else {
								this.parentElement.classList.remove( 'overlaid' );
							}
						},
						onDropdownClose: function () {
							this.parentElement.classList.remove( 'overlaid' );
						}
					}
				},
				xMode = {
					stickUpClone: false,
					anchorNav: false,
					responsive: {
						0: {
							stickUp: false,
							stickUpClone: false
						},
						992: {
							stickUp: false,
							stickUpClone: false
						},
						1200: {
							stickUp: false,
							stickUpClone: false
						}
					},
					callbacks: {
						onDropdownOver: function () { return false; }
					}
				},
				navbar = node.RDNavbar = new RDNavbar( node, Util.merge( window.xMode ? [ defaults, params, xMode ] : [ defaults, params ] ) );

			if ( backButtons.length ) {
				backButtons.forEach( function ( btn ) {
					btn.addEventListener( 'click', function () {
						let
							submenu = this.closest( '.rd-navbar-submenu' ),
							parentmenu = submenu.parentElement;

						navbar.dropdownToggle.call( submenu, navbar );
					});
				});
			}
		})
	}
};

components.slick = {
	selector: '.slick-slider',
	styles: './css/slick.css',
	script: [
		'./js/jquery.min.js',
		'./js/slick.min.js',
		'./js/util.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				defaults = {
					autoplay:  true,
					prevArrow: '<button type="button" class="slick-prev"></button>',
					nextArrow: '<button type="button" class="slick-next"></button>'
				},
				breakpoint = { xs: 480, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1600 }, // slick slider uses desktop first principle
				responsive = [],
				params;

			// Making responsive parameters
			for ( let key in breakpoint ) {
				if ( node.hasAttribute( 'data-slick-' + key ) ) {
					responsive.push({
						breakpoint: breakpoint[ key ],
						settings: parseJSON( node.getAttribute( 'data-slick-' + key ) )
					});
				}
			}

			params = {
				responsive: responsive
			};

			let tmp = Util.merge( [ defaults, params ] );

			$( node ).slick( tmp );

			// Filtering
			let links = document.querySelectorAll( '.slick-filter-link' );
			links.forEach( function( element ) {
				element.addEventListener( 'click', function () {
					let filter = element.getAttribute( 'data-filter' );
					$( node ).slick( 'slickUnfilter' );
					if( filter !== '*' ) {
						$( node ).slick( 'slickFilter', '[data-category="' + filter + '"]' );
					}
				});
			});
		});
	}
};

components.swiper = {
	selector: '.swiper-container',
	styles: [
		'./css/animate.css',
		'./css/swiper.css'
	],
	script: [
		'./js/swiper.min.js',
		'./js/swiper-progress-circle.min.js',
		'./js/util.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {

			// Pagination decimal leading zero
			function pad( number, length ) {
				let str = '' + number;
				while ( str.length < length ) {
					str = '0' + str;
				}

				return str;
			}

			/**
			 * Update of secondary numeric pagination
			 * @this {object}  - swiper instance
			 */
			function updSwiperNumericPagination() {
				if ( this.el.querySelector( '.swiper-counter' ) ) {
					this.el.querySelector('.swiper-counter')
							.innerHTML = '<span class="swiper-counter-count">' +  formatIndex((this.realIndex + 1)) + '</span><span class="swiper-counter-divider"></span><span class="swiper-counter-total">' + formatIndex((this.slides.length)) + '</span>';
				}
			}
			function formatIndex(index) {
				return index < 10 ? '0' + index : index;
			}

			let
				slides = node.querySelectorAll( '.swiper-slide[data-slide-bg]' ),
				animate = node.querySelectorAll( '.swiper-wrapper [data-caption-animate]' ),
				videos = node.querySelectorAll( '.swiper-wrapper video' ),
				pagOrdered = node.querySelector( '.swiper-pagination[data-pagination-ordered]' ),
				pagProgress = node.querySelector( '.swiper-pagination[data-pagination-progress]' ),
				progress,
				timer,
				params = merge({
					speed: 500,
					loop: true,
					autoHeight: false,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet: function ( index, className ) {
							return (
								'<span class="' + className + '">' +
								( pagOrdered ? pad( ( index + 1 ), 2 ) : '' ) +
								( pagProgress ?
									'<svg class="swiper-progress" x="0px" y="0px" width="100" height="100" viewbox="0 0 100 100">' +
									'<circle class="swiper-progress-bg" cx="50" cy="50" r="50"></circle>' +
									'<circle class="swiper-progress-dot" cx="50" cy="50" r="14"></circle>' +
									'<circle class="clipped" cx="50" cy="50" r="48"></circle>' +
									'</svg>' : '' ) +
								'</span>'
							)
						}
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					scrollbar: {
						el: '.swiper-scrollbar'
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: false
					},
					on: {

						init: updSwiperNumericPagination,
						slideChange: updSwiperNumericPagination,
						paginationUpdate: function() {
							if( pagProgress ) {
								let
									bullets = pagProgress.querySelectorAll( '.swiper-pagination-bullet' ),
									bulletActive = pagProgress.querySelector( '.swiper-pagination-bullet-active .swiper-progress' );

								progress = new aProgressCircle({ node: bulletActive });
								timer = new VirtualTimer({ onTick: function () {
									progress.render( this.progress / this.duration * 360 );
								}});

								timer.reset();
								timer.duration = this.originalParams.autoplay.delay - 100;
								timer.start();

								bullets.forEach( function( bullet ) {
									bullet.addEventListener( 'click', function() {
										timer.stop();
									} )
								} );
							}
						},
						sliderMove: function() {
							timer.stop();
							timer.reset();
						}
					}
				}, parseJSON( node.getAttribute( 'data-swiper' ) ) );

			// Specific params for Novi builder
			if ( window.xMode ) {
				params = merge( params, {
					autoplay: false,
					loop: false,
					simulateTouch: false
				});
			}

			// Set background image for slides with `data-slide-bg` attribute
			slides.forEach( function ( slide ) {
				slide.style.backgroundImage = 'url('+ slide.getAttribute( 'data-slide-bg' ) +')';
			});

			// Animate captions with `data-caption-animate` attribute
			if ( animate.length ) {
				if ( !params.on ) params.on = {};
				params.on.transitionEnd = function () {
					let
						active = this.wrapperEl.children[ this.activeIndex ],
						prev = this.wrapperEl.children[ this.previousIndex ];

					active.querySelectorAll( '[data-caption-animate]' ).forEach( function ( node ) {
						node.classList.add( node.getAttribute( 'data-caption-animate' ) );
						node.classList.add( 'animated' );
					});

					prev.querySelectorAll( '[data-caption-animate]' ).forEach( function ( node ) {
						node.classList.remove( node.getAttribute( 'data-caption-animate' ) );
						node.classList.remove( 'animated' );
					})
				}
			}

			// Stop video on inactive slides
			if ( videos.length ) {
				if ( !params.on ) params.on = {};
				params.on.transitionStart = function () {
					let
						active = this.wrapperEl.children[ this.activeIndex ],
						prev = this.wrapperEl.children[ this.previousIndex ];

					active.querySelectorAll( 'video' ).forEach( function ( video ) { if ( video.paused ) video.play(); });
					prev.querySelectorAll( 'video' ).forEach( function ( video ) { if ( !video.paused ) video.pause(); })
				}
			}

			// Initialization if there are related swipers
			if ( params.thumbs && params.thumbs.swiper ) {
				let target = document.querySelector( params.thumbs.swiper );

				if ( !target.swiper ) {
					target.addEventListener( 'swiper:ready', function () {
						params.thumbs.swiper = target.swiper;
						new Swiper( node, params );
						node.dispatchEvent( new CustomEvent( 'swiper:ready' ) );
					});
				} else {
					params.thumbs.swiper = target.swiper;
					new Swiper( node, params );
					node.dispatchEvent( new CustomEvent( 'swiper:ready' ) );
				}
			} else {
				new Swiper( node, params );
				node.dispatchEvent( new CustomEvent( 'swiper:ready' ) );
			}
		});
	}
};

components.regula = {
	selector: '[data-constraints]',
	styles: './css/regula.css',
	script: [
		'./js/jquery.min.js',
		'./js/regula.min.js'
	],
	init: function ( nodes ) {
		let elements = $( nodes );

		// Custom validator - phone number
		regula.custom({
			name: 'PhoneNumber',
			defaultMessage: 'Invalid phone number format',
			validator: function() {
				if ( this.value === '' ) return true;
				else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test( this.value );
			}
		});

		for (let i = 0; i < elements.length; i++) {
			let o = $(elements[i]), v;
			o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
			v = o.parent().find(".form-validation");
			if (v.is(":last-child")) o.addClass("form-control-last-child");
		}

		elements.on('input change propertychange blur', function (e) {
			let $this = $(this), results;

			if (e.type !== "blur") if (!$this.parent().hasClass("has-error")) return;
			if ($this.parents('.rd-mailform').hasClass('success')) return;

			if (( results = $this.regula('validate') ).length) {
				for (let i = 0; i < results.length; i++) {
					$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
				}
			} else {
				$this.siblings(".form-validation").text("").parent().removeClass("has-error")
			}
		}).regula('bind');

		let regularConstraintsMessages = [
			{
				type: regula.Constraint.Required,
				newMessage: "The text field is required."
			},
			{
				type: regula.Constraint.Email,
				newMessage: "The email is not a valid email."
			},
			{
				type: regula.Constraint.Numeric,
				newMessage: "Only numbers are required"
			},
			{
				type: regula.Constraint.Selected,
				newMessage: "Please choose an option."
			}
		];


		for (let i = 0; i < regularConstraintsMessages.length; i++) {
			let regularConstraint = regularConstraintsMessages[i];

			regula.override({
				constraintType: regularConstraint.type,
				defaultMessage: regularConstraint.newMessage
			});
		}
	}
};

components.tooltip = {
	selector: '[data-toggle="tooltip"]',
	styles: './css/tooltip.css',
	script: [
		'./js/jquery.min.js',
		'./js/popper.min.js',
		'./js/bootstrap.min.js'
	],
	init: function( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).tooltip();
		} );
	}
};

components.preloader = {
	selector: '.preloader',
	styles:   './css/preloader.css'
};

components.toTop = {
	selector: 'html',
	styles: './css/to-top.css',
	script: './js/jquery.min.js',
	init: function () {
		if ( !window.xMode ) {
			let node = document.createElement( 'div' );
			node.className = 'to-top mdi-chevron-up';
			document.body.appendChild( node );

			node.addEventListener( 'mousedown', function () {
				this.classList.add( 'active' );

				$( 'html, body' ).stop().animate( { scrollTop:0 }, 500, 'swing', (function () {
					this.classList.remove( 'active' );
				}).bind( this ));
			});

			document.addEventListener( 'scroll', function () {
				if ( window.scrollY > window.innerHeight ) node.classList.add( 'show' );
				else node.classList.remove( 'show' );
			});
		}
	}
};

/**
 * Wrapper to eliminate json errors
 * @param {string} str - JSON string
 * @returns {object} - parsed or empty object
 */
function parseJSON ( str ) {
	try {
		if ( str )  return JSON.parse( str );
		else return {};
	} catch ( error ) {
		console.warn( error );
		return {};
	}
}

/**
 * Get tag of passed data
 * @param {*} data
 * @return {string}
 */
function objectTag ( data ) {
	return Object.prototype.toString.call( data ).slice( 8, -1 );
}

/**
 * Merging of two objects
 * @param {Object} source
 * @param {Object} merged
 * @return {Object}
 */
function merge( source, merged ) {
	for ( let key in merged ) {
		let tag = objectTag( merged[ key ] );

		if ( tag === 'Object' ) {
			if ( typeof( source[ key ] ) !== 'object' ) source[ key ] = {};
			source[ key ] = merge( source[ key ], merged[ key ] );
		} else if ( tag !== 'Null' ) {
			source[ key ] = merged[ key ];
		}
	}

	return source;
}

/**
 * Strict merging of two objects. Merged only parameters from the original object and with the same data type. Merge only simple data types, arrays and objects.
 * @param source
 * @param merged
 * @return {object}
 */
function strictMerge( source, merged ) {
	for ( let key in source ) {
		let
			sTag = objectTag( source[ key ] ),
			mTag = objectTag( merged[ key ] );

		if ( [ 'Object', 'Array', 'Number', 'String', 'Boolean', 'Null', 'Undefined' ].indexOf( sTag ) > -1 ) {
			if ( sTag === 'Object' && sTag === mTag ) {
				source[ key ] = strictMerge( source[ key ], merged[ key ] );
			} else if ( mTag !== 'Undefined' && ( sTag === 'Undefined' || sTag === 'Null' || sTag === mTag ) ) {
				source[ key ] = merged[ key ];
			}
		}
	}

	return source;
}


// Main
window.addEventListener( 'load', function () {
	new ZemezCore({
		debug: true,
		components: components,
		observeDOM: window.xMode,
		IEHandler: function ( version ) {
			document.documentElement.classList.add( 'ie-'+ version );
		}
	});
});
