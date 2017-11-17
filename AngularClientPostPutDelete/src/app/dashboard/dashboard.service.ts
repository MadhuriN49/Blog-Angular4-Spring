import {Injectable} from '@angular/core';
import { Dashboard } from './dashboard';

@Injectable()
export class DashboardService{

    getDashboardContentService() {
        return[{
                id : 1,
                title : "History",
                content : "Dummy Content",
                authorName : "Carl" ,
                datePosted : new Date().getDate() + " / "  + new Date().getMonth() + " / " + new Date().getFullYear(), 
                imgPath: "assets/images/andria.jpeg"
               }, 
               {
                id : 2,
                title : "Fiction",  
                content : "Dummy Content Cookies are data, stored in small text files",
                authorName : "Andria" ,
                 datePosted : new Date().getDate() + " / "  + new Date().getMonth() + " / " + new Date().getFullYear() , 
                imgPath: "assets/images/carl.jpeg"
               },
               {
                id : 3,
                title : "Horror",
                content : "Dummy Content",
                authorName : "Max" ,
                datePosted : new Date().getDate() + " / "  + new Date().getMonth() + " / " + new Date().getFullYear() , 
                imgPath: "assets/images/max.jpeg"
               },
            ];
    }
}