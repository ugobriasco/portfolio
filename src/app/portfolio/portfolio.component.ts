import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

   bricks = [
     {title: 'Brick 1', color: '#d77575'},
     {title: 'Brick 2', color: '#dcbc4c'},
     {title: 'Brick 3', color: '#a3ca3b'},
     {title: 'Brick 4', color: '#3daee3'},
     {title: 'Brick 5', color: '#bb8ed8'},
     {title: 'Brick 6', color: '#baafb1'}];

  constructor() { }




  ngOnInit() {
  }


}
