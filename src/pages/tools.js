import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import toolsList from "../contents/tools-list.json";

const ToolsPage = () => {
    const renderTools = () => {
        return toolsList.map((tool, index) => (
                <Card 
                    title={tool.name}
                    subtitle={tool.type}
                    description={tool.description}
                    links={tool.links}
                    key={index}
                />
            )
        )
    }
    return (
        <Layout>
            <SEO title="Tools" />
            <div className="row">
                {renderTools()}
            </div>
        </Layout>
    )
}

export default ToolsPage
