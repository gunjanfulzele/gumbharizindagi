import { LightningElement,api } from 'lwc';

export default class RecordViewDemo extends LightningElement {
 @api Account;
  @api recordId;
}