import { HomeTestimonial } from './../home/home-service';
import { MoreServices, WhyChooseUs } from './services-service';
import { UtilityService } from './../utility/utility-service';

export class ServicesController {

	constructor() {
		this.testimonials = [];
		this.featureServices = [];
		this.faqs = [];
		this.utilityData = {};
		this.mainContainer;
		this.homeTestimonial = new HomeTestimonial();
		this.moreServices = new MoreServices();
		this.whyChooseUs = new WhyChooseUs();
		this.utility = new UtilityService();
		this.getTestimonialDatas();
		this.getFeatureServices();
		this.getWhyChooseUsData();
		this.getUtlityData();
	}

	getTestimonialDatas(){
		this.testimonials = this.homeTestimonial.getTestimonialDatas();
	}

	getFeatureServices(){
		this.featureServices = this.moreServices.getFeatureServices();
	}

	getWhyChooseUsData(){
		this.faqs = this.whyChooseUs.getWhyChooseUsData();
	}

	getUtlityData(){
        this.utilityData = this.utility.getUtlityData();
    }

    //append services page header to mainContainer variable
	loadServicesHeader() {
		this.mainContainer = `<div class="undermenuarea">
		<div class="boxedshadow">
		</div>
		<div class="grid">
		<div class="row">
		<div class="c8">
		<h1 class="titlehead">Services</h1>
		</div>
		<div class="c4">
		<h1 class="titlehead rightareaheader"><i class="icon-map-marker"></i> Call Us Now ${ this.utilityData.contactNumber }</h1>
		</div>
		</div>
		</div>
		</div>`
	}

	//append content of services page to mainContainer variable
	loadServicesContent() {
		this.mainContainer += `<div class="grid"><div class="shadowundertop"></div>
		<div class="row">
		<!-- MAIN ACTIVITY-->
		<div class="c8">
		<h1 class="maintitle">
		<span>Our main activity</span>
		</h1>
		${ this.utilityData.servicesContent }
		</div>`
	}

	//append testimoial datas into mainContainer variable
	loadTestimonialData(){
		let testimonialHtml = `<div class="c4">
		<h1 class="maintitle">
		<span>Clients say</span>
		</h1>
		<div id="testimonials">`;
		this.testimonials.forEach(testimonial => {
			testimonialHtml += `<div>
			<div class="testimonial">
			"${ testimonial.testimonialDescription }"
			</div>
			<div class="author-wrapper">
			<div class="arrow">
			</div>
			<div class="testimonial-name">
			${ testimonial.testimonialName } <br><span>${ testimonial.testimonialType }</span>
			</div>
			</div>
			</div>`
		}, this);
		this.mainContainer += testimonialHtml + `</div></div></div>`;
	}

	//append features contents to mainContainer variable
	loadFeatureServices(){
		let featureServiceHtml = `<div class="row space-top">
		<!-- BEGIN SERVICES-->
		<div class="c8 text-center">
		<h1 class="maintitle text-center">
		<span>More Services</span>
		</h1>`;
		this.featureServices.forEach(featureService =>{
			featureServiceHtml +=`<div class="c4">
			<h1 class="subtitles">
			<span class="serviceicon"><i class="${ featureService.serviceIcon } rotate"></i></span><br/>
			${ featureService.serviceTitle } </h1>
			<p>${ featureService.serviceDetail }</p>
			</div>`
		}, this);
		this.mainContainer += featureServiceHtml + `</div>`;
	}

	//append Why Choose us contents to mainContainer variable
	loadWhyChooseUs(){
		let whyChooseUsHtml = `<div class="c4">
		<h1 class="maintitle">
		<span>Why choose us</span>
		</h1>
		<dl class="faqs nopadding noborder">`;
		this.faqs.forEach(faq =>{
			whyChooseUsHtml +=`<dt>${ faq.title }</dt>
			<dd style="display: none;">${ faq.discription }</dd>`
		}, this);
		this.mainContainer += whyChooseUsHtml + `</dl></div></div></div>`;
	}

    //display value of mainContainer in Html
	getMainContainter(){
		document.getElementById('main-container').innerHTML = this.mainContainer;
	}

}

