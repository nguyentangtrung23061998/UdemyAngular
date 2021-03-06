import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterCeptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        console.log('Request is on its way');
        return next.handle(req);
    }
}