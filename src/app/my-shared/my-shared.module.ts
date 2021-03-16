import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule} from '@ngx-translate/core';
import { MatSlideToggleModule, MatButtonModule, MatInputModule, MatDialogModule, 
  MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatProgressBarModule, MatSelectModule, MatIconModule,
  MatListModule, MatMenuModule, MatSortModule, MatProgressSpinnerModule, MatCheckboxModule, MatTabsModule, MatAutocompleteModule,
  MatRadioModule, MatBadgeModule
} from '@angular/material';
import { GenericTableModule } from '@angular-generic-table/core';
import { ColumnSettingsModule } from '@angular-generic-table/column-settings';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { FileUploadModule } from 'primeng/fileupload';
import { GrowlModule } from 'primeng/growl';
import { CalendarModule } from 'primeng/calendar';
import { ProgressBarModule } from 'primeng/progressbar';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MyCKEditorComponent } from './my-ckeditor/my-ckeditor.component';
import { DisplayMathMLComponent } from './my-ckeditor/display-mathml.component';
import { SafeHTML } from './pipes/safeHtml';

/**
 * MySharedModule
 * @author MG
 */
@NgModule({
  imports: [
    //Angular
    CommonModule,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Angular material
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatBadgeModule,
    //Angular generica tables
    GenericTableModule,
    ColumnSettingsModule,
    //ng2-dragula
    DragulaModule.forRoot(),
    //Prime ng
    FileUploadModule,
    GrowlModule,
    CalendarModule,
    ProgressBarModule,
    EditorModule,
    ButtonModule,
    //CKEditor
    CKEditorModule
  ],
  declarations: [
    MyCKEditorComponent,
    DisplayMathMLComponent,
    SafeHTML
  ],
  exports: [
    //Angular
    FormsModule,
    HttpClientModule,
    TranslateModule,
    //Angular material
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatBadgeModule,
    //Angular generic tables
    GenericTableModule,
    ColumnSettingsModule,
    //ng2-dragula
    DragulaModule,
    //Prime ng
    FileUploadModule,
    GrowlModule,
    CalendarModule,
    ProgressBarModule,
    EditorModule,
    ButtonModule,
    CKEditorModule,
    MyCKEditorComponent,
    DisplayMathMLComponent
  ]
})
export class MySharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MySharedModule
    };
  }
}