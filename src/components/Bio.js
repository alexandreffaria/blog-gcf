import React from 'react'
import { rhythm } from '../utils/typography'

export default ({ settings }) => ( 
    <div 
        style = {{
            display: 'flex',
            marginBottom: rhythm(2.5),
        }}
    >
        <img 
            src = { settings.author_avatar.imgix_url }
            alt = { settings.author_name }
            style = {{
                marginRight: rhythm(1),
                marginBottom: 0,
                width: rhythm(5),
                height: rhythm(5),
            }}
        /> 
        <div dangerouslySetInnerHTML = {{
                __html: settings.author_bio 
            }}
        />
    </div>
)