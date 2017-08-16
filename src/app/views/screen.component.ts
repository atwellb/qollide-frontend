import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'screen-component',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
	title = 'screen';
	id;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];
	}
}
