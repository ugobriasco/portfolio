import { Component, OnInit} from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  bricks;
   
  constructor(private api: ApiService ) { }

  ngOnInit() {

    this.api.getPortfolio().subscribe((res) => {
      this.bricks = res.json();
    });
  }


}
