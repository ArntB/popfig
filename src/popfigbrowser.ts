import {DeviceStrategy} from "./devicestrategy"

export class PopfigBrowser implements DeviceStrategy { 
    readConfig(env:string,success: (config:any)=>void, error: (error:any)=>void): any{
        var fileName = "/config/popfig." + env+".json";
        var r = new XMLHttpRequest();
        r.open("GET", fileName,true);
        r.onload = ()=>{
            if (r.readyState != 4 || r.status != 200){
                return;                    
            }
            var config = JSON.parse(r.responseText);
            success(config);
        };
        r.onerror = ()=>{
            error(r.response);
        };
        r.send();
    }
    
    host(){
        return location.hostname;
    }
}