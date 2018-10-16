// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { HomeContainerComponent } from './containers/home-container/home-container.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: HomeContainerComponent }
        ])
    ],
    declarations: [HomeContainerComponent]
})

export class HomeModule { }
