import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';



@NgModule({

  exports:[
    ContentListComponent
  ],
  declarations: [
    ContentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
