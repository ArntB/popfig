/// <reference path="../typings/main.d.ts" />
import {DeviceStrategy} from "./devicestrategy"
import * as fs from "fs"
import * as os from "os"

export class PopfigServer implements DeviceStrategy { 
    readConfig(env:string): any{
        var fileName = "/config/popfig." + env+".json";
        var config = this;
        var r = new XMLHttpRequest();
        var obj = JSON.parse(fs.readFileSync(fileName, 'utf8'));
        return config;
    }
    
    host(){
        return os.hostname();
    }
}