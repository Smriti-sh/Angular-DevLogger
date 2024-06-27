import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Log } from '../models/Log';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrl: './log-form.component.css'
})
export class LogFormComponent implements OnInit{
  id:string='';
  date:any;
  text:string;
  isNew:boolean=true;
  
  constructor(private logService:LogService){
    this.text = '';
  }
  
  ngOnInit(): void {
    
    //subscribe to the selectedLog observable
    //communication between sibling component
    this.logService.selectedLog.subscribe(log=>{
      // console.log(log);
      if (log.id!==null) {
        //for new log id will be null
        this.isNew=false
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;

      }
    })
  }

  onSubmit(){
    // console.log(1234);
    // check if new log
    if (this.isNew) {
      // create a new log
      const newLog ={
        id:this.generateId(),
        text:this.text,
        date:new Date()
      }

      //add log
      this.logService.addLog(newLog);
    }else{
      // create log to be updated
      const updLog = {
        id:this.id,
        text:this.text,
        date: new Date()
      }
      //update log
      this.logService.updateLog(updLog);
    }
  }

  //javascript uuid, to generate new id
  generateId(){
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }
}
