import { LightningElement, wire} from 'lwc';
import getFoodItem from '@salesforce/apex/swiggySearch.getFoodItem';
import foodImage from '@salesforce/resourceUrl/Pizza_Image'

export default class swiggySearch extends LightningElement {
    itemName 

    swiggyImage = foodImage;
    ishow = false

    @wire (getFoodItem,{itemName:'$itemName'})
    itemList 
    
    handleKeyChange(event){
        this.itemName = event.target.value;
    }
    clickedButtonLabel;
    
    handleClick(event) {
        this.ishow = true
        this.clickedButtonLabel = event.target.label;
    }
}