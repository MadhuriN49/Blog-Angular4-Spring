import { Component,OnInit } from '@angular/core';
import {AddMoreService} from './addMore.service';
import { NavService } from '../nav/nav.service';  
import {Dashboard} from '../dashboard/dashboard';
import { DataService } from '../data.service';

@Component({
    moduleId : module.id,
    selector : "DataService",
    templateUrl : "./addMore.html"  
})

export class AddMoreComponent implements OnInit{
    constructor (private navService: NavService,
                 private dataService : DataService ){};
    newObj : any = {} ;
    dashboard = new Dashboard;
    ngOnInit(){
        if(this.dataService.loggedStatus() == true){
            sessionStorage.getItem('loggedInUser');
           }
           else{
            sessionStorage.setItem('loggedInUser', '');
            window.location.href = "login";
            }
        this.navService.show();
    }

    addMore( dashboard : Dashboard){
        console.log(this.dashboard);
        dashboard.datePosted = new Date().getDate() + " / "  + (new Date().getMonth() + 1) + " / " + new Date().getFullYear() ;
        this.dataService.createAuthor( dashboard ) ;
        
        //this.addMoreObjs.push(this.newObj);
       // localStorage.setItem("addMore", JSON.stringify(this.addMoreObjs));
       // sessionStorage.setItem("addMore", JSON.stringify(this.addMoreObjs));

       
    }
}