import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './../app-routing.module';

import { NavComponent } from './nav/nav.component';
import { DialogWindowComponent } from './DialogWindow/dialog-window.component';
import { ImageCardComponent } from './ImageCard/image-card.component';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        AppRoutingModule,
        MatDialogModule,
        BrowserAnimationsModule

    ],
    declarations: [
        NavComponent,
        DialogWindowComponent,
        ImageCardComponent,
    ],
    exports: [
        NavComponent,
        ImageCardComponent,
    ],
    entryComponents: [DialogWindowComponent]
})

export class ComponentsModule {}
