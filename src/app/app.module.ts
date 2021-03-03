import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FilterProviderPipe } from './filter-provider.pipe';
import { SortProviderPipe } from './sort-provider.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { SharepopupComponent } from './sharepopup/sharepopup.component';
import { MatButtonModule, MatCommonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterProviderPipe,
    SortProviderPipe,
    SharepopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule, 
    MatCommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [SharepopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
