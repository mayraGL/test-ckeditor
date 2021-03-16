import { DomSanitizer } from '@angular/platform-browser';
import { Pipe } from '@angular/core';

@Pipe({ name: 'safeHtml' })
export class SafeHTML {
    constructor(private sanitizer: DomSanitizer) { }

    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}