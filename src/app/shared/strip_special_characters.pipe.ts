import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'stripSpecialCharacters'
})
export class StripSpecialCharactersPipe implements PipeTransform {

    transform(string: any, character: string) {
        return string.replace(character, ' ');
    }
}