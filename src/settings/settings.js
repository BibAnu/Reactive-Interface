//extra js functions needed for operations

export class Settings{
	constructor(){

	}

	//homeSlider settings
	homeSlider(){
		//nav slider
		$('#da-slider').cslider({
			current		: 0,				// index of current slide
			bgincrement	: 50,				// increment the background position(parallax effect) when sliding
			autoplay	: false,			// slideshow on / off
			interval	: 4000  			// time between transitions
		});
	}

	//function to make clients carousel
	clientsShowcaseFunction(){
		//Call Showcase - change 4 from min:4 and max:4 to the number of items you want visible
		$(document).ready(function(){			
			$('#recent-projects').carouFredSel({
				responsive: true,
				width: '100%',
				auto: true,
				circular	: true,
				infinite	: false,
				prev : {
					button		: "#car_prev",
					key			: "left",
				},
				next : {
					button		: "#car_next",
					key			: "right",
				},
				swipe: {
					onMouse: true,
					onTouch: true
				},
				scroll : 500,
				items: {
					visible: {
						min: 2,
						max: 5
					}
				}
			});
		});	
	}

	//function to make opacity on hover images from carousel
	showcaseOpacity(){
		$(document).ready(function(){
			$("img.imgOpa").hover(function() {
				$(this).stop().animate({opacity: "0.6"}, 'slow');
			},
			function() {
				$(this).stop().animate({opacity: "1.0"}, 'slow');
			});
		});
	}

	//function to initialise testimonials
	testimonialsInitialise(){
		$(document).ready(function() {
			$('#testimonials')
			.before('<div id="nav">')
			.cycle({
				fx: 'fade'
			});
		});
	}

	//function to make why choose us toogleable
	faqToogle(){
		$(document).ready(function () {
			$('.faqs dd').hide(); // Hide all DDs inside .faqs
			$('.faqs dt').hover(function(){$(this).addClass('hover')},function(){$(this).removeClass('hover')}).click(function(){ // Add class "hover" on dt when hover
				$(this).next().slideToggle('normal'); // Toggle dd when the respective dt is clicked
			}); 
		});
	}

	//function to filter products using isotope
	productsEffect(){
		$(document).ready(function(){
			var $container = $('#content');
			$container.imagesLoaded( function(){
				$container.isotope({
					filter: '*',
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
			});
			$('#nav a').click(function(){
				var selector = $(this).attr('data-filter');
				$container.isotope({ 
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
				return false;
			});
			$('#nav a').click(function (event) {
				$('a.selected').removeClass('selected');
				var $this = $(this);
				$this.addClass('selected');
				var selector = $this.attr('data-filter');
				$container.isotope({
					filter: selector
				});
				return false; // event.preventDefault()
			});

			// Hover effects on products
			$('.cover').mosaic({
					animation	:	'slide',	//fade or slide
					hover_x		:	'578'		//Horizontal position on hover
				});	
		});
	}

	contactValidation(){
		$(document).ready(function() {

			//if submit button is clicked
			$('#submit').click(function () {		
				
				//Get the data from all the fields
				var name = $('input[name=name]');
				var email = $('input[name=email]');
				var regx = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
				var comment = $('textarea[name=comment]');
				var returnError = false;
				
				//Simple validation to make sure user entered something
				//Add your own error checking here with JS, but also do some error checking with PHP.
				//If error found, add hightlight class to the text field
				if (name.val()=='') {
					name.addClass('error');
					returnError = true;
				} else name.removeClass('error');
				
				if (email.val()=='') {
					email.addClass('error');
					returnError = true;
				} else email.removeClass('error');		
				
				if(!regx.test(email.val())){
					email.addClass('error');
					returnError = true;
				} else email.removeClass('error');
				
				
				if (comment.val()=='') {
					comment.addClass('error');
					returnError = true;
				} else comment.removeClass('error');
				
				// Highlight all error fields, then quit.
				if(returnError == true){
					return false;	
				}
				
				//organize the data
				
				var data = 'name=' + name.val() + '&email=' + email.val() + '&comment='  + encodeURIComponent(comment.val());

				//disabled all the text fields
				$('.text').attr('disabled','true');
				
				//show the loading sign
				$('.loading').show();
				
				//start the ajax
				$.ajax({
					//this is the php file that processes the data and sends email
					url: "./js/contact.php",	
					
					//GET method is used
					type: "GET",

					//pass the data			
					data: data,		
					
					//Do not cache the page
					cache: false,
					
					//success
					success: function (html) {				
						//if contact.php returned 1/true (send mail success)
						if (html==1) {

							//show the success message
							$('.done').fadeIn('slow');
							
							$(".form").find('input[type=text], textarea').val("");
							
						//if contact.php returned 0/false (send mail failed)
						} else alert('Sorry, unexpected error. Please try again later.');				
					}		
				});
				//cancel the submit button default behaviours
				return false;
			});	
		});	
	}

}