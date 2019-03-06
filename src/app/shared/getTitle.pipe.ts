import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getTitle' })
export class GetTitlePipe implements PipeTransform {
    transform(type: string) {
        const mapping = {
            "tv": "TV",
            "top": "Top",
            "movie": "Movie",
            "celebrity": "Celebrity",
            "indie": "Indie",

        }
        return mapping[type];
    }
}