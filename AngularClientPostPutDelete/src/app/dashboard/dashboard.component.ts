import { Component,OnInit,Output ,EventEmitter } from '@angular/core';
import {DashboardService} from './dashboard.service';
import { NavService } from '../nav/nav.service';
import { DataService } from '../data.service';

import {Dashboard} from './dashboard';

@Component({
    moduleId : module.id,
    selector : "DashboardService",
    templateUrl : "./dashboard.html"  
})

export class DashboardComponent implements OnInit{  
    dashboardContents : Dashboard[] ;
    author : any;
    authorId : number ;
    loggedInUser : string ;
    loggedInStatus : boolean = false ;
    canAdd : boolean = false ;
    constructor ( private dashboardService : DashboardService ,
                  private navService: NavService,
                  private dataService: DataService){};
                     
    ngOnInit() : void{
        
        if(this.dataService.loggedStatus() == true){
            sessionStorage.getItem('loggedInUser');
        }
         else{
            sessionStorage.setItem('loggedInUser', '');
            window.location.href = "login";
         }

        this.getContent();         
    }
    
    getContent(){
        this.navService.show();
       // this.dashboardContents = this.dashboardService.getDashboardContentService();
        this.loggedInUser = sessionStorage.getItem("loggedInUser");
        if( this.loggedInUser  == "admin"){
            this.canAdd = true;
        }
        
        return this.dataService.getDashboard().then(dashboardContents => this.dashboardContents = dashboardContents);
    //    var newItems = JSON.parse(localStorage.getItem("addMore"));
       
    //     for (let newItem of newItems) {
    //         this.dashboardContents.push(newItem);
    //     }
    //     var addedData = this.dashboardContents;
      //  sessionStorage.setItem("addedData", JSON.stringify(addedData));
       // this.dashboardContents.push(JSON.parse(sessionStorage.getItem("addMore")));
    }

    delete(index : number){
        this.dashboardContents.splice(index , 1 ); 
    }

    deleteAuthor(author : Dashboard){
        this.dataService.deleteAuthor( author.id );
        window.location.reload();       
    }

    readContent(dashboardContent : Dashboard){
      sessionStorage.setItem("readStory", dashboardContent.content);
      window.location.href = "readStory"; 
    }

}