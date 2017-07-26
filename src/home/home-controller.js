import { HomeService, HomeTestimonial, HomeUnderSlider, HomeFeatures } from './home-service'; 
import { UtilityService } from './../utility/utility-service';

export class HomeController {

    constructor() {
        this.homeSliders = [];
        this.testimonials = [];
        this.underSliders = [];
        this.features = [];
        this.utilityData = {};
        this.mainContainer = document.getElementById('main-container');
        this.homeService = new HomeService();
        this.homeTestimonial = new HomeTestimonial();
        this.homeUnderSlider = new HomeUnderSlider();
        this.homeFeatures = new HomeFeatures();
        this.utility = new UtilityService();
        this.getHomeSliderDatas();
        this.getTestimonialDatas();
        this.getUnderSliderDatas();
        this.getHomeFeatureDatas();
        this.getUtlityData();
    }

    getHomeSliderDatas() {
        this.homeSliders = this.homeService.getHomeSliderDatas();
    }

    getTestimonialDatas(){
        this.testimonials = this.homeTestimonial.getTestimonialDatas();
    }

    getUnderSliderDatas(){
        this.underSliders = this.homeUnderSlider.getUnderSliderDatas();

    }

    getHomeFeatureDatas(){
        this.features = this.homeFeatures.getHomeFeatureDatas();
    }

    getUtlityData(){
        this.utilityData = this.utility.getUtlityData();
    }

    //display homepage slider
    loadHomeSliderData() {
        let homeSliderHtml = `<div class="undermenuarea"><div class="boxedshadow"></div><div id="da-slider" class="da-slider">`;
        this.homeSliders.forEach(homeSlider => {
            homeSliderHtml += `<div class="da-slide">
            <h2> ${ homeSlider.sliderHead } </h2>
            <p>
            ${ homeSlider.sliderDescription }
            </p>
            <a id="${ homeSlider.sliderLink }" href="javascript:;" class="da-link" style="width:202px;">${ homeSlider.sliderBtn }</a>
            <div class="da-img">
            <img src="${ homeSlider.sliderImg }" alt="">
            </div>
            </div>`

        }, this);
        this.mainContainer.innerHTML = homeSliderHtml + `</div></div>`;
    }

    //display home page black area
    loadUnderSliderData(){
        let underSliderHtml = `<div class="undersliderblack">
        <div class="grid">
        <div class="row space-bot">
        <div class="c12">`;
        this.underSliders.forEach(underSlider => {
            underSliderHtml += `<div class="c4 introbox ${ underSlider.boxPosition}">
            <div class="introboxinner">
            <span class="homeicone">
            <i class="${ underSlider.underSliderIcon }"></i>
            </span> ${ underSlider.underSliderText }
            </div>
            </div>`
        }, this);
        this.mainContainer.innerHTML += underSliderHtml + `</div></div></div></div><div class="shadowunderslider"></div>`;
    }

    //display home page features box
    loadFeatureData(){
        let featureHtml = `<div class="grid">
        <div class="row space-bot">
        <div class="c12">
        <div class="royalcontent">
        <h1 class="royalheader">${ this.utilityData.homeTitle }</h1>
        <h1 class="title" style="text-transform:none;">${ this.utilityData.homeSubTitle }</h1>
        </div>
        </div>`
        this.features.forEach(feature => {
            featureHtml += `<div class="c4">
                <h2 class="title hometitlebg"><i class="${ feature.homeFeatureIcon } smallrightmargin"></i> ${ feature.homeFeatureTitle }</h2>
                <div class="noshadowbox">
                    <p>
                        ${ feature.homeFeatureDetail }
                    </p>
                </div>
            </div>`
        }, this);
        this.mainContainer.innerHTML += featureHtml + `</div></div>`;
    }

    //display testimonial in homepage
    loadTestimonialData(){
        let testimonialHtml = `<div class="grid"><div class="row space-bot"><div class="c12"><div id="testimonials" class="wrapaction">`;
        this.testimonials.forEach(testimonial => {
            testimonialHtml += `<div>
            <div class="c9 testimonial">
            "${ testimonial.testimonialDescription }"
            </div>
            <div class="c3 text-center" style="margin-top:20px;">
            <div class="testimonial-name">
            ${ testimonial.testimonialName } <br><span>${ testimonial.testimonialType }</span>
            </div>
            </div>
            </div>`
        }, this);
        this.mainContainer.innerHTML += testimonialHtml + `</div></div></div></div>`;
    }
}

