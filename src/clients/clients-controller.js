import { ClientsService } from './clients-service';
import { UtilityService } from './../utility/utility-service';

export class ClientsController {

    constructor() {
        this.clients = [];
        this.utilityData = {};
        this.mainContainer = document.getElementById('main-container');
        this.clientsService = new ClientsService();
        this.utility = new UtilityService();
        this.getClients();
        this.getUtlityData();
    }

    getClients(){
        this.clients = this.clientsService.getClients();
    }

    getUtlityData(){
        this.utilityData = this.utility.getUtlityData();
    }

    //display clients page header
    loadClientsHeader() {
        this.mainContainer.innerHTML = `<div class="undermenuarea">
        <div class="boxedshadow">
        </div>
        <div class="grid">
        <div class="row">
        <div class="c8">
        <h1 class="titlehead">Our clients</h1>
        </div>
        <div class="c4">
        <h1 class="titlehead rightareaheader"><i class="icon-map-marker"></i> Call Us Now ${ this.utilityData.contactNumber }</h1>
        </div>
        </div>
        </div>
        </div>`
    }

    //display clients logo
    loadClientData(){
        let clientHtml = `<div class="grid">
        <div class="shadowundertop">
        </div>
        <!-- begin categories -->
        <div class="row space-top">
        <div class="c12 space-top">
        <h1 class="maintitle">
        <span>Clients</span>
        </h1>
        </div>
        </div>
        <div class="row">
        <div class="c12">
        <div class="list_carousel">
        <div class="carousel_nav">
        <a class="prev" id="car_prev" href="#"><span>prev</span></a>
        <a class="next" id="car_next" href="#"><span>next</span></a>
        </div>
        <div class="clearfix">
        </div>
        <ul id="recent-projects">`;
        this.clients.forEach(client => {
            clientHtml += `<li>
            <div class="featured-projects clientslogo">
            <div class="featured-projects-image">
            <img src="${ client.clientLogoSrc }" class="imgOpa" alt="">
            </div>
            </div>
            </li>`
        }, this);
        this.mainContainer.innerHTML += clientHtml + `</ul>
        <div class="clearfix">
        </div>
        </div>
        </div>
        </div>
        </div>`;
    }
}

