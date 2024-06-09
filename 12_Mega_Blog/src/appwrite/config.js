import conf from '../conf' // will need this for createDocument()
import { Client, ID, Databases, Storage, Query } from 'appwrite'

// Generic Service here that is related to DB, Storage (buckets)
export class Service {
  // STEP # 1: create 2 new properties: 'client', 'databases', 'bucket' (storage)
  client = new Client()
  databases
  bucket
  // no account API this time, rather DB, Storage, Query API
  // INITIALIZE all inside constructor()
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client) // we already created a bucket, ID in our .env/conf.js
    // NO createBucket(), directly createFile() for the bucket
  }
  // CRUD -> C
  // createPost = create a Document -> code inside createPost() = wrapper/service/generic
  // featuredImage = fileId returned by bucket.uploadFile()
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // ID.unique()
        {
          // all the attributes below, canadd even more (thru appwrtie console/GUI) for my own custom use case
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log(`Appwrite error :: createPost :: ${error}`)
      return false
    } finally {
      console.log(`Done with createPost()`)
    }
  }
  // CRUD -> U
  // slug is kpet oputside to first select the Document as per syntax of updateDocument()
  // then, pass all params to update any of those
  // can skip userId as only the creator-userId can edit
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status } // data (optional)
      )
    } catch (error) {
      console.log(`Appwrite error :: updatePost :: ${error}`)
      return false
    } finally {
      console.log(`Done with updatePost()`)
    }
  }
  // CRUD -> D
  async deletePost(slug) {
    try {
      // explicit 'return' (that belongs to deletePost()) below is optional
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true // the frontend can handle this 'true' accordingly as it confirms the delete operation
    } catch (error) {
      console.log(`Appwrite error :: deletePost :: ${error}`)
      return false // left to be handled by frontend
    } finally {
      console.log(`Done with deletePost()`)
    }
  }

  // CRUD -> R (Get 1, Get all posts)
  // Get 1:
  async getPost(slug) {
    try {
      // below explicit 'return' = return the specific document (not return true)
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
        // queries are optional - Docs
      )
    } catch (error) {
      console.log(`Appwrite error :: getPost :: ${error}`)
      return false // left to be handled by frontend
    } finally {
      console.log(`Done with getPost()`)
    }
  }

  // Get all posts: ENTER QUERIES (INDEX MUST) for LIST
  async getPosts(queries = [Query.equal('status', 'active')]) {
    // better is 'enum' - future proof
    try {
      // 'return' all 'returned' queries
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries // [ ...queries, <more queries>] = DOCS = Array DESTRUCTURING
        // can add more args. here like 'Pagination' either another query in side [] or 100 - separate arg.
      )
    } catch (error) {
      console.log(`Appwrite error :: listPosts :: ${error}`)
      return false // left to be handled by frontend
    } finally {
      console.log(`Done with listPosts()`)
    }
  }

  // File Upload Services - 3
  // 1. uploadFile() = createFile()
  async uploadFile(file) {
    try {
      // returns the fileID only - used for deleteFile + createPost's featuredImage arg.
      return await this.bucket.createFile(appwriteBucketId, ID.unique(), file) // NOT doc.gEBId('uploader).files[0]
    } catch (error) {
      console.log(`Appwrite error :: uploadFile :: ${error}`)
      return false // left to be handled by frontend
    } finally {
      console.log(`Done with uploadFile()`)
    }
  }
  // 2. Delete File
  async deleteFile(fileId) {
    // fileId to be input from Frontend in the requisite format
    try {
      // explicit 'return' (that belongs to deleteFile()) below is optional
      await this.bucket.deleteFile(appwriteBucketId, fileId)
      return true
    } catch (error) {
      console.log(`Appwrite error :: deleteFile :: ${error}`)
      return false // left to be handled by frontend
    } finally {
      console.log(`Done with deleteFile()`)
    }
  }
  // 3. Get File Preview - NO PROMISE thing
  getFilePreview(fileId) {
    try {
      // does return an image depending upon the file type
      // here, it's 'bucket', Docs: it's storage.getFilePreview()
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    } catch (error) {
      console.log(`Appwrite error :: getFilePreview :: ${error}`)
      return false // left to be handled by frontend
    } finally {
      console.log(`Done with getFilePreview()`)
    }
  }
}

const service = new Service()

export default service
