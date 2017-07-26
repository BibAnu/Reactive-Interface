import { UtilityService } from './../utility/utility-service';

export class AboutController {

    constructor() {
        this.utilityData = {};
        this.utility = new UtilityService();
        this.getUtlityData();
    }

    getUtlityData(){
        this.utilityData = this.utility.getUtlityData();
    }
    
    //display header for about us page
    loadAboutHeader() {
        document.getElementById('main-container').innerHTML = `<div class="undermenuarea">
        <div class="boxedshadow">
        </div>
        <div class="grid">
        <div class="row">
        <div class="c8">
        <h1 class="titlehead">About Us</h1>
        </div>
        <div class="c4">
        <h1 class="titlehead rightareaheader"><i class="icon-map-marker"></i> Call Us Now ${ this.utilityData.contactNumber }</h1>
        </div>
        </div>
        </div>
        </div>`
    }

    //display content of about us
    loadAboutContent() {
        document.getElementById('main-container').innerHTML += `
        <div class="grid">
        <div class="shadowundertop"></div>
        <div class="row">
        <div class="c12">
        <h1 class="maintitle ">
        <span>OUR HISTORY</span>
        </h1>
        ${ this.utilityData.aboutContent }
        </div>
        </div>
        </div>`
    }
}

