import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    error = new Subject<string>();
    isFetching = false;
    loadedPosts: Post[] = [];

    constructor(private http: HttpClient) { }

    createAndStorePost(classStudent: string, name: string,mark:number) {
        const postData: Post = { class: classStudent, name: name,mark:mark };
        debugger
        this.http.post<{ name: string }>(
            'https://ng-complete-guide-ddb0b.firebaseio.com/posts.json',
            postData,
                {
                    observe:'response'
                }
            )
            .subscribe(responseData => {
                debugger
                console.log(responseData)
            },
                error => {
               
                    this.error.next(error.message);
                }
            );
    }

    fetchPost() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print','pretty');
        searchParams = searchParams.append('custom','key');

        return this.http
            .get<{ [key: string]: Post }>('https://ng-complete-guide-ddb0b.firebaseio.com/posts.json',
                {
                    headers:new HttpHeaders({'Custom-Header':'Hello'}),
                    params : searchParams,
                    responseType:'json'
                }
            )
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postsArray;
                }),
            catchError(errorRes=>{
                return throwError(errorRes)
            })
            ) 
    }

    deletePosts() {
        return this.http.delete('https://ng-complete-guide-ddb0b.firebaseio.com/posts.json',{
            observe:'events'
        })
        .pipe(
            tap(event=>{
                console.log(event);
                if(event.type === HttpEventType.Sent){
                 //...   
                }
                if(event.type === HttpEventType.Response){
                    console.log(event.body)
                }
            })
        )

    }
}