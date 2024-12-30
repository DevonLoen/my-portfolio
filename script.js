const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("left");
});
const navLinksArray = document.querySelectorAll(".nav-link");

navLinksArray.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.classList.remove("left");
  });
});

const projectContainer = document.querySelector(".projects-container");

const items = [
  {
    id: 1,
    title: "Travelynk",
    img: "./assets/Travelynk.png",
    desc: `
    This platform serves as an online service for booking and purchasing flight tickets, offering both one-way and round-trip options. 
    It provides access to a wide range of domestic and international flights. The platform’s flow and design were developed with creativity 
    by the final project team. There are two distinct user roles: admin and buyer. The buyer has the capability to send and receive transaction 
    receipts through the platform in a seamless manner.
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/js.svg",
      "./assets/express.png",
      "./assets/prisma.svg",
      "./assets/nodejs.png",
      "./assets/tailwind.svg",
    ],
    live: "https://travelynk.vercel.app/",
    github: "https://github.com/travelynk",
  },
  {
    id: 2,
    title: "Travelynk's Admin Dashboard",
    img: "./assets/AdminTravelynk.png",
    desc: `
    The Admin Dashboard of the Travelynk application is designed to facilitate efficient data management 
    using the CRUD (Create, Read, Update, Delete) operations within the MVC architecture. 
    It empowers administrators to effectively manage flight schedules, user accounts, and booking 
    transactions, ensuring seamless control and accurate record maintenance across the platform.
      `,
    techStack: [
      "./assets/edge.jpeg",
      "./assets/express.png",
      "./assets/js.svg",
      "./assets/tailwind.svg",
    ],
    live: "https://admin-tiketku.padek.tech/admin/auth/login",
    github: "https://github.com/travelynk",
  },
];

items.forEach((item, index) => {
  let allImages = "";
  item.techStack.forEach((item) => {
    allImages += `<img src = ${item} title = ${
      item.split("/")[2].split(".")[0]
    }/>`;
  });
  projectContainer.innerHTML += ` <article class="project-card best mix" data-order=${
    index + 1
  }>
  <div class="project-image">
    <img src = ${item.img} />
  </div>
  <div class = "project-text">
  <h1 class="project-title">${item.title}</h1>
  <p class="project-description">
   ${item.desc}
  </p>
  <div class="project-link-tech-stack-wrapper">
    <div class="project-links">
      <a
        href=${item.github}
        target="_blank"
        class="project-github-link"
        ><img src="./assets/github.png" alt="" /><span>Github</span></a
      >
      <a
        href=${item.live}
        target="_blank"
        class="project-deployed-link"
        ><img src="./assets/netlify.png" alt="" />Live</a
      >
    </div>
    <div class="tech-stack">

    ${allImages}
      
      
    </div>
  </div>
  </div>
</article>`;
});

const frontEndItems = [
  {
    id: 1,
    title: "Travelynk's Admin Dashboard",
    img: "./assets/AdminTravelynk.png",
    desc: `
    The Admin Dashboard of the Travelynk application is designed to facilitate efficient data management 
    using the CRUD (Create, Read, Update, Delete) operations within the MVC architecture. 
    It empowers administrators to effectively manage flight schedules, user accounts, and booking 
    transactions, ensuring seamless control and accurate record maintenance across the platform.
      `,
    techStack: [
      "./assets/edge.jpeg",
      "./assets/express.png",
      "./assets/js.svg",
      "./assets/tailwind.svg",
    ],
    live: "https://admin-tiketku.padek.tech/admin/auth/login",
    github: "https://github.com/travelynk",
  },
];

frontEndItems.forEach((item) => {
  let allImages = "";
  item.techStack.forEach((item) => {
    allImages += `<img src = ${item} title = ${
      item.split("/")[2].split(".")[0]
    }/>`;
  });
  projectContainer.innerHTML += ` <article class="project-card mix front-end " data-order="1">
  <div class="project-image">
    <img src = ${item.img} />
  </div>
  <div class = "project-text">
  <h1 class="project-title">${item.title}</h1>
  <p class="project-description">
   ${item.desc}
  </p>
  <div class="project-link-tech-stack-wrapper">
    <div class="project-links">
      <a
        href=${item.github}
        target="_blank"
        class="project-github-link"
        ><img src="./assets/github.png" alt="" /><span>Github</span></a
      >
      <a
        href=${item.live}
        target="_blank"
        class="project-deployed-link"
        ><img src="./assets/netlify.png" alt="" />Live</a
      >
    </div>
    <div class="tech-stack">

    ${allImages}
      
      
    </div>
  </div>
  </div>
</article>`;
});

const fullStackItems = [
  {
    id: 1,
    title: "Travelynk",
    img: "./assets/Travelynk.png",
    desc: `
    This platform serves as an online service for booking and purchasing flight tickets, offering both one-way and round-trip options. 
    It provides access to a wide range of domestic and international flights. The platform’s flow and design were developed with creativity 
    by the final project team. There are two distinct user roles: admin and buyer. The buyer has the capability to send and receive transaction 
    receipts through the platform in a seamless manner.
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/js.svg",
      "./assets/express.png",
      "./assets/prisma.svg",
      "./assets/nodejs.png",
      "./assets/tailwind.svg",
    ],
    live: "https://travelynk.vercel.app/",
    github: "https://github.com/travelynk",
  },
];

