import { GithubProfileComponent } from './github-profile/github-profile.component';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { AngDirectiveComponent } from './ang-directive/ang-directive.component';
import { CustomDirectiveFormatDirective } from './custom-directive-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { GetDataComponent } from './http/get-data/get-data.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { AlbertaHealthNumberComponent } from './alberta-health-number/alberta-health-number.component';
import { AhnComponent } from './ahn/ahn.component';
import { AHNValidatorDirective } from './ahn/ahn-validator.directive'

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    AngDirectiveComponent,
    CustomDirectiveFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    FormArrayComponent,
    GetDataComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent,
    TestComponent,
    AlbertaHealthNumberComponent,
    AhnComponent,
    AHNValidatorDirective
    // FontAwesomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent  },
      {path: 'followers/:id/:username', component: GithubProfileComponent },
      {path: 'followers', component: GithubFollowersComponent },
      {path: 'posts', component: GetDataComponent },
      {path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    AuthorService,
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
