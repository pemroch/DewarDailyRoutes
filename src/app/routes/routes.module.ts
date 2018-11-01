// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Module Containers
import { RoutesLayoutContainerComponent } from './containers/routes-layout-container/routes-layout-container.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: RoutesLayoutContainerComponent, children: [
                { path: 'active', loadChildren: './users/users.module#UsersModule' }
            ]}
        ])
    ],
    declarations: [RoutesLayoutContainerComponent]
})
export class RoutesModule { }
