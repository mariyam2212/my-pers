import { Get } from './HttpMethods'
import { Post } from './HttpMethods'
// import { URL } from 'global/url'

export const Header = {
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // withCredentials:true
   }
}

// export const LoginHandler = async data => {
//    try {
//       const res = await Post(URL.APPLOGIN, data, Header)
//       return res && res.data ? res.data : null
//    } catch (err) {
//       return null
//    }
// }
