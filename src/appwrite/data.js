import { Client, Databases, Storage, ID } from "appwrite";
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

    async createPost({applicantGoal, applicantAge, applicantGender, agreedToContinue, planChoosen, applicantName, phoneNo, email, instaID, userId, weight, height, gymName}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteFormCollectionId,
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
                    userId,
                    weight,
                    height, 
                    gymName
                }
            )
        } catch (error) {
            console.log("Appwrite database error:createPost:", error)
            throw error
        }
    }

    async deletePost(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteFormCollectionId,
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
                conf.appwriteFormCollectionId,
                id
            )
        } catch (error) {
            throw error            
        }
    }

    //Free Session
    async createFreeSession({name, phoneNo, preferredTime}) {
        console.log(name, phoneNo, preferredTime)
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteFreeSessionCollectionId,
                ID.unique(),
                {
                    name, phoneNo, preferredTime
                }
            )
        } catch (error) {
            console.log("Appwrite database error:createPost:", error)
            throw error
        }
    }

};





const dbService = new DbService();
export default dbService;
