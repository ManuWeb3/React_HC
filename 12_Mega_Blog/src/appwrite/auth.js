import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'
// don't copy-paste the code suggested by appwrite underneath above import - separation of concerns
export class AuthService {
  // YES, can write code in this way inside a class
  // STEP # 1:
  // first, create 2 properties: 'client' and 'account'
  client = new Client() // Docs
  // Better quality code practices
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
  }
  account = new Account(this.client) // Docs

  // STEP # 2:
  // create a user from account object returned above
  // CATCH statements in all below: when the API is NOT reached out in the first place
  async createAccount({ email, password, name }) {
    // DESTRUCTURED the passed obejct-arg.
    // our custom FAILSAFE construct = try/catch/finally (missing in Docs) (Better quality code practices - Zubin)
    try {
      // returns: 'User' (https://appwrite.io/docs/references/cloud/models/user)
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      ) // syntax - create(ID, email, '', '', '', '')
      if (userAccount) {
        // call 'login()' that lets a user direclty login after sign up
        return this.login({ email, password }) // return of createAccount -> return of login
        // noteworthy SYNTAX above: passing DESTRUCTURED args. to DESTRCTURED params.
      } else {
        return userAccount // whatever false value we got, we'll handle it
      }
    } catch (error) {
      // handle namesake as it's not our custom backend
      throw error
    } finally {
      console.log('Finally, done with createAccount()')
    }
  }
  // STEP # 3 and beyond:
  // create as many such methods as your app needs
  async login({ email, password }) {
    try {
      // returns: Session (https://appwrite.io/docs/references/cloud/models/session)
      return await this.account.createEmailPasswordSession(email, password) // return the resolved promise directly without intro a variable
    } catch (error) {
      throw error
    } finally {
      console.log('Finally, done with login()')
    }
    return null // due to throw, it's UNREACHABLE
  }

  async getCurrentUser() {
    try {
      // returns: 'User' (https://appwrite.io/docs/references/cloud/models/user)
      return await this.account.get() // check all such returned values in Frontend
    } catch (error) {
      //   throw error // clg() this time
      console.log(`Appwrite error: getCurrentUser: ${error}`)
    } finally {
      console.log('Finally, done with getCurrentUser()')
    }
    // REACHABLE code due to "no throw" here
    return null // REASON: if API not reached at, error returned + caught -> fn.() returns null in such a case
  }

  async logout() {
    try {
      await this.account.deleteSessions() // all sessions on all devices of the user
    } catch (error) {
      console.log(`Appwrite error: getCurrentUser: ${error}`)
    } finally {
      console.log('Finally, done with logout()')
    }
    return null
  }
}
// authService has access to all the methods/SERVICES in this class - exported
const authService = new AuthService()

// export default AuthService // avoid exporting class-only, rather export an object
export default authService // direct access to this variable to any component who imports it and uses its methods
