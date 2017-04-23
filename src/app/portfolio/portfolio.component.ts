import { Component, OnInit} from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  bricks;
   _bricks = [
     {
       title: 'Brick 1',
       subtitle: 'Keep yourself alive', 
       color: '#d77575', 
       cover: './assets/img/bg.jpg',
       thumbnail: 'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta sagittis sapien. Proin iaculis tempor molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam leo enim, faucibus id gravida vel, fermentum in felis. Etiam urna odio, dapibus luctus molestie in, porttitor sit amet est. Nulla facilisi. Aenean ex sapien, rutrum quis metus quis, efficitur aliquam urna. Vivamus id eros et ante interdum ullamcorper aliquet vitae est. Proin elementum justo quis placerat semper. Aenean cursus maximus sagittis. Cras mattis mollis dolor eu placerat. Ut suscipit porta ipsum.',
       tags: ['awesome', 'super', 'amazing'],
       url: 'matchyourtie.com'
     },

     {title: 'Brick 2', color: '#dcbc4c'},
     {title: 'Brick 3', color: '#a3ca3b'},
     {title: 'Brick 4', color: '#3daee3'},
     {title: 'Brick 5', color: '#bb8ed8'},
     {title: 'Brick 6', color: '#baafb1'}];

  constructor(private api: ApiService ) { }




  ngOnInit() {

    this.api.getPortfolio().subscribe((res) => {
      this.bricks = res.json();
    });
  }


}
