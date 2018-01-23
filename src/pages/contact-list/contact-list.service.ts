import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Injectable()
export class ContactListService {

   phoneContactList :any[] = [] ;
    constructor( private contacts: Contacts) {
        this.phoneContactList = [];
  }

getContacts(){
            var opts = {
                filter: "",
                multiple: true
            };
             this.contacts.find( ['*'], opts ).then(( contacts ) => {
                
                alert("contacts count " + contacts.length);
                for ( var i = 0; i < contacts.length; i++ ) {
                 
                    let phNumberCount = contacts[i].phoneNumbers.length;
                    for ( let phItr = 0; phItr < phNumberCount; phItr++ ) {
                        this.phoneContactList.push( new String( contacts[i].displayName + '-'+ contacts[i].phoneNumbers[phItr].value ) );
                     }

                     this.phoneContactList.sort((a,b)=> {
                         if ( a.toLowerCase() > b.toLowerCase() ){
                             return 1;
                         }
                         else{
                             return -1;
                         } 
                        
                     });

                }

            }, ( error ) => {
                alert( error );
                console.log( error );
            });

            return this.phoneContactList;
     }
}