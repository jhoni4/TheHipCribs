import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Component, Input, OnInit} from '@angular/core';
import { UtilService } from './util.service';
// import { SortByPipe } from '../../pipes/sort-by.pipe';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';
import { Crib } from '../../crib';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }
  // cribo: any;

  getAllCribs() {
    return this.http.get('http://localhost:4200/data/cribs.json')
    .map((res) => res.json())
    .do((data) => console.log(data));
  }
  // getAllCribs(req?: any) {
  //       return this.http.get('data/cribs.json')
  //           .map((res: Response) => res.json());
  //   }
  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
