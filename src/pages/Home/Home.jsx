import React from 'react';
import Layout from '../../components/Layout/Layout';
import Hero from "./Hero/Hero"; 
import AboutMe from './About/AboutMe';
import Services from './Services/Services';
import Skill from './Skills/Skill';
import ProjectList from './Project/ProjectList';
import Contact from './Contact/Contact';

const Home =()=>{
return(
    <div>
        <Layout>
            <Hero />
            <AboutMe />
            <Services />
            <Skill />
            <ProjectList />
            <Contact />
        </Layout>
    </div>
)
}


export default Home;