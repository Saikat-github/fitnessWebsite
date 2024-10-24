import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite auth service: signup error:", error)
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service: getCurrentUser:", error);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service: logut error", error);
        }
    }

    async sendPasswordRecoveryEmail (email, url) {
        try {
            await this.account.createRecovery(
                email, url
            )
            console.log("Recovery email sent")
        } catch (error) {
            console.log(error.message);
        }
    }

    async resetPassword (userId, secret, newPassword) {
        try {
            await this.account.updateRecovery(userId, secret, newPassword, newPassword);
            console.log('Password reset successful');
        } catch (error) {
            console.log(error.message);
        }
    }

    async googleAuth (rootUrl) {
        try {
            return await this.account.createOAuth2Session('google', rootUrl, rootUrl);
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;