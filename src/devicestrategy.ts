export interface DeviceStrategy{
    readConfig(env:string, success: (config:any)=>void, error: (error:any)=>void): any;
    host(): string;
}