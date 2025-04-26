import { Box } from '@mui/material'
import React from 'react'

const Links = [
    { link: "https://github.com/Mostafa3ta", icon: "fab fa-github" },
    { link: "https://portfolio2-eosin-six.vercel.app/", icon: "fa-solid fa-link" },
    { link: "https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0", icon: "fab fa-linkedin-in" }
]
export default function Footer() {

    return <>
        <Box className='footer' >
            {Links.map((link, index) =>
                <a key={index} href={link.link} target='_blank' rel='noopener noreferrer'>
                    <i className={link.icon}></i></a>
            )}
        </Box>
    </>
}
