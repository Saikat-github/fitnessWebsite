import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class DbService {
    client = new Client();
    databases;
    storage

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({applicantGoal, applicantAge, applicantGender, agreedToContinue, planChoosen, applicantName, phoneNo, email, instaID, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                userId,
                {
                    applicantGoal, 
                    applicantAge, 
                    applicantGender, 
                    agreedToContinue, 
                    planChoosen, 
                    applicantName,
                    phoneNo, 
                    email, 
                    instaID, 
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite database error:createPost:", error)
        }
    }

    async deletePost(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            )
            return true;
        } catch (error) {
            console.log("Appwrite database error: deletePost:", error);
            return false;
        }
    }

    async getPost (id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            )
        } catch (error) {
            console.log("Appwrite database error: getDocument:", error);
            throw error            
        }
    }

};


const dbService = new DbService();
export default dbService;
