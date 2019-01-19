import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Projects = () => (
  <Layout>
    <SEO
      title="Projects"
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <h1>Projects</h1>
    <hr />
    <p>
      Some of my featured projects, see more on my
      {' '}
      <a href="https://github.com/luanorlandi">
        GitHub
      </a>
      {'.'}
    </p>
    <ul>
      <li>
        <a href="https://www.udemy.com/gatsby-crie-seu-site-pessoal">
          Gatsby Course
        </a>
      </li>
      <li>
        <a href="https://kassellabs.io">
          Kassel Labs
        </a>
      </li>
      <li>
        <a href="https://luanorlandi.github.io/tic-tac-porg">
          Tic-tac-porg
        </a>
      </li>
    </ul>
  </Layout>
);

export default Projects;