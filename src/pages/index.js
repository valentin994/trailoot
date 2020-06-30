import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import indexStyle from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div className={indexStyle.banner}>
        <p>Find Your Next Destination</p>
      </div>
      <div className={indexStyle.text}>
        <h2>Istrazite manje poznate staze</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      </div>
      <div className={indexStyle.cards}>
        <div className={indexStyle.card}>
          <p>Image Placeholder</p>
          <p>Text placeholder</p>
        </div>
        <div className={indexStyle.card}>
          <p>Image Placeholder</p>
          <p>Text placeholder</p>
        </div>
        <div className={indexStyle.card}>
          <p>Image Placeholder</p>
          <p>Text placeholder</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage