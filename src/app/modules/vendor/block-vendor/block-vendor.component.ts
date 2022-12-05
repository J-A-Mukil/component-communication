import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  vendorValue : VendorModel = {} as VendorModel;
  // public vendorValue? : VendorModel;
  constructor(private sharedService : SharedServiceService) { }

  ngOnInit(): void {
    this.sharedService.vendorObs.subscribe((data) => {
      this.vendorValue = data;
    })
  }

}
