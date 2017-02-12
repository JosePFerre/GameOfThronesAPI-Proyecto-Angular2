import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenaLibros'
})
export class OrdenaLibrosPipe implements PipeTransform {

  transform(lista: Array<string>, args: string): Array<string> {
lista.sort((a: any, b: any) => {
if (parseInt(a.url.charAt(a.url.length - 1)) < parseInt(b.url.charAt(b.url.length - 1))) {
        return -1;
      } else if (parseInt(a.url.charAt(a.url.length - 1)) > parseInt(b.url.charAt(b.url.length - 1))) {
        return 1;
      } else {
        return 0;
      }
    });
    return lista;
  }
}