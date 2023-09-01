var express = require("express");
var router = express.Router();

const termsAndDescriptions = [
  {
    id: 1,
    term: "Test automation",
    description:
      "This is the process of automating the execution of tests to ensure that an application's software capabilities, efficiency and reliability are validated (Flaatten, 2021) ",
    references:
      "Flaatten, H.K. (2021) DevOps and Agile Glossary: Master the terms of Digital Development, DevOps and Agile glossary: Master the terms of digital development. Available at: https://www.tietoevry.com/en/blog/2021/04/master-the-terms-of-digital-development-with-our-agile-and-devops-glossary/. ",
  },
  {
    id: 2,
    term: "Unit testing",
    description:
      "This involves breaking down code into smaller portions so as to enable easy and fast testing (Plutora, 2021)",
    references:
      "Plutora (2021) DevOps DevOps Terminology: A glossary, Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary. ",
  },
  {
    id: 3,
    term: "Rollback",
    description:
      "This is the process of resetting an application to its default state by terminating sequence of activities(Kenney, 2019) ",
    references:
      "Kenney, A. (2019) The top devops terms you need to know: Exitcertified blog, ExitCertified. Available at: https://www.exitcertified.com/blog/top-devops-words-phrases-acronyms. ",
  },
  {
    id: 4,
    term: "Regression Testing",
    description:
      "This occurs when an end to end system testing is done to ensure that changes made to an application program won't interefere with it current functionality (Digital.ai, 2023) ",
    references:
      "Digital.ai (2023) Common devops terms: Glossary, Digital.ai. Available at: https://digital.ai/glossary/common-devops-terms/. ",
  },
  {
    id: 5,
    term: "DevOps",
    description:
      "This is a group of processes, procedures and tools that enhance communication, cooperation and operation in the system development cycle (Digital.ai, 2023)  ",
    references:
      "Digital.ai (2023) Common devops terms: Glossary, Digital.ai. Available at: https://digital.ai/glossary/common-devops-terms/. ",
  },
  {
    id: 6,
    term: "Artifact",
    description:
      "This is a type of document that helps in defining the objective, design and stucture of an application that is under development (Plutora, 2021) ",
    references:
      "Plutora (2021) DevOps DevOps Terminology: A glossary, Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary.  ",
  },
  {
    id: 7,
    term: "Serverless computing",
    description:
      "This is a service where users are able to access computer resources without the need of a server infrastructure (Tozzi , 2017)",
    references:
      "Tozzi , C. (2017) Devops Dictionary: A Guide to devops words and terms, Channel Futures. Available at: https://www.channelfutures.com/technologies/devops-dictionary-a-guide-to-devops-words-and-terms. ",
  },
  {
    id: 8,
    term: "Commit",
    description:
      "This is when code is pushed to a code repository and tracks its changes using a log message((Kenney, 2019))",
    references:
      "Kenney, A. (2019) The top devops terms you need to know: Exitcertified blog, ExitCertified. Available at: https://www.exitcertified.com/blog/top-devops-words-phrases-acronyms ",
  },
  {
    id: 9,
    term: "Continous Delivery",
    description:
      "This is the process that ensures that software updates of an application are scheduled, implemented and made available to end users (Tozzi , 2017)",
    references:
      "Tozzi , C. (2017) Devops Dictionary: A Guide to devops words and terms, Channel Futures. Available at: https://www.channelfutures.com/technologies/devops-dictionary-a-guide-to-devops-words-and-terms. ",
  },
  {
    id: 10,
    term: "Application Team",
    description:
      "This is a team that is tasked with organizing designing, executing, implemennting and updating an application program from its commencement to completion (Flaatten, 2021)",
    references:
      "Flaatten, H.K. (2021) DevOps and Agile Glossary: Master the terms of Digital Development, DevOps and Agile glossary: Master the terms of digital development. Available at: https://www.tietoevry.com/en/blog/2021/04/master-the-terms-of-digital-development-with-our-agile-and-devops-glossary/. ",
  },
  {
    id: 11,
    term: "Microservice",
    description:
      "A microservice is a small and independent software process that has its own deployment schedule and may be modified independently (Davis, 2021). ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning. ",
  },
  {
    id: 12,
    term: "Continuous delivery (CD)",
    description:
      "This is the process of automatically transferring software to test environments. The ultimate objective of CD is to totally automate the development of software (Davis, 2021). ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning.  ",
  },
  {
    id: 13,
    term: "Continuous Delivery (CD)",
    description:
      "CI is based on the concept of a shared repository, where code is often updated and shared among cloud-based teams (Davis, 2021). ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning.  ",
  },
  {
    id: 14,
    term: "Microservice application",
    description:
      "A microservices application is a distributed programme made up of several small services that work together to deliver the overall project's features and capabilities (Davis, 2021). ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning.  ",
  },
  {
    id: 15,
    term: "Monolith",
    description:
      "A monolith is an application that operates entirely in a single process (Davis, 2021). ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning.  ",
  },
  {
    id: 16,
    term: "Technology Stack",
    description:
      "is the set of tools, software, and frameworks upon which each microservice is built. MEAN (Mongo, Express, Angular, Node.js) or LAMP (Linux, Apache, MySQL, PHP) are two examples (Davis, 2021). ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning.  ",
  },
  {
    id: 17,
    term: "NPM",
    description:
      "It is a command-line tool that communicates with the online npm repository and enables you to manage third-party packages in your Node.js project (Davis, 2021). ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning. ",
  },
  {
    id: 18,
    term: "Deployment",
    description:
      "Release of software or applications into operational settings is referred to as deployment. Automating deployment procedures, minimising manual involvement, and maintaining consistency across environments are the main goals of DevOps deployment practises. Provisioning resources, setting up services, and implementing new code modifications are all examples of deployments (Coursera, 2023).",
    references:
      "Coursera (2023) DevOps terms: A to Z glossary, Coursera. Available at: https://www.coursera.org/collections/devops-terms?utm_source=gg&utm_medium=sem&utm_campaign=B2C_APAC__Google_FTCOF_googlecerts_arte_PMax_Addtocart&utm_content=Degree&campaignid=20342757356&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&gclid=Cj0KCQjwib2mBhDWARIsAPZUn_lDcCFeQ10OwhMMXgJJTZIEhjbSwfEzPFDzyn1i2DH_Vlu3x3FCwMUaApPUEALw_wcB (Accessed: 01 August 2023). ",
  },
  {
    id: 19,
    term: "Pipeline",
    description:
      "A pipeline is an organised set of related procedures and actions used in DevOps to create, test, and deliver software applications. Teams may accomplish continuous Integration and Delivery thanks to the automation provided by DevOps pipelines for software delivery. They guarantee a quick and trustworthy lifecycle for software delivery by including steps like code compilation, testing, artefact generation, deployment, and monitoring (Coursera, 2023). ",
    references:
      "Coursera (2023) DevOps terms: A to Z glossary, Coursera. Available at: https://www.coursera.org/collections/devops-terms?utm_source=gg&utm_medium=sem&utm_campaign=B2C_APAC__Google_FTCOF_googlecerts_arte_PMax_Addtocart&utm_content=Degree&campaignid=20342757356&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&gclid=Cj0KCQjwib2mBhDWARIsAPZUn_lDcCFeQ10OwhMMXgJJTZIEhjbSwfEzPFDzyn1i2DH_Vlu3x3FCwMUaApPUEALw_wcB (Accessed: 01 August 2023). ",
  },
  {
    id: 20,
    term: "Jenkins",
    description:
      "For developing, testing, and delivering software applications, DevOps frequently makes use of Jenkins, an open-source automation server. It offers a stable framework for continuous Integration and delivery workflows, enabling teams to consistently launch software while automating build procedures and testing (Coursera, 2023). ",
    references:
      "Coursera (2023) DevOps terms: A to Z glossary, Coursera. Available at: https://www.coursera.org/collections/devops-terms?utm_source=gg&utm_medium=sem&utm_campaign=B2C_APAC__Google_FTCOF_googlecerts_arte_PMax_Addtocart&utm_content=Degree&campaignid=20342757356&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&gclid=Cj0KCQjwib2mBhDWARIsAPZUn_lDcCFeQ10OwhMMXgJJTZIEhjbSwfEzPFDzyn1i2DH_Vlu3x3FCwMUaApPUEALw_wcB (Accessed: 01 August 2023). ",
  },
  {
    id: 21,
    term: "Authentication",
    description:
      "This involves determining the legitimacy of users, groups, and services in Azure DevOps Server ( Hallberg et al., 2022).",
    references:
      "Hallberg, A. et al. (2022) Key concepts, glossary of terms - azure devops, Key concepts, glossary of terms - Azure DevOps | Microsoft Learn. Available at: https://learn.microsoft.com/en-us/azure/devops/server/architecture/key-concepts?view=azure-devops (Accessed: 20 August 2023)",
  },
  {
    id: 22,
    term: "Topology",
    description:
      "covers where and how servers running Azure DevOps components are installed, network traffic between Azure DevOps Server and Azure DevOps clients, and the services that must execute on Azure DevOps Server ( Hallberg et al., 2022). ",
    references:
      "Hallberg, A. et al. (2022) Key concepts, glossary of terms - azure devops, Key concepts, glossary of terms - Azure DevOps | Microsoft Learn. Available at: https://learn.microsoft.com/en-us/azure/devops/server/architecture/key-concepts?view=azure-devops (Accessed: 20 August 2023)",
  },
  {
    id: 23,
    term: "Authorization",
    description:
      "includes determining if legitimate Azure DevOps Server users, groups, and services have the necessary rights to conduct particular activities ( Hallberg et al., 2022). ",
    references:
      "Hallberg, A. et al. (2022) Key concepts, glossary of terms - azure devops, Key concepts, glossary of terms - Azure DevOps | Microsoft Learn. Available at: https://learn.microsoft.com/en-us/azure/devops/server/architecture/key-concepts?view=azure-devops (Accessed: 20 August 2023)",
  },
  {
    id: 24,
    term: "Application tier, data tier, and client tie",
    description:
      "The logical levels that make up Azure DevOps Server. These tiers may be installed on the same physical machine or on numerous PCs ( Hallberg et al., 2022). ",
    references:
      "Hallberg, A. et al. (2022) Key concepts, glossary of terms - azure devops, Key concepts, glossary of terms - Azure DevOps | Microsoft Learn. Available at: https://learn.microsoft.com/en-us/azure/devops/server/architecture/key-concepts?view=azure-devops (Accessed: 20 August 2023) ",
  },
  {
    id: 25,
    term: "Docker",
    description:
      "Docker is an open source software platform that allows you to design, deploy, and manage virtualized application containers on a single operating system (OS), as well as an ecosystem of related tools (Accelerated Container Application Development 2023).",
    references:
      "Accelerated Container Application Development (2023) Docker. Available at: https://www.docker.com/ (Accessed: 30 August 2023). ",
  },
  {
    id: 26,
    term: "Docker Hub",
    description:
      "Docker Hub is a cloud-based repository where Docker users and partners may develop, test, store, and share container images (Docker 2023).",
    references:
      "(2023) Docker. Available at: https://hub.docker.com/ (Accessed: 31 August 2023). ",
  },
  {
    id: 27,
    term: "DevOps engineer",
    description:
      "A DevOps engineer is an IT professional who collaborates with software developers, system administrators, and other production IT personnel to generate and manage code releases and deployments (DevOps 2023).",
    references:
      "DevOps (2023) DevOps news, help and research - WhatIs.com. Available at: https://www.techtarget.com/whatis/glossary/DevOps (Accessed: 18 August 2023). ",
  },
  {
    id: 28,
    term: "GNU/Linux ",
    description:
      "GNU/Linux is a Unix-like operating system made up of different OS components and services that create the Linux OS (DevOps 2023).",
    references:
      "DevOps (2023) DevOps news, help and research - WhatIs.com. Available at: https://www.techtarget.com/whatis/glossary/DevOps (Accessed: 18 August 2023).  ",
  },
  {
    id: 29,
    term: "Freeware",
    description:
      "Freeware is a sort of proprietary software that is distributed to the public for free (DevOps 2023).  ",
    references:
      "DevOps (2023) DevOps news, help and research - WhatIs.com. Available at: https://www.techtarget.com/whatis/glossary/DevOps (Accessed: 18 August 2023).  ",
  },
  {
    id: 30,
    term: "Gitlab",
    description:
      "GitLab is an open source code repository and collaborative development platform (Gitlab, 2023).",
    references:
      "The DEVSECOPS platform (2023) GitLab. Available at: https://about.gitlab.com/ (Accessed: 30 August 2023). ",
  },
  {
    id: 31,
    term: "Bottleneck(Lean)",
    description:
      "A stage in a process that restricts the process's or system's entire capacity (DevOps glossary of terms 2023).",
    references:
      "DevOps glossary of terms (2023) Global Knowledge. Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (Accessed: 20 August 2023). ",
  },
  {
    id: 32,
    term: "Constraint",
    description:
      "A limitation or restriction on a system (DevOps glossary of terms 2023).",
    references:
      "DevOps glossary of terms (2023) Global Knowledge. Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (Accessed: 20 August 2023). ",
  },
  {
    id: 33,
    term: "DevSecOps",
    description:
      "The automation of essential security duties through the incorporation of security controls and processes into the DevOps workflow (DevOps glossary of terms 2023). ",
    references:
      "DevOps glossary of terms (2023) Global Knowledge. Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (Accessed: 20 August 2023). ",
  },
  {
    id: 34,
    term: "Iterations",
    description:
      "A single development cycle, usually lasting one or two weeks (DevOps glossary of terms 2023).",
    references:
      "DevOps glossary of terms (2023) Global Knowledge. Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (Accessed: 20 August 2023). ",
  },
  {
    id: 35,
    term: "Kanban",
    description:
      "A visual approach of activity control that pushes work through a process at a controllable pace. (What is Kanban? explained in 10 minutes: Kanbanize 2023)",
    references:
      "What is Kanban? explained in 10 minutes: Kanbanize (2023) Kanban Software for Agile Project Management. Available at: https://kanbanize.com/kanban-resources/getting-started/what-is-kanban (Accessed: 30 August 2023). ",
  },
  {
    id: 36,
    term: "Black Box testing",
    description:
      "A sort of functional testing in which the internal structure, design, and code of software are tested (Plutora, 2021). ",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023).  ",
  },
  {
    id: 37,
    term: "Open Source",
    description:
      "Software that makes its original source code freely available for people to use, share, and modify (Plutora, 2021).",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023). ",
  },
  {
    id: 38,
    term: "Cloud Computing",
    description:
      "Cloud computing is the delivery of compute power, database, storage, applications, and other IT resources via the internet (Plutora, 2021). ",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023).  ",
  },
  {
    id: 39,
    term: "Cluster",
    description:
      "Cloud computing is the delivery of compute power, database, storage, applications, and other IT resources via the internet (Plutora, 2021). ",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023). ",
  },
  {
    id: 40,
    term: "Everything as a Code",
    description:
      "Everything as code treats the whole system as code, which means that everything from bare metal servers to deployment configurations is kept as code in a repository and can be rebuilt or rolled back with the press of a button (Plutora, 2021) ",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023). ",
  },
  {
    id: 41,
    term: "Fail Fast",
    description:
      "is a software development mindset that emphasises early and frequent testing in order to quickly determine whether an idea has value. It is a fundamental component of agile approach (Plutora, 2021. ",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023). ",
  },
  {
    id: 42,
    term: "Hybrid cloud",
    description:
      "A hybrid cloud consists of at least one private and one public cloud, allowing organisations to scale up their on-premises infrastructure to the public cloud to manage any overflow (Plutora, 2021). ",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023).  ",
  },
  {
    id: 43,
    term: "IaaS",
    description:
      "is a type of cloud computing service that provides on-demand computation, storage, and networking resources on a pay-as-you-go basis (Microsoft, 2023). ",
    references:
      "What is iaas? infrastructure as a service: Microsoft Azure (2023) Infrastructure as a Service | Microsoft Azure. Available at: https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-iaas (Accessed: 31 August 2023)",
  },
  {
    id: 44,
    term: "Scrum",
    description:
      "An Iterative, time-bound, and incremental Agile Framework for completing complex projects (Global Knowledge, 2023).",
    references:
      "DevOps glossary of terms (2023) Global Knowledge. Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (Accessed: 31 August 2023).",
  },
  {
    id: 45,
    term: "Serverless",
    description:
      "A cloud computing execution model in which the cloud provider handles the distribution of machine resources dynamically (Global Knowledge, 2023). ",
    references:
      "DevOps glossary of terms (2023) Global Knowledge. Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (Accessed: 31 August 2023).",
  },
  {
    id: 46,
    term: "Time to Value",
    description:
      "Measure of the time it takes for the business to realize value from a feature (Global Knowledge, 2023).",
    references:
      "DevOps glossary of terms (2023) Global Knowledge. Available at: https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (Accessed: 31 August 2023).",
  },
  {
    id: 47,
    term: "Containers",
    description:
      "Containers are lightweight packages of your application code together with dependencies such as specific versions of programming language runtimes and libraries required to run your software services (Google Cloud 2022) ",
    references:
      "What are containers?  |  google cloud (2022) Google. Available at: https://cloud.google.com/learn/what-are-containers (Accessed: 31 August 2023).  ",
  },
  {
    id: 48,
    term: "Kubernetes",
    description:
      "Kubernetes (sometimes shortened to K8s with the 8 standing for the number of letters between the “K” and the “s”) is an open source system to deploy, scale, and manage containerized applications anywhere (Google Cloud 2022) ",
    references:
      "What is Kubernetes? |  google cloud (2022) Google. Available at: https://cloud.google.com/learn/what-is-kubernetes (Accessed: 31 August 2023). ",
  },
  {
    id: 49,
    term: "Image",
    description:
      "An image is a bootable snapshot of a server (in our case, a microservice) including all the code, dependencies, and assets that it needs to run(David,2021).  ",
    references:
      "Davis, A. (2021) Bootstrapping microservices with Docker, Kubernetes, and Terraform a project-based guide. Shelter Island, NY: Manning.",
  },
  {
    id: 50,
    term: "Autonomy",
    description:
      "refers to the ability to make decisions independently without having to rely on or subordinate to someone higher up in the hierarchy(Plutora,2021).",
    references:
      "DevOps DevOps Terminology: A Glossary (2021) Plutora. Available at: https://www.plutora.com/devops-at-scale/terminology-glossary (Accessed: 31 August 2023). ",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    termsAndDescriptions,
  });
});

module.exports = router;
