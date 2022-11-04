public with sharing class AccountSearch {
    @AuraEnabled(Cacheable = true)
    public static list<Account> getAccountData(String textkey) {
        textkey = '%' + textkey + '%';
        list<Account> accLst = 
        [SELECT  Id, Name, Industry, Phone, Type From Account WHERE Name LIKE :textkey];
        if(accLst.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return accLst; 
    }

    @AuraEnabled(Cacheable=true)
public static List<Account> getAccountDataDetails(string Value){
   if(Value == 'ascending'){
       List<Account> AccSortList = [select Id, Name from Account ORDER BY Name ASC];
      if(!AccSortList.isEmpty()){
        return AccSortList;  
      }
      }
     else if(Value == 'descending'){
         List<Account> accLst = [select Id, Name from Account ORDER BY Name DESC];
         //null check
        If(!accLst.isEmpty())
              return accLst;  
     }
     else {
      }
      return null;
     }

    @AuraEnabled(Cacheable = true)
    public static list<Account> viewRecord(String recrdsID) {
        list<Account> accLst = 
        [SELECT  Id, Name, Industry, Phone, Type From Account WHERE id  =: recrdsID];
        if(accLst.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return accLst; 
    }

}