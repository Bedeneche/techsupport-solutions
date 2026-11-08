# TechSupport Solutions

### Responsive IT Services Website | Frontend Development & Cloud Deployment

\


## 1. Project Overview

TechSupport Solutions is a responsive website developed for a fictional IT services company that provides technology support and infrastructure solutions to businesses.

The project was built from scratch using HTML, CSS and JavaScript, with the objective of developing practical frontend development skills while learning how to manage source code, configure cloud hosting and deploy a website to production.

Beyond building the website, this project provided hands-on experience with Git, GitHub, Vercel and an automated deployment workflow.

**Live Demo:** [https://techsupport-solutions-eptq.vercel.app](https://techsupport-solutions-eptq.vercel.app)

**Source Code:** [https://github.com/Bedeneche/techsupport-solutions](https://github.com/Bedeneche/techsupport-solutions)

## 2. Project Objectives

The main objectives were to:

- Build a functional and responsive website using fundamental frontend technologies.
- Understand the relationship between HTML, CSS and JavaScript.
- Practise source-code management using Git and GitHub.
- Configure a GitHub repository for cloud deployment.
- Deploy a website to a production hosting environment using Vercel.
- Implement and test automatic deployments triggered by GitHub commits.
- Understand the fundamentals of domain configuration, DNS and HTTPS/TLS.

## 3. Technologies and Tools

| Technology         | Purpose                                    |
| ------------------ | ------------------------------------------ |
| HTML5              | Website structure and content              |
| CSS3               | Styling, layouts and responsive design     |
| JavaScript         | Client-side interactions and form handling |
| Visual Studio Code | Development environment                    |
| Git                | Version control and change tracking        |
| GitHub             | Remote source-code repository              |
| Vercel             | Cloud hosting and deployment automation    |

## 4. Website Features

### Homepage

- Welcome section introducing the company.
- Navigation links to the main website sections.
- Call-to-action button directing visitors to the contact section.

### About Us

- Introduction to the fictional company.
- Description of its commitment to providing technology solutions.

### Services

The website presents four IT service categories:

- **IT Support:** Technical assistance, troubleshooting and computer maintenance.
- **Cloud Solutions:** Cloud infrastructure support and deployment solutions.
- **Networking:** Network configuration, monitoring and troubleshooting.
- **DevOps Services:** Application deployment, automation and CI/CD solutions.

### Contact Section

- Contact form with name, email and message fields.
- HTML form validation using required fields and email input type.
- JavaScript submit event handling.
- Demonstration alert after form submission.
- Form reset after submission.

**Note:** The contact form currently provides client-side interaction only. It does not send emails or persist submitted messages to a backend.

### Responsive Design

- Responsive layouts for smaller screens.
- CSS Grid for service-card arrangement.
- Navigation and layout adjustments for mobile devices.
- Hover effects and transitions on service cards.
- Sticky navigation header for easier access while scrolling.

## 5. Project Structure

```text
techsupport-solutions/
│
├── index.html       # Website structure and content
├── style.css        # Styling and responsive layouts
├── script.js        # Client-side interactions
└── README.md        # Project documentation
```

## 6. Deployment Architecture

The website follows a GitHub-to-Vercel deployment workflow.

```text
Developer
    |
    v
Visual Studio Code
    |
    | HTML, CSS and JavaScript
    v
Local Project
    |
    | Git add, commit and push
    v
GitHub Repository
    |
    | Connected through Vercel integration
    v
Vercel Deployment
    |
    v
Production Website
```

### Deployment Process

**Step 1: Local Development**

Created and tested the website locally using Visual Studio Code and a browser.

**Step 2: Version Control**

Initialised a local Git repository, staged project files, committed changes and connected the local repository to GitHub.

**Step 3: GitHub Repository**

Created a public GitHub repository to host and manage the project's source code.

**Step 4: Vercel Integration**

Imported the GitHub repository into Vercel and configured the project using the following settings:

- Framework Preset: Other
- Root Directory: `./`
- Project Name: `techsupport-solutions`

**Step 5: Production Deployment**

Deployed the website to Vercel and obtained a publicly accessible production URL.

**Step 6: Automatic Deployment**

Tested the GitHub integration by modifying the homepage heading, committing the changes and pushing them to the connected GitHub repository.

Vercel detected the new commit and automatically initiated a production deployment.

The deployment completed successfully with a **Ready** status, and the updated website became available through the production URL.

## 7. Testing and Verification

The following checks were performed during development:

| Test                                | Result     |
| ----------------------------------- | ---------- |
| Homepage loading                    | Successful |
| Section navigation                  | Tested     |
| Service-card layout                 | Tested     |
| Sticky navigation                   | Tested     |
| Contact form interaction            | Successful |
| JavaScript alert                    | Successful |
| Responsive mobile layout            | Tested     |
| GitHub source-code upload           | Successful |
| Initial Vercel deployment           | Successful |
| Automatic deployment after Git push | Successful |

## 8. DevOps Concepts Practised

This project provided practical exposure to the following concepts:

- **Version Control:** Managing changes and tracking project history with Git.
- **Source Code Management:** Hosting and maintaining project files on GitHub.
- **Cloud Hosting:** Publishing a website to a cloud-based hosting platform.
- **Production Deployment:** Making an application publicly accessible.
- **CI/CD Fundamentals:** Understanding how source-code changes can trigger automated deployment.
- **DNS Fundamentals:** Learning about domain records, A records, CNAME records, DNS caching and TTL.
- **HTTPS/TLS Fundamentals:** Understanding encrypted connections and certificate validation.
- **Troubleshooting:** Applying a cause, evidence and investigation approach to deployment-related problems.

*DNS and custom-domain configuration were studied conceptually but were not implemented on a purchased domain in this project.*

## 9. Running the Project Locally

To run the project on your local machine:

1. Clone the GitHub repository.
2. Open the project directory in Visual Studio Code.
3. Open `index.html` in your browser, or use the Live Server extension.
4. Explore the website and test its functionality.

No framework, package installation or build process is required for the current static website.

## 10. Future Improvements

Potential improvements include:

- Integrating a backend service to process and store contact form submissions.
- Adding a custom domain and configuring DNS records.
- Verifying HTTPS/TLS configuration for a custom domain.
- Implementing automated code checks and testing before deployment.
- Improving accessibility and search-engine optimisation.
- Exploring a React-based version of the website.

## 11. Key Learning Outcomes

Through this project, I gained practical experience in building a website from scratch and taking it through a complete source-code-to-production deployment workflow.

I also developed a better understanding of how frontend development, version control, cloud hosting and deployment automation work together.

The project strengthened my interest in DevOps engineering and provided a foundation for exploring more advanced CI/CD and cloud deployment workflows.

## 12. Author

**Bede Chukwude**

Aspiring DevOps Engineer | IT Support Specialist

- GitHub: [@Bedeneche](https://github.com/Bedeneche)
- LinkedIn: [Bede Chukwude](https://www.linkedin.com/in/bede-chukwude-605a27135/)

---

*Built as a hands-on learning project focused on frontend development, Git, GitHub and cloud deployment.*
