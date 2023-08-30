import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { GetdataService } from '../services/getdata.service';
import { Root2, Site,Root } from '../services/getdata.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent  implements OnInit {
    data:undefined|Root2[];
    sites:undefined|Site[][];
  siteslist!:FormGroup;

    constructor( private formbuilder:FormBuilder,
      private getdata:GetdataService
      ){}
  
    ngOnInit():void{
    this.siteslist=this.formbuilder.group({
      id:['', Validators.required],
      name:['', Validators.required],
      domainName:['', Validators.required],  
      ipAddress:['', Validators.required],
      active:[true,],
      })
      this.getsites();
    };

    addsites(data:Site)
    {
      this.getdata.addsites(data).subscribe((res)=>{
        this.siteslist.reset()
  
      }
      )
      this.getsites();
  
    }

    getsites()
    {
      this.getdata.getserver().subscribe((res)=>{
        this.data=res;
        
      })}
  
       
      
  }
