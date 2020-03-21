import React from "react"

const Card = ({ title, subtitle, description, links }) => {
    const renderLinks = () => {
        return links.map((link, index) => (
            <a className="card-link" href={link.url} key={index} target="_blank">
                {link.name}
            </a>
        ))
    }
    return (
        <div className="col md-4 lg-3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h5 className="card-subtitle">{subtitle}</h5>
                    <p className="card-text">{description}</p>
                    {renderLinks()}
                </div>
            </div>
        </div>
    )
}

export default Card