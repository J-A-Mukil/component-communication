import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})


export class VendorComponent implements OnInit {
  public pvendor : VendorModel = {} as VendorModel;
  constructor() { }
  // public venList? : VendorModel[];
  // venList = this.vendorService.getVendorList();

  ngOnInit(): void {
  }

}
