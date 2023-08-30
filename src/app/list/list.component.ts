import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { GetdataService } from '../services/getdata.service';
import { Root2, Site,Root } from '../services/getdata.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data:undefined|Root2[];
serverslist!:FormGroup;
siteslist!:FormGroup;
  constructor( private formbuilder:FormBuilder,
    private getdata:GetdataService
    ){}

  ngOnInit():void{

this.serverslist=this.formbuilder.group({
  id:['', Validators.required],
  name:['', Validators.required],
  ipAddress:['', Validators.required],
  })
  this.siteslist=this.formbuilder.group({
    id:['', Validators.required],
    name:['', Validators.required],
    domainName:['', Validators.required],  
    ipAddress:['', Validators.required],
    active:[true, Validators.required],
    })
    this.getserver();
  };
addserver(data:Root2)
  {
    this.getdata.addserver(data).subscribe((res)=>{
      this.serverslist.reset()
    }
    )
    this.getserver();

  }
  getserver()
  {
    this.getdata.getserver().subscribe((res)=>{
      this.data=res;
  })
}

}
