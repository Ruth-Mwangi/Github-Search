import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:any=new Date()
    let creation:any=new Date
    value=value.split('')
    let yearCreated:any=(value.splice(0,4)).join('')
    value.shift()
    let monthCreated:any=((value.splice(0,2)).join(''))-1
    value.shift()
    let dateCreated:any=(value.splice(0,2)).join('')
    let createdAt:any=new Date( yearCreated,monthCreated,dateCreated)
    
    var dateDifference=Math.abs(createdAt-today);
    var dateSeconds=dateDifference*0.001;
    const seconds=86400;
    var daysPassed= Math.floor(dateSeconds/seconds);

    return daysPassed;
  }

}
