import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-propertys-list',
  templateUrl: './propertys-list.component.html',
  styleUrls: ['./propertys-list.component.css']
})
export class PropertysListComponent implements OnInit {
  propertys?: Property[];
  currentProperty?: Property;
  currentIndex = -1;
  title = '';

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.retrievePropertys();
  }

  retrievePropertys(): void {
    this.propertyService.getAll()
      .subscribe(
        data => {
          this.propertys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  truncate(str: string): string{
    return str.substring(0, 10)+ (str.length > 10 ? '...' : '');
  }

  refreshList(): void {
    this.retrievePropertys();
    this.currentProperty = undefined;
    this.currentIndex = -1;
  }

  setActiveProperty(property: Property, index: number): void {
    this.currentProperty = property;
    this.currentIndex = index;
  }

  removeAllPropertys(): void {
    this.propertyService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentProperty = undefined;
    this.currentIndex = -1;

    this.propertyService.findByTitle(this.title)
      .subscribe(
        data => {
          this.propertys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
