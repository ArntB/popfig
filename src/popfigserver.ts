/// <reference path="../typings/index.d.ts" />
import {DeviceStrategy} from "./devicestrategy"
import * as fs from "fs"
import * as os from "os"

export class PopfigServer implements DeviceStrategy { 
    readConfig(env:string,success: (config:any)=>void, error: (error:any)=>void): any{
        var fileName = "./config/popfig." + env+".json";
        var config = JSON.parse(fs.readFileSync(fileName, 'utf8'));
        console.log(config);
        success(config);        
    }
    
    host(){
        return os.hostname();
    }
}