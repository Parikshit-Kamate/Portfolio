import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const ProjectList = () => {
  const projects = [
    {
      id: '1',
      title: 'Hospital Management System',
      link: 'https://hospital-management-system-snowy-nu.vercel.app/',
    },
    {
      id: '2',
      title: 'Course Management System',
      link: 'https://course-management-system-xi.vercel.app/',
    },
    {
      id: '3',
      title: 'Todo Application',
      link: 'https://parikshittodoapp.netlify.app/',
    },
    {
      id: '4',
      title: 'Fitness Application',
      link: 'https://parikshitkamatefitness.netlify.app/',
    },
    {
      id: '5',
      title: 'Chat Application',
      link: 'https://parikshitkamatechatapplication.netlify.app/',
    },
    {
      id: '6',
      title: 'Portfolio',
      link: 'https://parikshitkamateportfolio.netlify.app/',
    }
  ];

  return (
    <div style={{ backgroundColor: '#0F172A', minHeight: '100vh', color: '#ffffff' }}>
      <div className="container pt-4">
        <div className="row">

          <div className="col-md-6">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="mb-5 mt-5 p-3 rounded">
                <h3>{project.title}</h3>
                <Link to="/projects" className="text-light">
                  Open Projects
                </Link>
              </div>
            ))}
          </div>

          <div className="col-md-6">
            {projects.slice(3).map((project) => (
              <div key={project.id} className="mb-5 mt-5 p-3 rounded">
                <h3>{project.title}</h3>
                <Link to="/projects" className="text-light">
                  Open Projects
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectList;
