const keys = require('./keys.json');
import * as Msal from 'msal';

export class Auth {

    private static readonly APPLICATION_CONFIG = {
        clientID: keys.clientID,
        authority: "https://login.microsoftonline.com/tfp/b2ctestb2ctest.onmicrosoft.com/b2c_1_google",
        graphScopes: ['no-op']
    };


    private logCallback: (...text: string[]) => void;
    private userAgentApplication: Msal.UserAgentApplication;

    constructor(logCallback: (...text: string[]) => void){
        this.logCallback = logCallback;
        this.userAgentApplication = new Msal.UserAgentApplication(Auth.APPLICATION_CONFIG.clientID, Auth.APPLICATION_CONFIG.authority, this.authCallback)
    }

    public async login(){
        try {
            const loginQueryParams = 'ulp=gasp';
            const loginResponse = await this.userAgentApplication.loginPopup(Auth.APPLICATION_CONFIG.graphScopes, loginQueryParams);
            const token = await this.userAgentApplication.acquireTokenSilent(Auth.APPLICATION_CONFIG.graphScopes);
            this.logCallback(loginResponse, token);
        }
        catch (e){
            this.logCallback(e);
        }
        
    }

    private authCallback(errorDesc: string, token: string, error: any, tokenType: any){
        this.logCallback(errorDesc, token, error, tokenType);
    }

}