import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  currentProperty: Property = {
    title: '',
    description: '',
    active: false,
    place: '',
    image: ''
  };
  message = '';
  place = false;
  lat = 50.4536;
  lng = 30.5164;
  zoom = 8;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProperty(this.route.snapshot.params.id);
  }

  getProperty(id: string): void {
    this.propertyService.get(id)
      .subscribe(
        data => {
          this.currentProperty = data;
          let t = this.currentProperty.place?.split(';') || [];
          if(t.length == 2){
            this.lat = +t[0];
            this.lng = +t[1];
            this.place = true;
            this.zoom = 14;
          }

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentProperty.title,
      description: this.currentProperty.description,
      active: status
    };

    this.message = '';

    this.propertyService.update(this.currentProperty.id, data)
      .subscribe(
        response => {
          this.currentProperty.active = status;
          console.log(response);
          this.message = response.message ? response.message : 'This property was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateProperty(): void {
    this.message = '';

    this.propertyService.update(this.currentProperty.id, this.currentProperty)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This property was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProperty(): void {
    this.propertyService.delete(this.currentProperty.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/propertys']);
        },
        error => {
          console.log(error);
        });
  }
}
