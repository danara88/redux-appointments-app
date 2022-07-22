import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, SharedModule, LayoutModule],
})
export class HomeModule {}
