// Angular
import { Component, OnDestroy } from '@angular/core';
// Module Services
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users-container',
    template: `
        <app-header text="Users">
            <app-header-btn
                icon="arrow_back"
                toolTip="Settings"
                link="/app/settings"
                matTooltipPosition="after"
                header-btn-left
            ></app-header-btn>
            <app-header-btn
                icon="add"
                toolTip="Add User"
                matTooltipPosition="before"
                (click)="this.usersService.addUser()"
                header-btn-right
            ></app-header-btn>
        </app-header>
        <app-settings-table-container></app-settings-table-container>
    `,
    providers: [UsersService]
})
export class UsersContainerComponent implements OnDestroy {
    tableData$ = this.usersService.tableData$.subscribe();

    ngOnDestroy() {
        this.tableData$.unsubscribe();
    }

    constructor(private usersService: UsersService) { }
}
