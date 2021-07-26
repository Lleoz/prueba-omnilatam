import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonTable'
})
export class JsonTablePipe implements PipeTransform {

  transform(value: Object, ...args: unknown[]): unknown {
    let html: string = '';
    Object.keys(value).forEach( valor =>{
      html += `<span class="row caracteristicas">${valor}: ${value[valor]}</span>`;
    })

    return html;
  }

}
