import { UtilityService } from './../utility/utility-service';
import { ProductsService } from './products-service';

export class ProductsController {

    constructor() {
        this.products = [];
        this.utilityData = {};
        this.maincontainer;
        this.productsservice = new ProductsService();
        this.utility = new UtilityService();
        this.getUtlityData();
        this.getProducts();
    }

    getProducts() {
        this.products = this.productsservice.getProducts();
    }

    getUtlityData(){
        this.utilityData = this.utility.getUtlityData();
    }

    //append products page header to mainContainer variable
    loadProductHeader(){
        this.mainContainer = `<div class="undermenuarea">
        <div class="boxedshadow">
        </div>
        <div class="grid">
        <div class="row">
        <div class="c8">
        <h1 class="titlehead">Our Products</h1>
        </div>
        <div class="c4">
        <h1 class="titlehead rightareaheader"><i class="icon-map-marker"></i> Call Us Now ${ this.utilityData.contactNumber }</h1>
        </div>
        </div>
        </div>
        </div>`
    }

    //append products to mainContainer variable
    loadProduct(){
        let productHtml = `<div class="grid">
        <div class="shadowundertop">
        </div>
        <!-- begin categories -->
        <div class="row space-bot">
        <div class="c12">
        <h1 class="maintitle space-top">
        <span>EXPLORE OUR WORK</span>
        </h1>
        <div id="nav">
        <ul class="option-set">
        <li><a href="javascript:;" data-filter="*" class="selected">Show All</a></li>
        <li><a href="javascript:;" data-filter=".Web">Web</a></li>
        <li><a href="javascript:;" data-filter=".Mobile">Mobile</a></li>
        </ul>
        </div>
        </div>
        </div>
        <div class="row space-top">
        <div id="content">`;
        this.products.forEach(product => {
            productHtml += `<div class="boxthreecolumns ${ product.productCategory }">
            <div class="boxcontainer">
            <div class="mosaic-block cover">
            <div class="mosaic-overlay">
            <img src="${ product.productImageSrc }" alt="">
            </div>
            <a href="singleproject.html" target="_blank" class="mosaic-backdrop blue">
            <div class="details">
            <b>${ product.productDis }</b>
            <p>
            ${ product.productSubDis }
            </p>
            <i class="icon-link mosaiclink"></i>
            </div>
            </a>
            </div>
            <h1>${ product.productTitle }</h1>
            <p>
            ${ product.productSubTitle }
            </p>
            </div>
            </div>
            `
        }, this);
        this.mainContainer += productHtml + `</div></div></div>`;
    }

    //display value of mainContainer in Html
    getMainContainter(){
        document.getElementById('main-container').innerHTML = this.mainContainer;
    }

}