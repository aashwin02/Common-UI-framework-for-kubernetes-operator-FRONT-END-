import { Component , OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dash.service' ;
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  subscription = new Subscription() ;
  foodlist: any = [{}] ;
  logfile: any ;

  //url = 'http://localhost:8112/menu' ;
  url = 'http://localhost:8080/Operators' ;
  url2 = 'http://localhost:8080/Operator_logs?operatorName='
  constructor( private ds: DashService) {}

  ngOnInit() {
    this.getLog()
  }
  scp:any ;
  timeLog:any ;

  compCall(event:any) {
    this.scp = event.value;
    console.log(this.scp);
  }

  timeFilter(event:any) {
    if ( event.target.value == "Last 15 minutes" ) {
      this.timeLog = 15 ;
    } else if ( event.target.value == "Last 30 minutes" ) {
      this.timeLog = 30 ;
    } else if ( event.target.value == "Last 1 hour" ) {
      this.timeLog = 60 ;
    } else {
      this.timeLog = event.target.value ;
    }
    console.log(this.timeLog) ;
  }

  compCall2(event:any) {
    console.log("dfvfd") ;
    console.log(event.value) ; 
  }
  public getMenuList() {
    this.subscription.add(
      this.ds.getfoodMenu(this.url)
      .subscribe(res => {
        console.log('1-------1') ;
        this.foodlist = res['data']['applications'] ;
      },)
    ) ;
  }

  public getLog() {
    this.subscription.add(
      this.ds.getLogs(this.url2 + this.scp + "&timefilter=" + this.timeLog) 
      .subscribe(res => {
        console.log('222---222') ;
        this.logfile = res['data']['log'] ;
        if ( this.logfile == "" ) {
          alert("No logfile present") ;
        }
        console.log("sdvjdfvnfdv") ;
        console.log(this.logfile) ;
      },)
    ) ;
  }
}

