export const serviceGroups = [
  {
    title: "Digital Engineering",
    sourcePath: "/data-engineering/",
    overviewSlug: "data-engineering",
    items: [
      ["Application Modernization", "application-modernization"],
      ["Digital Solutions", "digital-solutions"],
      ["Digital Transformation", "digital-transformation"],
      ["Cloud Services", "cloud-services"],
      ["Cloud Migration & Transformation", "cloud-migration-amp-transformation"],
      ["Intelligent Automation", "intelligent-automation"],
      ["Data Migration, Transformation, Modernization & Governance", "data-mtmga"],
      ["DevSecOps", "devsecops"],
      ["Site Reliability Engineering", "site-reliability"],
      ["Cyber Security", "cyber-security"],
    ],
  },
  {
    title: "Quality Engineering",
    sourcePath: "/quality-engineering-2/",
    overviewSlug: "quality-engineering-2",
    items: [
      ["Next Gen Testing Services", "next-gen-testing-services"],
      ["AI/ML", "ai-ml"],
      ["DevOps", "devops"],
      ["Cloud Assurance", "cloud-assurance"],
      ["RPA", "rpa"],
      ["Low Code / No Code Automation", "low-code-no-code-automation"],
      ["Functional Testing", "functional"],
      ["Compatibility Testing", "compatibility"],
      ["Regression Testing", "regression"],
      ["Accessibility Testing", "accessibility"],
      ["Automation Testing", "automation"],
      ["Performance Testing", "performance"],
      ["UI/UX Testing", "ui-ux"],
      ["Security Testing", "security"],
      ["Design Testing", "services"],
    ],
  },
  {
    title: "Advisory & Transformation",
    sourcePath: "/advisory-amp-transformation/",
    overviewSlug: "advisory-amp-transformation",
    items: [
      ["Advisory Services", "advisory-services"],
      ["Business Function Analysis", "business-function-analysis"],
      ["Agile Centre of Excellence", "agile-centre-of-excellence"],
      ["Cybersecurity Risk Analysis", "cybersecurity-risk-analysis"],
      ["Data Governance – Strategy & Solution", "data-governance-strategy-amp-solution"],
      ["Test Advisory & Transformation", "test-advisory-amp-transformation"],
    ],
  },
  {
    title: "Human Capital Upskilling",
    sourcePath: "/human-capital-upskilling/",
    overviewSlug: "human-capital-upskilling",
    items: [
      ["Software Development Engineer in Test", "software-development-engineer-in-test"],
      ["Low Code / No Code Development & Testing", "low-code-no-code-development-amp-testing"],
    ],
  },
];

export const companyPages = [
  ["About Us", "about-us"],
  ["Program & Learning", "program-and-learning"],
  ["Jobs", "job-openings"],
  ["Our Technologies", "our-technologies"],
  ["Engagement Models Consulting", "engagement-models-consulting"],
];

export const sourceRoute = (slug) => `/services/${slug}`;
