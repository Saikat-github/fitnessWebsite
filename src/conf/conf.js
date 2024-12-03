const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    web3accesskey: String(import.meta.env.VITE_APPWRITE_WEB3_ACCESSKEY),
    web3url: String(import.meta.env.VITE_APPWRITE_WEB3_URL),
    telegramBotToken: String(import.meta.env.VITE_TELEGRAM_BOT_TOKEN),
    telegramChatId: (import.meta.env.VITE_TELEGRAM_CHAT_ID)
}

export default conf;

