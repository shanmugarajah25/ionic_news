import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from '../shared/data.service';
import {environment} from '../../environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Tab2Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    items: any[];
    dateFormat = environment.dateFormat;

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
        console.log('> HomePage.ngOnInit');
        this.dataService.getPosts().subscribe((data: any[]) => {
            this.items = data;
        });
    }

    getMorePosts(evt) {
        this.dataService.getMorePosts().subscribe((data: any[]) => {
            this.items = data;
            this.infiniteScroll.complete();
        });
    }

    infiniteScrollDisabled() {
        if (this.dataService.hasMorePosts()) {
            return false;
        } else {
            return true;
        }
    }

}
