import styles from '@/styles/Home.module.css'
import { FaGraduationCap } from 'react-icons/fa6';
import { MdWork } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Experience () {


    return (
        <>
         <div className={styles.introwrapper}>
            <div className={styles.introwrap}>
            <h1 className={`${styles.overview} text-center py-5`}>Work Experience</h1>
            </div>
            <div>
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
    date="2023 August- present"
    iconStyle={{ background: '#1D1836', color: '#fff' }}
    icon={<MdWork />}
  >
    <h3 className={`${styles.projectTitle} vertical-timeline-element-title`}>Software Developer</h3>
    <h6 className={`${styles.company} vertical-timeline-element-subtitle`}>GoldenRoz</h6>

    <ul className={`${styles.lists}`}>
      <li className={styles.experience}>Single Sign-On (SSO) Implementation: Successfully integrated Single Sign-On for Facebook, Google, and Apple, enhancing user convenience and security.</li>
      <li className={styles.experience}>Two-Factor Authentication (2FA): Implemented two-factor authentication to bolster security during user login processes, significantly reducing the risk of unauthorized access.</li>
      <li className={styles.experience}>Docker Utilization: Developed and implemented Dockerfile and Docker Compose files on the frontend, streamlining deployment processes and ensuring consistency across development environments.</li>
      <li className={styles.experience}>Payment Processing: Collaborated with PayPal to manage and optimize payment processing systems, ensuring secure and efficient financial transactions.</li>
      {/* <li className={styles.experience}>Cross-Functional Team Collaboration: Worked with a cross-functional team to integrate UI components with APIs and databases, ensuring seamless user experiences and robust backend connectivity.</li> */}
      <li className={styles.experience}>Agile Methodologies: Operated within an agile environment, breaking projects into phases and emphasizing continuous collaboration, iteration, and improvement.</li>
    
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="March 2023- August 2023"
    iconStyle={{ background: '#1D1836', color: '#fff' }}
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
     icon={<MdWork />}
  >
    <h3 className={`${styles.projectTitle} vertical-timeline-element-title`}>Software Developer</h3>
    <h6 className={`${styles.company} vertical-timeline-element-subtitle`}>Devcenter Innovation</h6>

    <ul className={`${styles.lists}`}>
      <li className={styles.experience}>Developed and launched a Loan Application for a client, for handling loan request in optimized and efficient manner with trackers in place.</li>
      <li className={styles.experience}>Collaborated with an agile scrum team of 6 persons, contributing to 100% continuous improvement and deployment of Web Applications.</li>
      <li className={styles.experience}>Conducted extensive research on client’s projects in order to tailor the application to client’s request.</li>
      <li className={styles.experience}>Provide commercial and technical advice on how best to maximize products usability by the intended users and to ensure a product with a smooth user experience is delivered for the client.</li>
      {/* <li className={styles.experience}>Incorporating applications, graphics, audio and video clips into client websites.</li> */}
      <li className={styles.experience}>Work closely with design, product management, and development teams to create elegant, usable, responsive and interactive interfaces across multiple devices.</li>
    </ul>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2023 - March 2023"
    iconStyle={{ background: '#1D1836', color: '#fff' }}
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
     icon={<MdWork />}
  >
    <h3 className={`${styles.projectTitle} vertical-timeline-element-title`}>Frontend Developer</h3>
    <h6 className={`${styles.company} vertical-timeline-element-subtitle`}>Traders of Africa</h6>

    <ul className={`${styles.lists}`}>
      <li className={styles.experience}>Developed an Ecommerce platform for buyers and sellers to trade African made products within and outside the country, with features to approve products, monitor transactions, Live chat with customers, with create, read and Update functionalities on the platform’s Admin Dashboard.</li>
      <li className={styles.experience}>Refactored poorly written codes in their company’s current landing page to meet industry best practice.</li>
      <li className={styles.experience}>Debug errors, troubleshoot issues, and perform routine performance optimizations</li>
      {/* <li className={styles.experience}>Work closely with design, product management, and development teams to create elegant, usable, responsive and interactive interfaces across multiple devices.</li> */}
      <li className={styles.experience}>Routinely testing websites for ease of use, speed and other quality factors.</li>
      <li className={styles.experience}>Review and optimize the app usage by monitoring key metrics and rectifying the issues proactively.</li>
    
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="January 2020 - March 2023"
    iconStyle={{ background: '#1D1836', color: '#fff' }}
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
     icon={<MdWork />}
  >
    <h3 className={`${styles.projectTitle} vertical-timeline-element-title`}>Frontend Developer</h3>
    <h6 className={`${styles.company} vertical-timeline-element-subtitle`}>Alphaden Energy & Oilfield Limited</h6>

    <ul className={`${styles.lists}`}>
      <li className={styles.experience}>Produced websites compatible with multiple browsers.</li>
      <li className={styles.experience}>Reviewed and tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability.</li>
      <li className={styles.experience}>Developed designs to meet specific requirements such as quick-loading sites with particular layouts.</li>
      <li className={styles.experience}>Designed and updated layouts to meet usability and performance requirements.</li>
      {/* <li>Developed landing pages, dashboards and online applications using Ant Design, HTML/CSS and JavaScript/ES6+</li> */}
      {/* <li>Conceived and built optimized landing pages in HTML and CSS for integration and cross-browser compatibility.</li> */}
      <li className={styles.experience}>Employed coding practices based on commonly accepted standards to establish site layout and user interface.</li>
      <li className={styles.experience}>Conducted unit testing to deliver optimal browser functionality.</li>
    
    </ul>
  </VerticalTimelineElement>
 
  <VerticalTimelineElement
     className="vertical-timeline-element--education"
     date="October 2018"
     iconStyle={{ background: '#1D1836', color: '#fff' }}
     contentStyle={{ background: '#1D1836', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
      icon={<FaGraduationCap />}
  >
      <h3 className={`${styles.projectTitle} vertical-timeline-element-title`}>Bachelor of Technology in Information Management Technology</h3>
      <h6 className={`${styles.company} vertical-timeline-element-subtitle`}>Bachelor Degree</h6>

    <p>
      Information Management Technology
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
            </div>
            </div>
        </>
            )
        }