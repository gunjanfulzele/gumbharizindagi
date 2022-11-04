import { LightningElement, track, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountSearch.getAccountData';
export default class AccountSearch extends LightningElement {
    searchKey;
    @track accounts;
    totalAccounts
    visibleAccounts
    visibleAccountdetail
    //This Funcation will get the value from Text Input.
    handelSearchKey(event){
        this.searchKey = event.target.value;
    }
    //This funcation will fetch the Account Name on basis of searchkey
    SearchAccountHandler(){
        //call Apex method.
        getAccountData({textkey: this.searchKey})
        .then(result => {
                this.accounts = result;
        })
        .catch( error=>{
            this.accounts = null;
        });
    }
    @wire(getAccountData)
    wiredaccount({error, data}){
        if(data){ 
            this.totalAccounts = data
            console.log(this.totalAccounts)
        }
        if(error){
            console.error(error)
        }
    }
    updateAccountHandler(event){
        this.visibleAccounts=[...event.detail.records]
        console.log(event.detail.records)
    }
    View = false;
    handleClick() {
        this.View = true;
    }
    ViewDetails(event){
        this.visibleAccountdetail=[...event.detail.records]
        console.log("Done");
    }
    cols = [
        {label:'Account Name', fieldName:'Name' , type:'text'},
    ]
}