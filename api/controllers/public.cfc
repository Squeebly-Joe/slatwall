component accessors="true" extends="Slatwall.org.Hibachi.HibachiController"{
    
    property name="fw" type="any";
    property name="hibachiService" type="any";
    property name="hibachiUtilityService" type="any";
    
    this.publicMethods='';
    this.publicMethods=listAppend(this.publicMethods, 'get');
    this.publicMethods=listAppend(this.publicMethods, 'post');
    
    public void function init( required any fw ) {
        setFW( arguments.fw );
    }
    
    public any function before( required struct rc ) {
        getFW().setView("public:main.blank");
        arguments.rc.requestHeaderData = getHTTPRequestData();
        arguments.rc['ajaxRequest'] = true;
        param name="rc.headers.contentType" default="application/json"; 
        arguments.rc.headers["Content-Type"] = rc.headers.contentType; 
    }
    
    public any function get( required struct rc ) {
        var publicService = getService('PublicService');
        if ( structKeyExists(arguments.rc, "context") && arguments.rc.url contains "getCart"){
            publicService.invokeMethod("getCartData", {data=arguments.rc});
        }else if ( structKeyExists(arguments.rc, "context") && arguments.rc.url contains "getAccount"){
            publicService.invokeMethod("getAccountData", {data=arguments.rc});
        }else if ( StructKeyExists(arguments.rc, "context") && rc.context != "get"){
            publicService.invokeMethod("#arguments.rc.context#", {data=arguments.rc});
        }
    }
    
    public any function post( required struct rc ) {
        param name="arguments.rc.context" default="save";
        var publicService = getService('PublicService');
        
        if (arguments.rc.context != "get" && arguments.rc.url contains "process"){
            publicService.doProcess(rc);
        }else if (arguments.rc.url contains "getCart"){
            rc.context = "getCartData";
            this.get(rc);
        }else if(arguments.rc.url contains "getAccount"){
            rc.context = "getAccountData";
            this.get(rc);
        }else if ( StructKeyExists(arguments.rc, "context") && rc.context != "get"){
            publicService.invokeMethod("#arguments.rc.context#", {data=arguments.rc});
        }else{
            this.get(rc);
        }
    }
    
}
