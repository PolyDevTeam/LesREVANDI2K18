import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
    })
};

export interface Battery {
    name: String,
    level: number
}

export interface BatteryResponse {
    status: String,
    code: number,
    data: Array<Battery>,
}

@Injectable({
  providedIn: 'root'
})
export class BatteryService {
    constructor(private http: HttpClient) { 

    }

    public getBatteries() : Observable<BatteryResponse> {
        return this.http.get<BatteryResponse>('http://n2i.stephanenativel.fr/n2i/batteries', httpOptions)
        .pipe();
    }
}
