import { Injectable } from '@angular/core';
import { VendorModel } from './vendor-model';

@Injectable({
  providedIn: 'root'
})
export class VendorDataServiceService {
  VendorList: VendorModel[] = [
    {name: 'Mukil', age: 22 , city: 'Chennai'},
    {name: 'Vembo', age: 21 , city: 'Bangalore'},
    {name: 'Manhoe', age: 12 , city: 'Mumbai'},
    {name: 'Vaasan', age: 24 , city: 'Hyderabad'},
    {name: 'Syed', age: 19 , city: 'Delhi'}
  ];
  
  constructor() { }

  getVendorList() : VendorModel[]
  {
    return this.VendorList;
  }
  setVendor(){

  }
}
