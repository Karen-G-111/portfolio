import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main/Main';
import About from './components/main/about/About';
import Services from './components/main/services/Services';
import Resume from './components/main/resume/Resume';
import Works from './components/main/works/Works';
import MyContact from './components/main/contact/MyContact';

import workImg1 from './components/main/works/work-1-img/img1.png'
import workImg2 from './components/main/works/work-1-img/img2.png'
import workImg3 from './components/main/works/work-1-img/img3.png'
import workImg4 from './components/main/works/work-1-img/img4.png'
import workHeadImg from './components/main/works/work-1-img/headImg.png'

import WorkInfoPage from './components/main/works/workInfoPage/WorkInfoPage';
import MainHelp from './components/main/MainHelp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "",
            element: <MainHelp />,
            children: [
              {
                path: "",
                element: <About />,
              },
              {
                path: "services",
                element: <Services />
              },
              {
                path: "resume",
                element: <Resume />
              },
              {
                path: "works",
                element: <Works />
              },
              {
                path: "contact",
                element: <MyContact />
              },
            ],
          },
          {
            path: "workpage",
            element: <WorkInfoPage
              imgs={[workImg1, workImg2, workImg3, workImg4]}
              info={{
                client: "Smary Wyatt",
                industry: "Information Technologies",
                technologies: "HTML5, CSS3, JavaScript, React",
                date: "Feb 22, 2024",
                url: { name: 'www.example.com', url: '' },
                share: ["", "", "", "", ""],
                projectInfo: [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus convallis, porta tellus eu, congue velit.Ut risus tellus, cursus vitae urna tincidunt, pellentesque ornare.",
                  "Curabitur mollis turpis libero, ut cursus sapien scelerisque eget. Morbi volutpat neque congue enim tristique fermentum.Curabitur non dolor nibh.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut gravida metus, ullamcorper malesuada nulla.Pellentesque suscipit auctor convallis.Phasellus a purus rhoncus, viverra lorem non, auctor urna.Vestibulum iaculis mi eu sodales molestie.In sed turpis vitae elit placerat accumsan."
                ],
              }}
              headImg={workHeadImg}
              name="Brand Canvas Design" />
          }
        ],
      }
    ],
  }
], { basename: "/portfolio" } /*delete */)

root.render(
  <RouterProvider router={router} />
);


