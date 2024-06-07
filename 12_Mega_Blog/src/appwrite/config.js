import conf from '../conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

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
}

const service = new Service()

export default service
