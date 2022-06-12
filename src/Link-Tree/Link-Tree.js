import React from 'react';

import './Link-Tree.css';

import ImgLinkedin from './../images/linkedin.png';
import ImgGithub from './../images/github.png';
import ImgTwitter from './../images/twitter.png';
import ImgFacebook from './../images/facebook.png';
import ImgInstagram from './../images/instagram.png';
import ImgSnapchat from './../images/snapchat.png';


const ImgMap = {
    "linkedin" : ImgLinkedin ,
    "github" : ImgGithub ,
    "twitter" : ImgTwitter ,
    "facebook" : ImgFacebook ,
    "instagram" : ImgInstagram ,
    "snapchat" : ImgSnapchat
}

function LinkCards(props)
{
    return(
        
        <div className={`link-card bg-${props.title}`}>
           
            <a href={props.link} className='hyperlink'>

                <div className='link-handle-container'>

                    <div className='img-conatiner'>
                        <img src={ImgMap[props.title]} className='img-card' />
                    </div>

                    <div className='handle-name'>
                        <h3 className='username'>
                            {props.username}
                        </h3>
                    </div>

                </div>
            </a>

        </div>
        
    )
}

export default LinkCards;