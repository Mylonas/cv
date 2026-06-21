module.exports = {
  name: 'Michalis Mylonas',
  title: 'Data Engineer',
  summary: `Data Engineer with 5+ years of experience building and maintaining scalable ETL/ELT pipelines
across public sector and financial services. Proficient in Python, SQL, R, and Microsoft Azure/Fabric
ecosystems. Passionate about data quality, automation, and reproducible analytical workflows.`,
  facts: {
    'Location': '<a href="https://www.google.com/maps/place/Nicosia,+Cyprus"><i class="fa fa-home fact-icon"></i>Nicosia, Cyprus</a>',
    'GitHub': '<a href="https://github.com/Mylonas"><i class="fa-brands fa-github fact-icon"></i>Mylonas</a>',
    'GitLab': '<a href="https://gitlab.com/michalismylonas"><i class="fa-brands fa-gitlab fact-icon"></i>michalismylonas</a>',
    'Email': '<a href="mailto:mylonasmichalis96@gmail.com"><i class="fa fa-envelope fact-icon"></i>mylonasmichalis96@gmail.com</a>'
  },
  skills: [
    ['Python', 95],
    ['SQL', 90],
    ['R', 85],
    ['Azure', 85],
    ['MS Fabric', 80],
    ['Databricks', 75],
    ['PowerShell', 75],
    ['Git', 90],
  ],
  positions: [
    {
      title: 'Data Engineer — FP Markets',
      period: 'Dec 2024 – Present',
      skills: ['MS Fabric', 'Azure Data Factory', 'ETL', 'SQL', 'Medallion Architecture'],
      contents: `
- Designed and maintained scalable ETL/ELT pipelines in MS Fabric within a microservices-based environment
- Implemented complex business logic for fee calculation, deposit constraints, and multi-currency normalisation
- Integrated third-party APIs into a unified Data Warehouse (Azure Data Factory, Medallion Architecture)
- Optimised data models using synthetic currencies to improve performance and reduce ingestion load
- Built parameter-driven ingestion frameworks supporting dynamic schema
- Ensured data integrity, validation, and consistency across production pipelines
- Collaborated with backend engineers, data analysts, and stakeholders to translate business requirements into data solutions
- Monitored and troubleshot production data workflows to ensure reliability and scalability
`
    },
    {
      title: 'Data Engineer — Ofsted',
      period: 'Aug 2022 – Dec 2024',
      skills: ['Python', 'R', 'SQL', 'Azure', 'Power Automate', 'CI/CD'],
      contents: `
- Extensive use of Python, R, and SQL in automation and digital transformation
- Used Pandas and Tidyverse for data wrangling and cleansing
- Data manipulation with Windows Server in SQL Server Management Studio
- Data pipeline execution (ELT) and code troubleshooting on Microsoft Cloud Platforms
- Improved task efficiency by 90% with Microsoft Power Automate
- VM deployment and monitoring through Microsoft Azure
- Improved scripting efficiency by 80% using BASH/PowerShell
- Delivered training on reproducible analytical pipelines (RAP) and version control (GitLab for CI/CD)
`
    },
    {
      title: 'Data Engineer — ONS',
      period: 'Jun 2020 – Aug 2022',
      skills: ['Python', 'R', 'GitHub', 'GCP', 'JIRA', 'Unit Testing'],
      contents: `
- Refactored code by introducing functions, packages, configuration files, and parameters to simplify execution
- Standardised code format, structure, and style for improved consistency, readability, and maintainability
- Led and contributed to pipeline development in Python and R
- Version control with GitHub on Google Cloud Platform (GCP)
- Used JIRA and GitHub for issue tracking, version control, and development
- Implemented extensive unit testing using \`testthat\` and \`assertthat\` packages in R
- Served on the hiring committee — reviewed resumes, conducted interviews, and made offer decisions
`
    }
  ],
  education: [
    {
      degree: 'MSc Bioinformatics — Cardiff University',
      period: 'Cardiff, UK',
      contents: 'Grade: 68%'
    },
    {
      degree: 'BSc Computer Science — Swansea University',
      period: 'Swansea, UK',
      contents: 'Grade: 70%'
    }
  ],
  experience: [
    {
      header: 'Open Source Projects',
      skills: ['GitHub', 'Python', 'R', 'API'],
      contents: `
Personal projects on [GitHub](https://github.com/Mylonas) spanning data engineering, API integration,
meteorological data pipelines, stock analysis, and web applications.
`
    },
    {
      header: 'Key Skills',
      skills: ['ETL', 'Azure', 'Fabric', 'Databricks', 'Python', 'SQL', 'R'],
      contents: `
Version control (GitHub & GitLab), Jira, MS Fabric, Databricks, ETL (Python, SQL, R),
Data Warehouse design, Azure Data Factory, Medallion Architecture, team training and mentoring.
`
    }
  ]
};
