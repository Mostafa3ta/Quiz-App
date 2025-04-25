import { Box } from '@mui/material'
import React from 'react'

export default function Footer() {

    const Links = [
        { link: "https://github.com/Mostafa3ta", icon: "fab fa-github" },
        { link: "https://www.facebook.com/profile.php?id=100007766405910&ref=xav_ig_profile_web", icon: "fa-solid fa-link" },
        { link: "https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0", icon: "fab fa-linkedin-in" }
    ]
    return <>
        <Box className='footer' >
            {Links.map((link, index) =>
                <a key={index} href={link.link} target='_blank' rel='noopener noreferrer'>
                    <i className={link.icon}></i></a>
            )}
        </Box>
    </>
}
