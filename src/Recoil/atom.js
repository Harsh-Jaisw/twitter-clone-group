import { atom } from "recoil";
export const isLoginAtom = atom({
    key : 'isLogin' ,
    default : true
})  

// export const tweetDataAtom= atom({
//     key:'tweetData',
//     default: {}
// })
export const isTweetPost = atom({
    key: "isPost",
    default: 0,
  });
  

  export const userProfile = atom({
    key: "userProfile",
    default: {},
  });
  export const forPassingId = atom({
    key: "Passid",
    default: 1,
  })
  
  export const isTweet = atom({
    key: "isTweet",
    default: 0,
  });
  
  export const userTweet = atom({
    key: "userTweet",
    default: {},
  });
  
  export const userTweetProfile = atom({
    key: "userTweetProfile",
    default: {},
  });
  export const newtweet = atom({
    key:"tweets",
    default:[],
  })
  export const indexAtom= atom({
    key:'indices',
    default:0,
  })