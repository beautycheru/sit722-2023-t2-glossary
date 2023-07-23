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
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    termsAndDescriptions,
  });
});

module.exports = router;
