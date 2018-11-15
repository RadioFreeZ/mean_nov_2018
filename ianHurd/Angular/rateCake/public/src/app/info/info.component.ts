import { Component, OnInit, Input } from '@angular/core'; // add Input to our imports

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() cakeToShow: any;
  constructor() { }

  ngOnInit() {
  }

}
