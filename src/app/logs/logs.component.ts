import { Component, OnInit } from '@angular/core';
import { Log } from '../models/Log';
import { LogService  } from '../log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent implements OnInit{

    logs:Log[]=[];
 
  constructor(private logService:LogService){}

  ngOnInit(): void {
    
    //this was when data was synchronous i.e. not observable
  //  this.logs = this.logService.getLogs();

  //for asynchronous
  this.logService.getLogs().subscribe(logs=>{
    this.logs=logs;
  });
  }

  onSelect(log:Log){
    // console.log(log);
    this.logService.setFormLog(log);
  }

  onDelete(log:Log){
    // console.log(987);
    if (confirm('Are you sure?')) {
      this.logService.deleteLog(log);
    }
  }
}