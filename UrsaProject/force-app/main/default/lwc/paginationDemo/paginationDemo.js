import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/DataController.getAccountList'
export default class PaginationDemo extends LightningElement {

    totalAccounts
    visibleAccounts

    @wire(getAccountList)
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
}