import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {ActivatedRoute} from '@angular/router';
import {StoresApi} from '../../../lb-services/services/custom';
import 'rxjs/add/operator/takeWhile';
import {Stores} from '../../../lb-services/models';

@Component({
  selector: 'app-store-locations',
  templateUrl: './store-locations.component.html',
  styleUrls: ['./store-locations.component.scss']
})
export class StoreLocationsComponent implements OnInit, OnDestroy {
  alive = true;
  @ViewChild('gmap') gmapElement: any;

  map: google.maps.Map;
  storesList = {};

  constructor(private router: ActivatedRoute, private storeApi: StoresApi) {
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(45.567954, 10.000007),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.storeApi.find().subscribe(stores => {
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      stores.forEach((x: Stores) => {
        this.storesList[x.id] = x;
        new google.maps.Marker({
          position: {lat: x.lat, lng: x.lng},
          title: x.name,
          label: x.address,
        }).setMap(this.map);
      });

      this.router.queryParams.takeWhile(() => this.alive).subscribe(param => {
        if (param.id) {
          if (this.storesList[param.id]) {
            this.map.panTo(new google.maps.LatLng(this.storesList[param.id].lat,
              this.storesList[param.id].lng));
            this.map.setZoom(18);
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
