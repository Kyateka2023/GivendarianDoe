let homeSection = document.getElementById("home");
let aboutSection = document.getElementById("about");
let skillzSection = document.getElementById("skillz");
let resumeSection = document.getElementById("resume");
let servicesSection = document.getElementById("services");
let portfolioSection = document.getElementById("portfolio");
let teamSection = document.getElementById("team");
let socialSection = document.getElementById("social");
let blogSectoin = document.getElementById("blog");

//bookmark for home
function activeHome()
{
    homeSection.style.borderBottom = "solid 2px rgb(221, 0, 0)";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "none";
}

//bookmark for about
function activeAbout()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "solid 2px rgb(221, 0, 0)";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "none";
}

//bookmark for skillz
function activeSkillz()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "solid 2px rgb(221, 0, 0)";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "none";
}

//bookmark for Resume
function activeResume()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "solid 2px rgb(221, 0, 0)";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "none";
    
}

//bookmark for Services
function activeServices()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "solid 2px rgb(221, 0, 0)";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "none";
}

//bookmark for Portfolio
function activePortfolio()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "solid 2px rgb(221, 0, 0)";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "none";
}

//bookmark for team
function activeTeam()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "solid 2px rgb(221, 0, 0)";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "none";
}

//bookmark for Social
function activeSocial()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="solid 2px rgb(221, 0, 0)";
    blogSectoin.style.borderBottom = "none";
}

//bookmark for Blog
function activeBlog()
{
    homeSection.style.borderBottom = "none";
    aboutSection.style.borderBottom = "none";
    skillzSection.style.borderBottom = "none";
    resumeSection.style.borderBottom = "none";
    servicesSection.style.borderBottom = "none";
    portfolioSection.style.borderBottom = "none";
    teamSection.style.borderBottom = "none";
    socialSection.style.borderBottom ="none";
    blogSectoin.style.borderBottom = "solid 2px rgb(221, 0, 0)";
}