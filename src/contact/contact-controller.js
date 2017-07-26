import { UtilityService } from './../utility/utility-service';

export class ContactController {

    constructor() {
        this.utilityData = {};
        this.utility = new UtilityService();
        this.mainContainer = document.getElementById('main-container');
        this.getUtlityData();
    }

    getUtlityData(){
        this.utilityData = this.utility.getUtlityData();
    }

    //display contacts page header
    loadContactHeader() {
        this.mainContainer.innerHTML = `<div class="undermenuarea">
        <div class="boxedshadow">
        </div>
        <div class="grid">
        <div class="row">
        <div class="c8">
        <h1 class="titlehead">Contact Us</h1>
        </div>
        <div class="c4">
        <h1 class="titlehead rightareaheader"><i class="icon-map-marker"></i> Call Us Now ${ this.utilityData.contactNumber }</h1>
        </div>
        </div>
        </div>
        </div>`
    }

    //display content of contact page
    loadContactContent(){
        this.mainContainer.innerHTML += `<div class="grid"><div class="shadowundertop"></div>
        <div class="row space-bot">
        <div class="c12">   
        <iframe class="gmap" src="${ this.utilityData.contactMapSrc }" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        </div>
        <div class="row space-top">
        <!-- CONTACT FORM -->
        <div class="c8 space-top">
        <h1 class="maintitle">
        <span><i class="icon-envelope-alt"></i> Get in Touch</span>
        </h1>
        <div class="wrapcontact">
        <div class="done">
        <div class="alert-box success ctextarea">
        Your message has been sent. Thank you! <a href="" class="close">x</a>
        </div>
        </div>
        <form method="post" action="./js/contact.php" id="contactform">
        <div class="form">
        <div class="c6 noleftmargin">
        <label>Name</label>
        <input type="text" name="name">
        </div>
        <div class="c6 noleftmargin">
        <label>E-mail address</label>
        <input type="text" name="email">
        </div>
        <label>Message</label>
        <textarea name="comment" class="ctextarea" rows="9"></textarea>
        <input type="submit" id="submit" class="button" style="font-size:12px;" value="SUBMIT">
        </div>
        </form>
        </div>
        </div>
        <div class="c4 space-top">
        <h1 class="maintitle">
        <span><i class="icon-map-marker"></i> Locations</span>
        </h1>
        <p>
        <a class="link-2" href="javascript:;"><h3>Reactive Interface</h3></a>
        </p>
        <dl>
        <dt>${ this.utilityData.contactAddress }</dt>
        <dd><span>Telephone:</span>${ this.utilityData.contactNumber }</dd>
        <dd><span>FAX:</span>${ this.utilityData.contactFax }</dd>
        <dd>E-mail: <a href="mailto:${ this.utilityData.contactEmail }">${ this.utilityData.contactEmail }</a></dd>
        </dl>

        </div>
        </div>
        </div>`;
    }
}

