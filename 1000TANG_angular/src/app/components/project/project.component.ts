import { Component } from "@angular/core";

//Http
import { Router } from "@angular/router";

@Component({ 
	selector: "project", 
	templateUrl: "./project.component.html", 
	styleUrls: ["./project.component.css"]
})

export class ProjectComponent {
	
	constructor(private router: Router) {
	}
}