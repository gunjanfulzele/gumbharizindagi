public with sharing class swiggySearch {
    @AuraEnabled (cacheable=true)

    public static list<Food_Detail__c>  getFoodItem(String itemName){

        return [SELECT id, Name, Description__c, Food__c, Food__r.Name, Rate__c FROM Food_Detail__c WHERE Food__r.Name =: itemName];

    }

}

