module.exports = {
  name: 'Your Name',
  title: 'Your Job Title',
  summary: `A brief professional summary about yourself. Highlight your key strengths,
years of experience, and what you bring to the table. Keep it to 2-3 sentences.`,
  facts: {
    'Location': '<a href="#"><i class="fa fa-home fact-icon"></i>Your City, Country</a>',
    'GitHub': '<a href="https://github.com/Mylonas"><i class="fa-brands fa-github fact-icon"></i>Mylonas</a>',
    'LinkedIn': '<a href="https://linkedin.com/in/yourprofile"><i class="fa-brands fa-linkedin fact-icon"></i>yourprofile</a>',
    'Email': '<a href="mailto:your@email.com"><i class="fa fa-envelope fact-icon"></i>your@email.com</a>'
  },
  skills: [
    ['Python', 90],
    ['JavaScript', 80],
    ['SQL', 85],
    ['R', 75],
    ['ASP.NET', 70],
    ['Git', 90],
    ['Docker', 65],
    ['Linux', 75],
  ],
  positions: [
    {
      title: 'Job Title — Company Name',
      period: 'Month Year – Present',
      skills: ['skill1', 'skill2', 'skill3'],
      contents: `
Describe your responsibilities and achievements here. Use bullet points for clarity:

- Key achievement or responsibility one
- Key achievement or responsibility two
- Key achievement or responsibility three
`
    },
    {
      title: 'Previous Job Title — Company Name',
      period: 'Month Year – Month Year',
      skills: ['skill1', 'skill2'],
      contents: `
Describe your responsibilities and achievements here.

- Key achievement or responsibility one
- Key achievement or responsibility two
`
    }
  ],
  education: [
    {
      degree: 'Your Degree — Your University',
      period: 'Year – Year',
      contents: `Brief description of your studies, dissertation, or notable achievements.`
    }
  ],
  experience: [
    {
      header: 'Open Source / Side Projects',
      skills: ['github', 'open-source'],
      contents: `
Describe any open source contributions, personal projects, or side work here.
Link to repositories with [project name](https://github.com/Mylonas/project).
`
    },
    {
      header: 'Certifications & Courses',
      skills: ['learning'],
      contents: `
List any relevant certifications, online courses, or professional development here.
`
    }
  ]
};
