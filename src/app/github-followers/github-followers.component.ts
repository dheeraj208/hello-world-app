import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
// import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  show = false;
  followers: any[];

  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

/*
  ngOnInit() {
    //get required parameters
    //let id = this.route.snapshot.paramMap.get('id');

    let values$ = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combined => {
        console.log(combined[0].get('id'));
        console.log(combined[0].get('username'));
        console.log(combined[1].get('page'));
        console.log(combined);
        //return [first.get('id'), second.get('page')]

        this.service.getAll()
          .subscribe(followers => {
            this.followers = followers;
            console.log(this.followers);
            for (let index = 0; index < this.followers.length; index++) {
              console.log(this.followers[index]['node_id']);
            }
          });
      });
  }
*/
  // cleaner implementation of ngOnInit
  ngOnInit(): void{
    const values$ = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');

        return this.service.getAll();
      })
    )
    .subscribe(followers => this.followers = followers);
  }
}
