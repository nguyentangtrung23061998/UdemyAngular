import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterCeptorService } from './auth-interceptor.service';
import { HighchartComponent } from './hichart/highchart/highchart.component';


@NgModule({
  declarations: [AppComponent, HighchartComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterCeptorService,
      multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
