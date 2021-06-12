import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  property: Property = {
    title: '',
    description: '',
    active: true,
    image: '',
    place: ''
  };
  lat = 50.4536;
  lng = 30.5164;
  submitted = false;

  constructor(private propertyService: PropertyService, private router:Router) { }

  ngOnInit(): void {
  }

  mapClicked($event: MouseEvent) {

      this.lat = $event.coords.lat;
      this.lng =  $event.coords.lng;
      this.property.place = $event.coords.lat +';'+ $event.coords.lng;
  }

  saveProperty(): void {
    const data = {
      title: this.property.title,
      description: this.property.description,
      image: this.property.image,
      place: this.property.place,
      active: true
    };

    this.propertyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          setTimeout(()=>{this.router.navigate(['/propertys'])}, 1000);
        },
        error => {
          console.log(error);
        });
  }

  newProperty(): void {
    this.submitted = false;
    this.property = {
      title: '',
      description: '',
      active: true,
      image: '',
      place: ''
    };
  }

}
