import { Component,OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';
import { NavService } from '../nav/nav.service';
import { DataService } from '../data.service';

@Component({  
    moduleId : module.id,
    selector : "DataService",
    templateUrl : "./readStory.html" 
}) 

export class ReadStoryComponent {
    content : any ;
    constructor(private  dataService : DataService ){
        this.content =  sessionStorage.getItem("readStory");    
    };
  
    goBack(){
        window.history.back();
    }
}