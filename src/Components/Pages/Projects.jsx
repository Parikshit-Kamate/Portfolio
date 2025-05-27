import React from 'react';
import course from '../Static/course.png';
import medical from '../Static/medical.png';
import todo from '../Static/todo.png';
import fitness from '../Static/fitness.png';
import chat from '../Static/chat.png';
import portfolio from '../Static/portfolio.png';


const Projects = () => {
  const projectData = [
    {
      id: '1',
      title: 'Course Management System',
      description: 'A React application that manages different types of courses.',
      githubLink: 'https://github.com/Parikshit-Kamate/CRUD-Project',
      liveDemoLink: 'https://course-management-system-xi.vercel.app/',
      image: course
    },
    {
      id: '2',
      title: 'Hospital Management System',
      description: 'A React application that manages hospital system process.',
      githubLink: 'https://github.com/Parikshit-Kamate/hospital_management_project',
      liveDemoLink: 'https://hospital-management-project-pi.vercel.app/',
      image: medical
    },
    {
      id: '3',
      title: 'Chat Application',
      description: 'A real-time chat application built using React and Socket.io.',
      githubLink: 'https://github.com/Parikshit-Kamate/Chat-Application',
      liveDemoLink: 'https://parikshitkamatechatapplication.netlify.app/',
      image: chat
    },
    {
      id: '4',
      title: 'Fitness Application',
      description: 'A React application to track fitness activities and workouts.',
      githubLink: 'https://github.com/Parikshit-Kamate/Fitness',
      liveDemoLink: 'https://parikshitkamatefitness.netlify.app/',
      image: fitness
    },
    {
      id: '5',
      title: 'Portfolio',
      description: 'A React application that contains my Projects.',
      githubLink: 'https://github.com/Parikshit-Kamate/Portfolio',
      liveDemoLink: 'https://parikshitkamateportfolio.netlify.app/',
      image: portfolio
    },
    {
      id: '6',
      title: 'Todo Application',
      description: 'A React application that manages list of tasks.',
      githubLink: 'https://github.com/Parikshit-Kamate/Chat-Application',
      liveDemoLink: 'https://parikshitkamatechatapplication.netlify.app/',
      image: todo
    },

  ];

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
    padding: '20px',
    color: '#ffffff'
  };

  return (
    <div
      style={{
        backgroundColor: '#0F172A',
        minHeight: '100vh',
        color: '#ffffff',
        paddingBottom: '5rem'
      }}
    >
      <div className="container py-5">
        <h2 className="text-center mb-3">Projects</h2>
        <div className="row g-4">
          {projectData.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card h-100" style={cardStyle}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between p-0 mt-3">
                  <div>
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                  <div className="mt-3 d-flex justify-content-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary ms-5"
                    >
                      Github
                    </a>
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary me-5"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
