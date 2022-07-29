import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [CommonModule, NgxSpinnerModule],
    exports: [NgxSpinnerModule, ReactiveFormsModule],
})
export class SharedModule {}
