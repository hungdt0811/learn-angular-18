import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'uppercasePipe',
    standalone: true
})

export class uppercasePipe implements PipeTransform {
    transform(value: string) {
        return value.toUpperCase();
    }
    
}