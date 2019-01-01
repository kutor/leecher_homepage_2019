import React from 'react';
import socialIcons from "sources";

const socialLine = ({socialIcons}) => {
    return (
        <div>
            {
                socialIcons.map((icon, i) => {
                    return (
                        <a 
                        href={socialIcons[i].link}>
                            <img 
                            src={socialIcons[i].icon}
                            alt={socialIcons[i].name}
                        />
                     </a> 
                    )
                })  
            }           
        </div>
    );
}

export default SocialLine;