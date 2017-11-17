import { Component,OnInit, Input } from '@angular/core';

@Component({
    moduleId : module.id,
    templateUrl : "../login/login.html" 
})
export class LogOutComponent implements OnInit {
ngOnInit(){
    sessionStorage.setItem('loggedInUser', "");
    window.location.href = "login";
}
   
}