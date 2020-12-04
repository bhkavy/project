import { Injectable } from '@angular/core';

export interface IContact{
    id: number;
    name: string;
    phone: number;
    email: string;
}

@Injectable({
    providedIn: 'root'
})
export class Contact implements IContact {
    id: number;
    name: string;
    phone: number;
    email: string;
}
