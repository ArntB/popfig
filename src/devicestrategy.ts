export interface DeviceStrategy{
    readConfig(env:string): any;
    host(): string;
}