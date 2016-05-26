import {DeviceStrategy} from "./devicestrategy"

export class PopfigBrowser implements DeviceStrategy { 
    readConfig(env:string): any{
        var fileName = "/config/popfig." + env+".json";
        var config = this;
        var r = new XMLHttpRequest();
        r.onreadystatechange = function (res) {
            if (r.readyState != 4 || r.status != 200){
                return;                    
            }
            config = JSON.parse(r.responseText);
        };
        r.open("GET", fileName, false);
        r.send();
        return config;
    }
    
    host(){
        return location.hostname;
    }
}