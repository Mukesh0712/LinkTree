import './App.css';

import ImgMukesh from './images/mukesh-profile.jpg';

import LinkCards from './Link-Tree/Link-Tree';

function App()
{
  const data = [
    {
      title : "linkedin",
      username : "mukeshpimpalkar0712",
      link : "https://www.linkedin.com/in/mukesh-pimpalkar-426228213/"
    },

    {
      title : "github",
      username : "mukeshpimpalkar0712",
      link : "https://github.com/Mukesh0712"
    },

    {
      title : "twitter",
      username : "mukeshpimpalkar0712",
      link : "https://twitter.com/Mukesh_0712?s=09"
    },

    {
      title : "facebook",
      username : "mukeshpimpalkar0712",
      link : "https://www.facebook.com/pixel.peeper.5"
    },

    {
      title : "instagram",
      username : "mukeshpimpalkar0712",
      link : "https://www.instagram.com/p.mukesh_7/"
    },

    {
      title : "snapchat",
      username : "mukeshpimpalkar0712",
      link : "https://www.snapchat.com/add/mukeshpimpalkar?sender_web_id=63eba942-70f2-407e-8211-a61d0703794b"
    },

  ];

  return(

    <div className='app-container'>

      <div className='profile-container'>
        <img src={ImgMukesh} className='profile' alt='profile-pic'></img>
      </div>

      <h3 className='app-heading'>
        Mukesh Pimpalkar
      </h3>

      {
        data.map((cardinfo) =>
        {
          return(
            <LinkCards
              title = {cardinfo.title}
              username = {cardinfo.username}
              link = {cardinfo.link}
            />
          );
        })
      }
    </div>
  );

}

export default App;


