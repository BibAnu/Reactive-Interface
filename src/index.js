//importing all controllers
import { HomeController } from './home/home-controller'
import { AboutController } from './about/about-controller'
import { ServicesController } from './services/services-controller'
import { TeamController } from './team/team-controller'
import { ProductsController } from './products/products-controller'
import { ClientsController } from './clients/clients-controller'
import { ContactController } from './contact/contact-controller'
import { Settings } from './settings/settings'

//display home page at start
showHome();

//event listers to change contents as per navigation bar click
document.getElementById('navHome').addEventListener("click", showHome);
document.getElementById('navAboutUs').addEventListener("click", showAbout);
document.getElementById('navServices').addEventListener("click", showServices);
document.getElementById('navTeam').addEventListener("click", showTeam);
document.getElementById('navProducts').addEventListener("click", showProducts);
document.getElementById('navClients').addEventListener("click", showClients);
document.getElementById('navContact').addEventListener("click", showContact);

function showHome() {
	var sh = new HomeController();
	var shc = new ClientsController();
	var set = new Settings();
	clearNav();
	sh.loadHomeSliderData();
	sh.loadUnderSliderData();
	sh.loadFeatureData();
	shc.loadClientData();
	sh.loadTestimonialData();
	document.getElementById('navHome').className = "active";
	set.homeSlider();
	set.clientsShowcaseFunction();
	set.showcaseOpacity();
	set.testimonialsInitialise();
}

function showAbout() {
	var sa = new AboutController();
	clearNav();
	sa.loadAboutHeader();
	sa.loadAboutContent();
	document.getElementById('navAbout').className = "active";
}

function showServices() {
	var ss = new ServicesController();
	var set = new Settings();
	clearNav();
	ss.loadServicesHeader();
	ss.loadServicesContent();
	ss.loadTestimonialData();
	ss.loadFeatureServices();
	ss.loadWhyChooseUs();
	ss.getMainContainter();
	document.getElementById('navAbout').className = "active";
	set.faqToogle();
	set.testimonialsInitialise();
}

function showTeam() {
	var st = new TeamController();
	clearNav();
	st.loadTeamHeader();
	st.loadTeamData();
	document.getElementById('navAbout').className = "active";
}

function showProducts() {
	var sp = new ProductsController();
	var set = new Settings();
	clearNav();
	sp.loadProductHeader();
	sp.loadProduct();
	sp.getMainContainter();
	document.getElementById('navProducts').className = "active";
	set.productsEffect();
}

function showClients() {
	var sc = new ClientsController();
	var set = new Settings();
	clearNav();
	sc.loadClientsHeader();
	sc.loadClientData();
	document.getElementById('navClients').className = "active";
	set.clientsShowcaseFunction();
	set.showcaseOpacity();
}

function showContact() {
	var sco = new ContactController();
	var set = new Settings();
	clearNav();
	sco.loadContactHeader();
	sco.loadContactContent();
	document.getElementById('navContact').className = "active";
	set.contactValidation();
}

//function to clear color of navigation button after change into other page
function clearNav(){
	document.getElementById('navHome').className = "none";
	document.getElementById('navAbout').className = "none";
	document.getElementById('navProducts').className = "none";
	document.getElementById('navClients').className = "none";
	document.getElementById('navContact').className = "none";
}