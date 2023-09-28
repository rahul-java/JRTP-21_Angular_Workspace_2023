import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  originalemployees:Employee[]=[
    new Employee(101,"Adam",5000.0),
    new Employee(102,"Anil",9000.0),
    new Employee(103,"Amrit",7000.0),
    new Employee(104,"Animesh",5000.0),
    new Employee(105,"Amit",5000.0),
    new Employee(106,"Aman",6000.0),
  ];

  employees:Employee[]=[];
  newemployee:Employee=new Employee(0,"",0);

  constructor(){
    this.employees=this.originalemployees;
  }

str:string="";
sortcolumn="empId";
order=1;

onSearchCLick(){
  this.employees=this.originalemployees.filter((emp)=>{
    return emp.empname.toLowerCase().indexOf(this.str.toLowerCase())>=0;
  });
}

onSortClick(){
  this.employees=this.originalemployees.sort((emp1,emp2)=>{
    var n=0;
    if(this.sortcolumn=="empId"){
      return (emp1[this.sortcolumn]-emp2[this.sortcolumn])*this.order;
    }else if(this.sortcolumn=="empname"){
      return (emp1[this.sortcolumn].charCodeAt(0)-emp2[this.sortcolumn].charCodeAt(0))*this.order;
    }else if(this.sortcolumn=="salary"){ 
      return (emp1[this.sortcolumn]-emp2[this.sortcolumn])*this.order;
    }
    else{
      return this.order;
    }
    
  });
}

  onInsertClick()
  {
    this.originalemployees.push(new Employee(this.newemployee.empId,this.newemployee.empname,this.newemployee.salary));
  this.newemployee.empId=0;
  this.newemployee.empname="";
  this.newemployee.salary=0;
  }

  onDeleteClick(indx:number)
  {
    if(confirm("Are you sure to delete this employee ?"))
    {
      this.originalemployees.splice(indx,1);
    }
  }
}
