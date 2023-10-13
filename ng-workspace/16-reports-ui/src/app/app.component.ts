import { Component } from '@angular/core';
import { InsuranceService } from './insurance.service';
import { Searchrequest } from './searchrequest';
import { Searchresponse } from './searchresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '16-reports-ui';

  constructor(private insuranceService:InsuranceService){}

  public planNames:string[]|undefined;
  public planStatuses:any;

  public selectedPlan="select";
  public selectedStatus="select";

  searchRequest:Searchrequest=new Searchrequest();
  searchResponse:Searchresponse[]=[];

  ngOnInit():void{
    this.getPlanNames();
    this.getPlanStatus();
  }

  getPlanNames(){
    this.insuranceService.getPlanNames().subscribe(data=>{
      this.planNames=data;
    });
  }

  getPlanStatus(){
    this.insuranceService.getPlanStatuses().subscribe(data=>{
      this.planStatuses=data;
    });
  }

  search(){
    this.searchRequest.planName=this.selectedPlan;
    this.searchRequest.planStatus=this.selectedStatus;

    this.insuranceService.search(this.searchRequest).subscribe(data=>{
      this.searchResponse=data;
    });
  }

  onSubmit(){
    this.search();
  }

  exportToExcel(){
    this.insuranceService.getExcel().subscribe(data=>{
      let file=new Blob([data],{type:'application/vnd.ms-excel'});
      var fileUrl=URL.createObjectURL(file);
      window.open(fileUrl);
    });
  }

  exportToPdf(){
    this.insuranceService.getPdf().subscribe(data=>{
      let file=new Blob([data],{type:'application/pdf'});
      var fileUrl=URL.createObjectURL(file);
      window.open(fileUrl);
    });
  }
}