fullStackItems.forEach((item) => {
  let allImages = "";
  item.techStack.forEach((item) => {
    allImages += `<img src = ${item} title = ${
      item.split("/")[2].split(".")[0]
    }/>`;
  });
  projectContainer.innerHTML += ` <article class="project-card mix full-stack " data-order="1">
  <div class="project-image">
    <img src = ${item.img} />
  </div>
  <div class = "project-text">
  <h1 class="project-title">${item.title}</h1>
  <p class="project-description">
   ${item.desc}
  </p>
  <div class="project-link-tech-stack-wrapper">
    <div class="project-links">
      <a
        href=${item.github}
        target="_blank"
        class="project-github-link"
        ><img src="./assets/github.png" alt="" /><span>Github</span></a
      >
      <a
        href=${item.live}
        target="_blank"
        class="project-deployed-link"
        ><img src="./assets/netlify.png" alt="" />Live</a
      >
    </div>
    <div class="tech-stack">

    ${allImages}
      
      
    </div>
  </div>
  </div>
</article>`;
});

//----------------mix it up------------
const containerEl = document.querySelector(".projects-container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});
mixer.filter(".best");
// ==============EMAIL JS _==============
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-emailForm");
const contactProject = document.getElementById("contact-project");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    contactMessage.textContent = "Write all the input fields";
    return;
  }

  emailjs
    .send(
      "service_8b1ao6c", // Verifikasi ID ini
      "template_skrqfhs", // Verifikasi ID ini
      {
        user_name: contactName.value,
        user_email: contactEmail.value,
        user_project: contactProject.value,
        to_email: "221110226@students.mikroskil.ac.id",
        },
      "CLTfLIvnCh3T8ssU6" 
    )
    .then(() => {
      contactMessage.classList.remove("color-red");
      contactMessage.classList.add("color-blue");
      contactMessage.textContent = "Message sent ✅";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 4000);
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      contactMessage.classList.remove("color-blue");
      contactMessage.classList.add("color-red");
      contactMessage.textContent = "OOPS! something went wrong";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 3000);
    });

  contactName.value = "";
  contactEmail.value = "";
  contactProject.value = "";
};

contactForm.addEventListener("submit", sendEmail);

const projectCategories = document.querySelectorAll(".project-categories>li");
const resetProjectCategories = () => {
  projectCategories.forEach((projectCategory) => {
    projectCategory.classList.remove("active");
  });
};

projectCategories.forEach((projectCategory) => {
  projectCategory.addEventListener("click", () => {
    resetProjectCategories();
    projectCategory.classList.add("active");
  });
});

const downloadFile = () => {
  const link = document.createElement("a");
};
document.getElementById("resume-button-2").addEventListener("click", () => {
  downloadFile();
});
document.getElementById("resume-button-1").addEventListener("click", () => {
  downloadFile();
});
document.getElementById("resume-button-3").addEventListener("click", () => {
  downloadFile();
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document
  .getElementById("linkedin-contact-img")
  .addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/devon-loen-a67513326/", "_blank");
  });

document.getElementById("github-contact-img").addEventListener("click", () => {
  window.open("https://github.com/devonloen", "_blank");
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
