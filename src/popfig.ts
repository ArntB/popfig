import {PopfigBrowser} from "./popfigbrowser"
import {DeviceStrategy} from "./devicestrategy"

export class Popfig {
    static configMap:any = {
        "localhost": { env: "dev"},
        "default": { env: "dev"}
    }
    static SERVICE_TYPES: any = {
        DELTA: "DELTA",
        STORAGE: "STORAGE",
        TRACKING: "TRACKING"
    }
    
    static instance: Popfig;
	static setConfigMap(map: any){
       Popfig.configMap = map;
    }
    static setDeviceStrategy(strategy: DeviceStrategy){
        Popfig.instance = new Popfig(strategy);
    }
    
    static getInstance(): Popfig{
        if(!Popfig.instance){
            Popfig.instance = new Popfig();
        }
        return  Popfig.instance;
    }
    static urlfor(service_type:string): UrlBuilder{
        return new UrlBuilder(service_type, Popfig.getInstance());
    }
    
    private config: any;
    constructor(private deviceStrategy: DeviceStrategy = null){
        
    }
    
    load(success: ()=>void, error: (error:any)=>void){
        var configMap = Popfig.configMap[this.deviceStrategy.host()] || Popfig.configMap["default"] || "dev";
        if(configMap){
            this.deviceStrategy.readConfig(configMap.env,(config)=>{
                this.config = config;
                success();
            }, error);
        }
    }
    getServiceType(service_type:string): any {
        return this.config.services.filter(x=>x.SERVICE_TYPE === service_type );
    }
    getService(id:string):any{
        return this.config.services.find(x=>x.id === id);
    }
}

export class UrlBuilder{
    private url: string;
    constructor(private serviceId:string, private popfig: Popfig){
        var cfg = popfig.getService(serviceId);
        this.url = cfg.URL;
    }
    path(path:string){
        return this.url + path;
    }
    root(){
        return this.url;
    }
}