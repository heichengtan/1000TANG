import { Component, OnInit, OnDestroy } from "@angular/core";

//Http
import { ActivatedRoute } from "@angular/router";

@Component({ 
	selector: "dreamworks", 
	templateUrl: "./dreamworks.component.html", 
	styleUrls: ["./dreamworks.component.css"]
})

export class DreamworksComponent implements OnInit, OnDestroy {
	
	private _routeSubscription;
	private _category: string = "";
	
	constructor(private route: ActivatedRoute) {
	}
	
	ngOnInit(): void {
		this._routeSubscription = this.route.params.subscribe(params => {
			this._category = this.categoryToCHT(params["category"]);
		});
	}
	
	private categoryToCHT(category: string): string {
		switch(category) {
			case "home": 
				return "工廠的家";
			case "take-off": 
				return "夢想起飛";
			case "interpretation": 
				return "解夢分享";
			case "journey": 
				return "踏夢之旅";
			case "build-and-pursue": 
				return "築夢逐夢";
			default: 
				return "頑皮塘101數位文創智造夢工廠";
		}
	}
	
	ngOnDestroy(): void {
		this._routeSubscription.unsubscribe();
	}
}