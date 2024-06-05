// PRODUCTION-GRADE approach
// sometimes, env vars are NOT loaded properly thru import.meta.env
// sometimes, if ID values of env contains only numbers, it's treated as numbers (NOT String) when it actually is a string
const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf
// all key-value pairs exported to use in other parts of the app
