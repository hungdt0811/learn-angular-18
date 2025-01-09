import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseResponseModel, PageListResponse, UserResponse } from '../models/BaseResponseModel';
import { interval } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  usersList: UserResponse[] = [];

  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmdWxsTmFtZSI6IlF14bqjbiB0cuG7iyB2acOqbiIsImVtYWlsIjoiYWRtaW5AaGFpcGhvbmd0ZWNoLnZuIiwidXNlck5hbWUiOiJhZG1pbiIsIm5iZiI6MTczNjMyNTYwOSwiZXhwIjoxNzM2MzI5MjA5LCJpYXQiOjE3MzYzMjU2MDksImlzcyI6IkhhaVBob25nVGVjaCIsImF1ZCI6IkhhaVBob25nVGVjaCJ9.tUbNJuUbjc_L_aj5MnoUYs-3zdfL4nyNMQRn4HV8a8E";
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.get<BaseResponseModel<PageListResponse>>(
      'https://localhost:7237/User',
      {
        headers: header
      } )
    .subscribe((data) => {
      let pageListResponse = data.data.pageList;
      this.usersList = pageListResponse
    })

    // const observable = interval(1000);
    // observable.subscribe(value => console.log(value));
  }

}
