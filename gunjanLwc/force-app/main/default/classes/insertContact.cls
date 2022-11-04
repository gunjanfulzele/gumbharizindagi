public with sharing class insertContact {
    @AuraEnabled(cacheable=true)
    public static list<Contact> ViewContactsTable(){
       list<Contact> colist= [Select Id, Name, Email from Contact];
       return colist;
    }
    @AuraEnabled(cacheable=true)
    public static list<Contact> ViewContacts(String contId){
       list<Contact> colist= [Select Id, FirstName, LastName, Email from Contact WHERE Id =: contId];
       return colist;
    }
    @AuraEnabled
    public static list<Contact> InsertContacts(string fName, string lName, string emails){
        List<Contact> con = new List<Contact>();
        if(lName != NULL){
            Contact conObj= new Contact();
            conObj.FirstName=fName;
            conObj.LastName=lName;
            conObj.Email=emails;
            con.add(conObj);
        }
        if(!con.isEmpty()){
            insert con;
            return con;
        }
        return NULL;
    }
    @AuraEnabled(cacheable=true)
    public static list<Contact> UpdateContacts(ID contactId, string editfName, string editlName, string editemail){
        List<Contact> conlist = new List<Contact>();
        if(contactId != NULL){
            Contact conObj= new Contact();
            conObj.Id=contactId;
            conObj.FirstName=editfName;
            conObj.LastName=editlName;
            conObj.Email=editemail;
            conlist.add(conObj);
        }
        if(!conlist.isEmpty()){
            update conlist;
            return conlist;
        }
        return NULL;
    }


}
