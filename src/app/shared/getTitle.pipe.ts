import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getTitle' })
export class GetTitlePipe implements PipeTransform {
    transform(type: string) {
        const mapping = {
            'tv': 'TV',
            'top': 'Top',
            'movie': 'Movie',
            'celebrity': 'Celebrity',
            'indie': 'Indie',

            'fullcredits': "Full Cast and Crew",
            'releaseinfo': "Release Info",
            'officialsites': "External Sites",
            'companycredits': "Company Credits",
            'locations': "Filming & Production",
            'technical': "Technical Specifications"
        };
        return mapping[type];
    }
}
