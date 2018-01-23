import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { ContactListService } from './contact-list.service';

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
  providers: [Contacts, ContactListService ]
})
export class ContactListPage {

   phoneContactList :any[] = [] ;
    constructor( public navCtrl: NavController,
        public navParams: NavParams,
        public platform: Platform,
        private contact:Contacts,
        private contactsListService:ContactListService) {
        this.phoneContactList = [];
        this.platform.ready().then(() => {
        this.phoneContactList = this.contactsListService.getContacts();

        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactListPage');

  }

}
