import { Component } from "@angular/core";

//Http
import { Router } from "@angular/router";

@Component({ 
	selector: "sidebar-left", 
	templateUrl: "./sidebar-left.widget.html", 
	styleUrls: ["./sidebar-left.widget.css"]
})

export class SidebarLeft {
	
	constructor(private router: Router) {
	}
}