import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import projectsList from "../contents/projects-list.json";

const ProjectsPage = () => {
    const renderProjects = () => {
        return projectsList.map((project, index) => (
                <Card 
                    title={project.name}
                    subtitle={project.type}
                    description={project.description}
                    links={project.links}
                    key={index}
                />
            )
        )
    }
    return (
        <Layout>
            <SEO title="Projects" />
            <div className="row">
                {renderProjects()}
            </div>
        </Layout>
    )
}

export default ProjectsPage
