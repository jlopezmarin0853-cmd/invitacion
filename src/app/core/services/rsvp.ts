import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment }
from '../../../environments/environment';

export interface RsvpRequest {

  nombre: string;

  telefono: string;

  mensaje: string;

}

export interface RsvpResponse {

  success: boolean;

  message?: string;

}

@Injectable({
  providedIn: 'root'
})
export class RsvpService {

  private readonly url =
    environment.googleAppsScript;

  constructor(
    private http: HttpClient
  ) {}

 submit(
  data: FormData
){

  return this.http.post(
    this.url,
    data
  );

}

}
