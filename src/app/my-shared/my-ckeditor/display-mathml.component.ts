import { AfterViewInit, Component, ElementRef, Input, OnInit } from "@angular/core";

/**
* DisplayMathMLComponent
* @author
*/
@Component({
    selector: 'display-mathml',
    templateUrl: './display-mathml.component.html'
})
export class DisplayMathMLComponent implements OnInit, AfterViewInit {

    @Input() data: string;

    constructor(private elementRef: ElementRef) {

    }

    public ngOnInit(): void {

    }

    public ngAfterViewInit(): void {
        console.log(this.data);
        console.log(String(this.data).includes("math"));
        if (String(this.data).includes("math") || this.data === '') {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
            this.elementRef.nativeElement.appendChild(s);
        }
    }
}