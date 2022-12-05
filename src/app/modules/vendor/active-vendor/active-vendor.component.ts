import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VendorDataServiceService } from 'src/app/vendor-data-service.service';
import { VendorModel } from 'src/app/vendor-model';
import { SharedServiceService } from 'src/app/shared-service.service';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent{
  @Output() public childEvent = new EventEmitter<VendorModel>();

  constructor(
    private vendorService : VendorDataServiceService,
    private sharedService : SharedServiceService
    ) { 
  }
  vendorsList = this.vendorService.getVendorList();
  public svendor? : VendorModel = {} as VendorModel;
  onClick(vendor : VendorModel) {
    this.svendor = vendor;
    this.sharedService.setVendor(this.svendor);
    this.childEvent.emit(this.svendor);
  }


}
