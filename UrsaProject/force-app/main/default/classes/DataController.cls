public with sharing class DataController {
    @AuraEnabled(cacheable= true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name FROM Account];
    }
}
