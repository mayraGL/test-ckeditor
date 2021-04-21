import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import ClassicEditor from 'ckeditor5-custom-build';


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
    defaultConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                'fontColor',
                'fontBackgroundColor',
                'highlight',
                'fontSize',
                '|',
                'bulletedList',
                'numberedList',
                'alignment',
                '|',
                'imageInsert',
                'mediaEmbed',
                'insertTable',
                '|',
                'MathType',
                'ChemType',
                '|',
                'undo',
                'redo',
                'blockQuote',
                'outdent',
                'indent',
                'codeBlock',
                'specialCharacters'
            ]
        },
        image: {
            upload: {
                types: ['png', 'jpeg']
            },
            toolbar: [
                'imageTextAlternative'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'es',
        placeholder: 'Escribe el texto'
    };

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