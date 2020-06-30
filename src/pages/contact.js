import React from 'react'
import { Link } from 'gatsby'
import contactSytle from './contact.module.scss'
import Layout from '../components/layout'


const ContactPage = () => {
    return (
        <div>
            <Layout>
                <div className={contactSytle.contact}>
                    <h1>Contact</h1>
                    <p>Page</p>
                    <Link to="">some email link to some email</Link>
                </div>
            </Layout>
        </div>
    )
}
export default ContactPage