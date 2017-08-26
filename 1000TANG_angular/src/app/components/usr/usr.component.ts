import { Component } from "@angular/core";

//Http
import { Router } from "@angular/router";

@Component({ 
	selector: "usr", 
	templateUrl: "./usr.component.html", 
	styleUrls: ["./usr.component.css"]
})

export class USRComponent {
	
	constructor(private router: Router) {
	}
}