import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{

    transform(value: string, ...args: any[]) {
        if (!value) {
        return null;
        }

        const actualLimit = (args[0]) ? args[0] : 20;
        return `${value.substr(0, actualLimit)}...`;
    }

}
