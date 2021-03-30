
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  data:any=[
    {sno:"1",name:"likhith",role:"likhith@gmail.com"},
    {sno:"2",name:"Ganesh",role:"ganesh@gmail.com"},
    {sno:"3",name:"Mahesh",role:"mahesh@gmail.com"}
  ]
  name!:string; 
  checkname!:string;
  email!:string;
  password!:string;
  mobile!:string;
  rmobile!:string;
  vmobile!:string;
  public t1:boolean;
 public t2:boolean
  constructor(private route:Router) { 
    this.t1=false;
    this.t2=false;
    this.checkname="Driver";
  }
  toggle(val:any)
  {
    console.log(val);
  }
  
  toggle1()
{
 
  this.t1=!this.t1
  if(this.t1)
  {
    this.checkname="User";

  }
  else
  {
    this.checkname="Driver"
  }
}

  ngOnInit(): void {

  }
  adminhomeclick(){
      this.route.navigate(['adminHome']);
  }
  adminlogoutclick(){
    this.route.navigate(['login']);
  }
  updateclick(){
    if(this.name && this.email && this.password && this.mobile){
      var obj1={
        sno:this.data.length+1,
        name:this.name,
        role:this.email
      }
      this.data.push(obj1);
      this.name="";
      this.password="";
      this.email="";
    }
    else{
      alert("Enter All Details")
    }
  }
  deleteButton(roleName:string){
    const filterArray = this.data.filter((d:any) => d.role !== roleName);
    this.data = filterArray;
  }
  editButton(roleName:string){
    let em,da,am;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].role==roleName){
          em = this.data[i].name;
          da = this.data[i].role;
          // am = this.data[i].sno;
          this.name = em;
          this.email = da;
          const filterArray = this.data.filter((item:any) => item.role !== roleName);
          this.data = filterArray;
      }
    }
  }

}