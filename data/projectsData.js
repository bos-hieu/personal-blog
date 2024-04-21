const projectsData = [
  {
    title: 'Autonomous Inc Website Latest Version',
    description:
      'Contributing as a Backend Developer to the third version of the autonomous.ai website — an e-commerce site. This version marks a massive transition from monolithic to microservices architecture, enhancing scalability for approximately 1 million monthly visitors. Notably, the admin site has been migrated from Python Flask to Vue.js, while the frontend continues to leverage ReactJS.',
    // href: "https://www.autonomous.ai",
    deployed: 'https://www.autonomous.ai',
    tools: ['Golang', 'GRPC', 'Microservice', 'MongoDB', 'MYSQL', 'Redis', 'Google Cloud'],
    imgSrc: '/static/images/projectCards/autonomous.png',
  },
  {
    title: 'Ecommerce Order Purchasing Smart Contract',
    description:
        'Developed a smart contract for an e-commerce order purchasing system. This contract allows users to purchase products using Ethereum cryptocurrency. The contract is deployed on the Sepolia testnet and interacts with a frontend web application. This project is made for educational purposes.',
    tools: ['Solidity', 'ReactJS', 'NextJS', 'Truffle', 'Ganache', 'Metamask', "Web3.js"],
    deployed: 'https://ecommerce-order-purchasing-frontend.vercel.app',
    imgSrc: '/static/images/projectCards/ecommerce-order-purchasing-smart-contract.png',
  },
  {
    title: 'TripX',
    description:
        'As Co-founder and Technical Lead, I spearheaded the development of TripX — a car self-driver rental marketplace connecting car owners with renters. This multifaceted project involved creating a frontend web, an admin site, and a mobile app.',
    tools: ['PHP', 'Laravel', 'Python', 'ReactJS', 'Nginx'],
    deployed: 'https://play.google.com/store/apps/details?id=com.tripx&pli=1',
    imgSrc: '/static/images/projectCards/tripx.png',
  },
  {
    title: 'Autonomous Inc Website Version 2',
    description:
      'In my role as a Fullstack Developer, I contributed to the second version of the autonomous.ai website. This involved transitioning the backend to Golang and the frontend to ReactJS, while the admin site retained its Python Flask framework.',
    tools: ['Golang', 'ReactJS', 'MySQL', 'Redis', 'Google Cloud'],
    imgSrc: '/static/images/projectCards/autonomous.png',
  },
  {
    title: 'Autonomous Inc Website Version 1',
    description:
      'As a Web Developer, I played a crucial role in developing the initial version of the autonomous.ai website. This version utilized a Python Flask framework, combining backend, frontend, and admin site in a single source code.',
    tools: ['Python', 'Flask', 'Jquery', 'Javascript', 'AWS'],
    imgSrc: '/static/images/projectCards/autonomous_v1.png',
  }
]

export default projectsData
