import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Log } from './models/Log';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs:Log[];

  private logSource = new BehaviorSubject<Log>({id:'',text:'',date:null});

  //property for the one which gets selected
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id:'1',text:'Generated components',date: new Date('12/26/2023 12:43:45')},
      {id:'2',text:'dfgh dfghjk',date: new Date('12/26/2023 12:43:45')},
      {id:'3',text:'ertyu xcvbnm',date: new Date('12/26/2023 12:43:45')}
    ]
   }


   //synchron.
  //  getLogs(){
  //   return this.logs;
  //  }

   //asynchro.
   getLogs():Observable<Log[]>{
    return of(this.logs);
   }

   setFormLog(log:Log){
    this.logSource.next(log);
   }

   addLog(log:Log){
    this.logs.unshift(log);
   }

   updateLog(log:Log){
 //cur= each individual log that we loop for
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    // console.log(456);
    this.logs.unshift(log);
   }

   deleteLog(log:Log){
    //cur= each individual log that we loop for
       this.logs.forEach((cur, index) => {
         if (log.id === cur.id) {
           this.logs.splice(index, 1);
         }
       });
       // console.log(456);
   }
}
