import TagSharpIcon from "@mui/icons-material/TagSharp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
const navigate = useNavigate;
export const arrs = [
  {
    icon: <HomeIcon style={{ fontSize: "28px" }} />,
    text: <Link to="/"><span style={{color:'#0F1419'}}>Home</span> </Link>,
  },
  { icon: <TagSharpIcon style={{ fontSize: "28px" }} />, text: "Explore" },
  {
    icon: <NotificationsNoneOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Notification",
  },
  { icon: <EmailOutlinedIcon style={{ fontSize: "28px" }} />, text: "Message" },
  {
    icon: <BookmarkBorderOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Bookmark",
  },
  {
    icon: <FeaturedPlayListOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Lists",
  },
  {
    icon: <PersonOutlineOutlinedIcon style={{ fontSize: "28px" }} />,
      text: <Link to="/profile"><span style={{ color: '#0F1419' }}>Profile</span></Link>,
  },
  {
    icon: <MoreHorizOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "more",
  },
];
export const Trending = [
    {
      id: 1,
      Trends: "Entertainment · Trending",
      Hash: "#PushpaTheRule",
      Tweets: "31.4K Tweets",
    },
    {
      id: 2,
      Trends: "Trending in India",
      Hash: "#बागेश्वर_धाम_सरकार",
      Tweets: "Trending with #BageshwarDham",
    },
    {
      id: 3,
      Trends: "Trending in Pakistan",
      Hash: "#पाकिस्तान युद्ध",
      Tweets: "Tehreeke taliban pakistan on fire",
    },
    {
      id: 4,
      Trends: "Trending in India",
      Hash: "#PawanKalyanOnAHA",
      Tweets: "Trending with BAAP OF ALL EPISODES",
    },
    {
      id: 5,
  
      Trends: "Trending in India",
      Hash: "#PawanKalyanOnAHA",
      Tweets: "Trending with BAAP OF ALL EPISODES",
    },
  ];
  
  export const Follow = [
    {
      id: 1,
  
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
    {
      id: 2,
  
      src: "https://www.cricketsoccer.com/wp-content/uploads/2020/09/i.jpg",
      text: "Rohit",
      text2: "rohits@gmail.com",
    },
    {
      id: 3,
  
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "Mahi",
      text2: "virat@gmail.com",
    },
    {
      id: 4,
  
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
  ];

export const tweetPosts = [
  {
     id:0,
      name  : 'The White House',
      handlerName : '@The White House' ,
      organization : 'United States government organization',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile:  'https://cdn.britannica.com/19/77419-050-7785C04B/White-House-portico-Pennsylvania-Avenue.jpg',   
      tweetPic : 'https://cdn.britannica.com/19/77419-050-7785C04B/White-House-portico-Pennsylvania-Avenue.jpg',
    
      tweetCount : 100,
      retweetCount : 100 ,
      likesCount : 100,
      tweetComment:[],
      inrDcr:false,
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              id:0,
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://media.istockphoto.com/id/137169606/photo/the-white-house-in-washington-dc.jpg?s=612x612&w=0&k=20&c=6FUEZRJWq47hAlfjy1uLC5112djoi5NKCTdAGiqMvO0=',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                     
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          },
          {
              id:1,
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              profile: 'https://media.gettyimages.com/id/149431145/photo/the-north-portico-of-the-white-house-washington-dc-usa.jpg?s=612x612&w=gi&k=20&c=RhO8_X1ZM6KMDR6vnwG9l4h6AEJSGPjqboFvWXO84zo=',
              tweetPic : 'https://media.gettyimages.com/id/149431145/photo/the-north-portico-of-the-white-house-washington-dc-usa.jpg?s=612x612&w=gi&k=20&c=RhO8_X1ZM6KMDR6vnwG9l4h6AEJSGPjqboFvWXO84zo=',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          }
      ]
  },
  {
      id:1,
      name : 'Mukund',
      handlerName : '@kumarmukund',
      organization : '',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile:  'https://i0.wp.com/crickerala.com/wp-content/uploads/2020/04/Smiling-Face-Virat-Kohli.jpg?resize=960%2C580&ssl=1',
      tweetPic : 'https://i0.wp.com/crickerala.com/wp-content/uploads/2020/04/Smiling-Face-Virat-Kohli.jpg?resize=960%2C580&ssl=1' ,
      tweetCount : 200,
      retweetCount : 200 ,
      likesCount : 200,
      tweetComment:[],
      inrDcr:false,
      viewsCount : '10k',
      hastags : ['#wildLife','#photoGraphy'],
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Lieutenant_General_Manoj_Mukund_Naravane_%28cropped%29.jpg',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              // profile : 'https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Manoj_Mukund_Naravane_PVSM_AVSM_SM_VSM_ADC_%281%29_%28cropped%29.jpg',
              tweetPic : 'https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Manoj_Mukund_Naravane_PVSM_AVSM_SM_VSM_ADC_%281%29_%28cropped%29.jpg',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          }
      ],
  },
  {
      id:2,
      name : 'Usain St. Leo Bolt',
      handlerName : '@usainbolt',
      organization : '',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile : 'https://cdn.britannica.com/10/224310-050-C338430A/Usain-Bolt-gold-medal-4-x-100-meter-relay-Rio-de-Janeiro-Olympics-2016.jpg',
      tweetPic : 'https://cdn.britannica.com/10/224310-050-C338430A/Usain-Bolt-gold-medal-4-x-100-meter-relay-Rio-de-Janeiro-Olympics-2016.jpg',
      tweetCount : 700,
      retweetCount : 700 ,
      likesCount : 900,
      tweetComment:[],
      inrDcr:false,
      viewsCount : '100k',
      refLink : 'https://www.globalwildlife.org/blog/',
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Usain_Bolt_Olympics_cropped.jpg/450px-Usain_Bolt_Olympics_cropped.jpg',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Usain_Bolt_smiling_Berlin_2009.JPG/481px-Usain_Bolt_smiling_Berlin_2009.JPG',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          }
      ],
  },
  {
      id:3,
      name : 'Andrew Elliott',
      handlerName : '@andrewje_home',
      organization : '',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile: 'https://pbs.twimg.com/profile_images/378800000790387702/e24150ded8f848ca487c5b22ae396dbd_400x400.jpeg' ,
      tweetPic : 'https://pbs.twimg.com/profile_images/378800000790387702/e24150ded8f848ca487c5b22ae396dbd_400x400.jpeg',
     
      tweetCount : 400,
      retweetCount : 327 ,
      likesCount : 90,

      tweetComment:[],
inrDcr:false,      viewsCount : '7k',
      hastags : ['#sports','#Winners'],
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          }
      ],
  },
  {
      id:4,
      name : 'RVCJ Media',
      handlerName : '@RVCJ_FB',
      organization : '',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile:'https://pbs.twimg.com/media/FnLAWPyaMAEsuY3?format=jpg&name=large' ,
      tweetPic : 'https://pbs.twimg.com/media/FnLAWPyaMAEsuY3?format=jpg&name=large',
      tweetCount : 650,
      retweetCount : 699 ,
      likesCount : 900,
      tweetComment:[],
      inrDcr:false,
      viewsCount : '17k',
      hastags : ['#HockeyLover' , '#Hockey' , '#Team India'],
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://pbs.twimg.com/media/FWBTuOrUcAA0SPo.jpg:large',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://pbs.twimg.com/media/FUlso_uVsAAP0jx.jpg:large',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          }
      ],
      

  } ,
  {
      id:5,
      name : 'BJP',
      handlerName : '@BJP4India',
      organization : '',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile:'https://images.cnbctv18.com/wp-content/uploads/2022/12/Delhi-BJP-celebrate-Gujarat-elections.jpg' ,
      tweetPic : 'https://images.cnbctv18.com/wp-content/uploads/2022/12/Delhi-BJP-celebrate-Gujarat-elections.jpg',
      tweetCount : 650,
      retweetCount : 699 ,
      likesCount : 900,
      tweetComment:[],
      inrDcr:false,
      viewsCount : '17k',
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'ram',
                      handlerName : 'ram@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },
                  {
                      name : 'sham',
                      handlerName : 'sham@gmail.com',
                      tweetReplyText : 'hello everyone',
                      tweetCount : 100,
                      retweetCount : 100 ,
                      likesCount : 100,
                      tweetComment:[],
                      inrDcr:false,
                      viewsCount : '102k',
                  },

              ]
          }
      ],
  },
  {
      id:6,
      name : 'Sudarsan Pattnaik',
      handlerName : '@sudarsansand',
      organization : '',
      profile:'https://www.oneindia.com/img/2016/04/29-1461902794-sudarshan-pattnaik.jpg' ,
      tweetText :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      tweetPic : 'https://www.oneindia.com/img/2016/04/29-1461902794-sudarshan-pattnaik.jpg',
      tweetCount : 100,
      retweetCount : 509 ,
      likesCount : 450,
      tweetComment:[],
      inrDcr:false,
      viewsCount : '79k',
      hastags : ['#Freedom Fighter','#India'],
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          }
      ],
  },
  {
      id:7,
      name : 'Arvind Kumar',
      handlerName : '@arvindtw',
      organization : '',
      profile:'https://i0.wp.com/www.nagasconnect.com/wp-content/uploads/2020/08/Arvind-Kumar-IB-Director.jpg?fit=975%2C604&ssl=1',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      tweetPic : 'https://i0.wp.com/www.nagasconnect.com/wp-content/uploads/2020/08/Arvind-Kumar-IB-Director.jpg?fit=975%2C604&ssl=1',
      tweetCount : 100,
      retweetCount : 509 ,
      likesCount : 450,
      tweetComment:[],
      inrDcr:false,
      viewsCount : '79k',
      refLink : 'https://twitter.com/AshwiniVaishnaw',
      hastags: ['#Electronics','#iphone'],
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          }
      ],
  },
  {
      id:8,
      name : 'kimkk',
      handlerName : '@ippittipapitti',
      organization : '',
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile : 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/GWdOBJKUHt-np_On_d4GHlJB20A=/960x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/6SYFQD3KK2SEQCXJQYXH7K4RKM.jpg',
      tweetPic : 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/GWdOBJKUHt-np_On_d4GHlJB20A=/960x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/6SYFQD3KK2SEQCXJQYXH7K4RKM.jpg',
      tweetCount : 10,
      retweetCount : 50 ,
      likesCount : 40,

      tweetComment:[],
inrDcr:false,      viewsCount : '9k',
      hastags : ['#bcm112','#students','#education','#allGovernmets'] ,
      refLink : 'https://twitter.com/ippittipapitti',
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          }
      ],
  },
  {
      id:9,
      name : 'Dainik Bhaskar',
      handlerName : '@DainikBhaskar',
      organization : 'Tv News' ,
      tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      tweetPic : 'data:image/png;base64,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',
      tweetCount : 10,
      retweetCount : 50 ,
      likesCount : 40,

      tweetComment:[],
inrDcr:false,      viewsCount : '9k',
      hastags : ['#Education','#Rajasthan'],
      refLink : 'https://dainik-b.in/ekPIEaD5Jwb',
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          }
      ],
  },
  {
      id:10,
      name : 'Madhya Pradesh Tourism',
      handlerName : '@MPTourism',
      organization : 'Mp tourism',
      tweetText :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      profile: 'https://www.tourmyindia.com/states/madhyapradesh/image/mp-tourism.webp',
      tweetPic : 'https://www.tourmyindia.com/states/madhyapradesh/image/mp-tourism.webp',
      retweetCount : 50 ,
      likesCount : 40,

      tweetComment:[],
inrDcr:false,      viewsCount : '9k',
      hastags : ['#BIGcat','#HeartofIndia'],
      refLink : 'https://www.mptigerfoundation.org/news-corner/blog' ,
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022' ,
      tweets : [
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
          {
              tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
              tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              tweetComment:[],
              inrDcr:false,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          }
      ],

  }
]




export const dateArray =  Array(31).fill(0).map((ele,index)=> ele+index)
export const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'Jun',
    'July',
    'Auguest',
    'September',
    'October',
    'November',
    'December'
]
export const yearArray = Array(25).fill(2000).map((year,index) => year + index)
