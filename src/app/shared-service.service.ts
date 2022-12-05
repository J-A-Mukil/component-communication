import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VendorModel } from './vendor-model';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  vendorObs = new Subject<VendorModel>();

  constructor() { }

  setVendor(vendor : VendorModel) {
    this.vendorObs.next(vendor);
  }
}
