import React from 'react'
import links from '../contents/cta-links'

const CTALinks = () => {
    return (
        <>
            {
                links.map((link) => 
                    <div style={{marginBottom: 24}}>
                        <a href={link.url} target="_blank">
                            <button 
                                className={`btn-block ${link.isHighlighted ? "background-warning" : null}`}>
                                {link.title}
                            </button>
                        </a>
                    </div>
                )
            }
        </>
    )
}

export default CTALinks