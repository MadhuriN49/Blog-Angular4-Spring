import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
    visible: boolean = false;
    // constructor() { this.visible = false; }
    
    hide() { this.visible = false; }
    
    show() { this.visible = true; }
    
    toggle() { this.visible = !this.visible; }
    
}