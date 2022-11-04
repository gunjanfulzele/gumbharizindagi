import { LightningElement,api,track, wire} from 'lwc';
import InsertContacts from '@salesforce/apex/insertContact.InsertContacts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ViewContactsTable from '@salesforce/apex/insertContact.ViewContactsTable';
import ViewContacts from '@salesforce/apex/insertContact.ViewContacts';

 
export default class CreateOpportunity extends LightningElement {
@track columns = [];    
totalContact = [];   
@api firstname;
@api lastname;
@api email;
@track isShowModal = false;
@track isEditModal = false;
@track isViewModal = false;
@api contId;
@api consId;
connectedCallback(){
    this.columns = [
       {label:'Name', fieldName:'Name'},
       {label:'Email', fieldName:'Email' },
       {label:'view',type:'button', typeAttributes:{
           label: 'View',
           name: 'View',
           title: 'View',
           disabled: false,
           value: 'view',
           iconPosition: 'left',
           variant:'base'
           }
       },
       {label:'Edit',type:'button', typeAttributes:{
        label: 'Edit',
        name: 'Edit',
        title: 'Edit',
        disabled: false,
        value: 'Edit',
        iconPosition: 'left',
        variant:'base'
        }
    },
    {label:'Delete',type:'button', typeAttributes:{
        label: 'Delete',
        name: 'Delete',
        title: 'Delete',
        disabled: false,
        value: 'Delete',
        iconPosition: 'left',
        variant:'base'
        }
    }
    
   ];
}

@wire(ViewContactsTable)
wireContact({error,data}){
    if(data){
        this.totalContact = data;
        this.error = undefined;
        console.log(this.totalContact)
    }
    else if (error){
        console.error(error)
    }
}
@wire (ViewContacts, {contId :'$consId'})
wireContacts;

    handlefirstName(event){
        this.firstname=event.target.value;
        console.log(this.firstname);
    }
    handlelastName(event){
        this.lastname=event.target.value;
        console.log(this.lastname);
    }
    handleEmail(event){
        this.email=event.target.value;
        console.log(this.email);
    }
    onSaveContact(){
        console.log("Enter in Save ");
        InsertContacts({
            fName : this.firstname,
            lName : this.lastname,
            emails : this.email})
        .then(addContactresult =>{
            console.log("addContactresult:"+JSON.stringify(addContactresult))
            const event = new ShowToastEvent({
                title: 'Success',
                message: 'Contact Created Successfully',
                variant: 'success',
                mode: 'dismissable'
            });
            this.dispatchEvent(event);
        })
        .catch(error =>{
            console.log("error:"+JSON.stringify(error))

        })
    }

    showModalBox(){
        this.isShowModal = true;
    }
    hideModalBox() {  
        this.isShowModal = false;
    }

    handlerowaction(event){
        const actionName=event.detail.action.name;
        const row= event.detail.row;
        const Ids = row.Id;
        if(actionName==='View'){
            this.isViewModal = true;
            this.consId=Ids;
        }
        else if(actionName==='Edit'){
            this.isEditModal = true;
        }
        else if(actionName==='Delete'){
            alert('Are you sure');
        }
    }
    hideEditModal() {  
        this.isEditModal = false;
    }
    hideViewBox() {  
        this.isViewModal = false;
    }

}