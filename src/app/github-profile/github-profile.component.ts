import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  id: number;
  username: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        // + sign in front of string convert into number
        this.id = +params.get('id');
        this.username = params.get('username');
        console.log(`User ID: ${this.id} and User Name: ${this.username}.`);
      });
  }

  // nextProfile(){
  //   console.log(this.id);
  //   this.router.navigateByUrl('/'+this.id);
  // }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }
}
