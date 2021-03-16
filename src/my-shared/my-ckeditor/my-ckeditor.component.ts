import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


/**
* MyCKEditorComponent
* @author
*/
@Component({
    selector: 'my-ckeditor',
    templateUrl: './my-ckeditor.component.html'
}) 
export class MyCKEditorComponent implements OnInit, AfterViewInit {

    @Output() onChange: EventEmitter<string> = new EventEmitter();

    @Input() data: string;

    private editor = ClassicEditor;
    //private data: string = "" // "<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mroot><mn>3</mn><mn>2</mn></mroot></math>Hello world!</p>";

    constructor(private elementRef: ElementRef) {
    
    }

    /**
     * Inicializa el componente
     */
    public ngOnInit(): void {
        
    }

    ngAfterViewInit() {

    }

    /**
     * Cambia el contenido del editor
     * @param $event 
     */
    private change($event): void {
        this.onChange.emit(this.data);
    }
}