import {Popfig,PopfigServer} from '../index';
Popfig.configMap = {
	"localhost": { env: "dev"},
	"default": { env: "dev"},
};
Popfig.setDeviceStrategy(new PopfigServer());

var serviceConfig = Popfig.getInstance().getService("SOME:TEST:SERVICE");
if(!serviceConfig) throw "Config not loaded";