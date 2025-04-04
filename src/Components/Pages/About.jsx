import React from 'react';

const About = () => {
  
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
    padding: '20px',
  };

  return (
    <div
      style={{ backgroundColor: '#0F172A', minHeight: '100vh' }}
      className="d-flex align-items-center"
    >
      <div className="container">
       
        <div className="text-center mb-5">
          <h2 className="text-white">My Experience</h2>
        </div>

        <div className="row justify-content-center g-4 mb-5">
         
          <div className="col-md-5 me-5" style={cardStyle}>
            <h3 className="text-info mb-4">Frontend Development</h3>
            <ul className="list-unstyled text-white">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>HTML5</strong> - Advanced
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>CSS3</strong> - Advanced
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>JavaScript</strong> - Advanced
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>React</strong> - Advanced
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>React-Redux</strong> - Intermediate
              </li>

            </ul>
          </div>

         
          <div className="col-md-5 ms-5" style={cardStyle}>
            <h3 className="text-info mb-4">Backend Development</h3>
            <ul className="list-unstyled text-white">

              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>Rest API</strong> - Intermediate
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>Node.js</strong> - Intermediate
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>MongoDB</strong> - Intermediate
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                <strong>Python</strong> - Intermediate
              </li>
            </ul>
          </div>
        </div>

       
        <div className="text-center">
          <p className="text-white">
            Hi, I'm Parikshit Kamate, a passionate MERN Stack Developer dedicated
            to building high-performance, scalable, and user-friendly web
            applications. My journey in web development has been fueled by a deep
            curiosity for modern technologies and a commitment to writing clean,
            maintainable code.
            <br />
            <br />
            Over the years, I have worked on diverse projects, ranging from
            dynamic web applications to full-stack solutions, leveraging
            technologies like Full Stack Web Applications, Frontend Development,
            and Backend Development. Some of my notable projects include a task
            management app and a todo application, all showcasing my ability to
            integrate front-end aesthetics with robust back-end logic.
            <br />
            <br />
            Beyond coding, I enjoy collaborating with teams, sharing knowledge,
            and staying updated with the latest industry trends. I am always open
            to exciting opportunities and new challenges. If you’re looking for a
            dedicated developer to bring your ideas to life, feel free to connect
            with me or explore my GitHub and LinkedIn profiles. Let’s build
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
