import {LightningElement, api, wire, track} from 'lwc';
import viewRecord from '@salesforce/apex/AccountSearch.viewRecord';

export default class accountSearch extends LightningElement {
@api accounts;
@api  recrdsID;
@api recid
accountsDeatails

@wire (viewRecord, {recrdsID:'$recid'})
wireAcccount

get records(){
    return this.visibleAccountDetail
}
get disableButton(){
    return !(this.options && this.options.data && this.options.data.length);
}
trialRecordIdFromParent_
@api
get trialRecordIdFromParent() {
  return this.trialRecordIdFromParent_;
}
set trialRecordIdFromParent(value) {
  this.trialRecordIdFromParent_ = value;
  this.getPloDataOfTreatement();
} 
showEdit(event) {
    this.showEditComponent = true;
    const recId =  event.detail.row.Id;
    this.recrdsID =  recId
    const actionName = event.detail.action.name;
    console.log(recId)
    console.log(actionName) 
  }

  @track isModalOpen = false;
openModal() {
    this.isModalOpen = true;
}
closeModal() {
    this.isModalOpen = false;
}
submitDetails() {
    this.isModalOpen = false;
}
  

}
