import React from "react"

const Youtube = ({id}) => (
    <iframe title="video embed from youtube" width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
)

export default Youtube
