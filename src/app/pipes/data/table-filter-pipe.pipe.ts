import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilterPipe'
})
export class TableFilterPipePipe implements PipeTransform {

  transform(table: any[] , filter : string): any[] {

    console.log(filter);

    if(!filter) return table;

    return table.filter((value)=>{
      return value.marque == filter
    });
  }

}
