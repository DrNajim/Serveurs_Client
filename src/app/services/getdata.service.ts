import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export type Root = Root2[]
export interface Root0 {
  id: number
  name: string
  ipAddress: string}

export interface Root2 {
  id: number
  name: string
  ipAddress: string
  sites: Site[]
}

export interface Site {
  id: number
  name: string
  domainName: string
  ipAddress: string
  active: boolean
}


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http:HttpClient) { }

  addserver(data:Root2){
    return this.http.post<Root2>("http://localhost:3000/servers", data)
}
addsites(data:Site){
  return this.http.post<Site>("http://localhost:3000/servers", data)

}
getserver(){
  return this.http.get<Root2[]>("http://localhost:3000/servers")
}
}

