import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {DialogWindowComponent} from '../../Components/DialogWindow/dialog-window.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(public dialog: MatDialog) {}

    openDialog(): Observable<boolean> {
        const dialogRef = this.dialog.open(DialogWindowComponent, {
            width: '250px',
        });
        return dialogRef.afterClosed().pipe(map(result => {
            return result;
        }));
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.openDialog();
    }
}
