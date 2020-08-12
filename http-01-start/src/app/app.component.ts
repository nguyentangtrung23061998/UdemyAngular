import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './post.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit,OnDestroy {
  loadedPosts : Post[] = [];
  isFetching = false;
  error = null;
  postForm:NgForm;
  private errorSub : Subscription;

  constructor(private http: HttpClient,private postService:PostsService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(
      errorMessage => {
        this.error = errorMessage;
      }
    )

    this.isFetching=true;
    this.postService.fetchPost().subscribe(
      post =>{
        this.isFetching=false;
        this.loadedPosts=post;
        console.log(this.loadedPosts)
      }
    )
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.name,postData.class,postData.mark);
    this.postForm.reset();
  }

  onFetchPosts() {
    this.isFetching=true;
    this.postService.fetchPost().subscribe(
      post =>{
        this.isFetching=false;
        this.loadedPosts=post;
      },error=>{
        this.isFetching = false;
        this.error = error.message;
        console.log(this.error)
      }
    )
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(
      ()=>{
        this.loadedPosts=[];
      }
    )
  }

  private fetchPost() {
    this.isFetching=true;
    this.http
      .get<{[key:string]:Post}>('https://ng-complete-guide-ddb0b.firebaseio.com/demo.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.isFetching=false;
        this.loadedPosts=posts;
      })
  }
  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  
}
