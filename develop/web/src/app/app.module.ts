import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PLATFORM_ID, APP_ID, Injectable, Inject } from '@angular/core';
import {
  HttpClientModule,
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { isPlatformBrowser, APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { AppRoutingModule } from './app-routing.module';
import { TipsComponent } from './components/tips/tips.component';
import { Observable } from 'rxjs';
@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'api请求地址';

    req = req.clone({
      url: url + req.url
    });

    return next.handle(req);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    TipsComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'projectId'}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
