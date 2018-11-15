const keys = require('./config/keys.json');
import * as firebase from 'firebase';

export class Auth {

    private static readonly TOKEN_KEY = 'access_token';

    private firebaseAuth: firebase.auth.Auth;
    private logFunction: (...text: string[]) => void;

    constructor(logFunction: (...text: string[]) => void){
        firebase.initializeApp(keys);
        this.logFunction = logFunction;
        this.firebaseAuth = firebase.auth();
    }

    public async access(){
        try {
            // const token = localStorage.getItem(Auth.TOKEN_KEY);
        }
        catch (e){
            alert(e)
        }
    }

    public async signUp(){
        try {
            const email = prompt('Insert email') || '';
            const password = prompt('Insert password (a random one, this is not even secure whatever)') || '';
            const confirmPassword = prompt('Confirm password') || '?';
            if (password !== confirmPassword) throw new Error('Password doesn\'t match')
            const credentials = await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
            const token = await this.firebaseAuth.currentUser!.getIdToken(true)
            this.logFunction('User information', JSON.stringify(credentials.user, null, 2));
            this.logFunction('Token', token);
            localStorage.setItem(Auth.TOKEN_KEY, token);
        }
        catch (e){
            alert(e)
        }
        
    }

    public login(){
        
    }

}