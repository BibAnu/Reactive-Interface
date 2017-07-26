import { TeamService } from './team-service';
import { UtilityService } from './../utility/utility-service';

export class TeamController {

    constructor() {
        this.teams = [];
        this.utilityData = {};
        this.mainContainer = document.getElementById('main-container');
        this.teamService = new TeamService();
        this.utility = new UtilityService();
        this.getUtlityData();
        this.getTeamDatas();
    }

    getTeamDatas(){
        this.teams = this.teamService.getTeamDatas();
    }

    getUtlityData(){
        this.utilityData = this.utility.getUtlityData();
    }

    //display our team page header
    loadTeamHeader() {
        this.mainContainer.innerHTML = `<div class="undermenuarea">
        <div class="boxedshadow">
        </div>
        <div class="grid">
        <div class="row">
        <div class="c8">
        <h1 class="titlehead">Our Team</h1>
        </div>
        <div class="c4">
        <h1 class="titlehead rightareaheader"><i class="icon-map-marker"></i> Call Us Now ${ this.utilityData.contactNumber }</h1>
        </div>
        </div>
        </div>
        </div>`
    }

    //display team contents
    loadTeamData(){
        let i = 0;
        let teamHtml = `<div class="grid">
        <div class="shadowundertop">
        </div>
        <div class="row space-top space-bot">
        <div class="c12">
        <h1 class="maintitle text-center">
        <span>Meet the Team</span>
        </h1>
        </div>`;
        this.teams.forEach(team => {
            //show 4 members in each row
            if(i==4){
                teamHtml += `</div><div class="row space-top space-bot">`;
                i = 0;
            }
            teamHtml += `<div class="c3" style="text-align:center;">
                <img src="${ team.teamImageSrc }" class="imgOpa teamimage" alt="">
                <div class="teamdescription">
                    <h1>${ team.teamName }</h1>
                    <span class="hirefor">${ team.teamPosition }</span>
                </div>
            </div>`
            i++;
        }, this);
        this.mainContainer.innerHTML += teamHtml + `</div></div>`;
    }
}

