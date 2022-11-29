
let tech_stacks=[
  {
    "teck_name": "Java",
    "img_link":"https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ"
  },
  {
    "teck_name": "SpringBoot",
    "img_link":"https://drive.google.com/uc?export=view&id=1c6meiP7Ay12p9HfWI6Dbpp1zb1XVUDn6"
  },
  {
    "teck_name": "JDBC",
    "img_link":"https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ"
  },
  {
    "teck_name": "MySQL",
    "img_link":"./Images/mysql_logo.png"
  },
  {
    "teck_name": "Hibernate",
    "img_link":"https://cdn.freebiesupply.com/logos/large/2x/hibernate-logo-png-transparent.png"
  },
  {
    "teck_name": "JavaScript",
    "img_link":"https://drive.google.com/uc?export=view&id=1PAdZ31CeY83OFFT-MSACi9bOT6DUfFnY"
  },
  {
    "teck_name": "CSS",
    "img_link":"https://drive.google.com/uc?export=view&id=1csttg5pfFGGt7yE4A1YC2VxNpOPg43DG"
  },
  {
    "teck_name": "HTML",
    "img_link":"https://drive.google.com/uc?export=view&id=1OM8fgg4s361EblZU6k4i4DdUQ3sZxUDC"
  },
  {
    "teck_name": "GitHub",
    "img_link":"https://cdn-icons-png.flaticon.com/512/25/25231.png"
  },
  {
    "teck_name": "VS code",
    "img_link":"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
  }    

]

let techStackDiv = document.getElementById("tech");

tech_stacks.forEach(tech=>{


  let comp = document.createElement("div");

  let img = document.createElement("img");
  img.src = tech.img_link;
  img.alt= tech.teck_name;
  let name = document.createElement("p");
  name.innerText=tech.teck_name;

  comp.append(img,name);

  techStackDiv.append(comp);  
})

let project_details = [
    {"project_name": "Urbancompany Clone",
    "details": "Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services.",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "banner":"Images/urbancompany.png",
    "deployed": "https://jolly-donut-35e1f0.netlify.app/",
    "gitlink": " https://github.com/hustler-abhi/busy-motion-6100"},

    {"project_name": "Nykaa Clone",
     "details": "Nykaa is an Indian e-commerce company, founded by Falguni Nayar. It sells beauty, wellness and fashion products across websites, mobile apps and  stores. ",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "banner":"Images/Nykaa.png",
    "deployed": "https://delicate-genie-32c37f.netlify.app/",
    "gitlink": "https://github.com/hustler-abhi/tested-request-4840"},

    {"project_name": "Masai Task Manager",
     "details": "Masai Task Manager is small application where user can add the task and also manage their task",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "data_base": "local storage",
    "banner":"Images/Task.png",
    "deployed": "https://timely-starburst-a659df.netlify.app",
    "gitlink": "https://github.com/masai-course/abhishek_fw20_0653/tree/master/unit-2/sprint-4/evaluation/u2-c4-template_818387/u2-c4-template"},
    {"project_name": "Hotstar Clone",
     "details": "Hotstar has a big streaming of Bollywood films like Jolly LLB 2, Pink, Hollywood movies like Deadpool and Guardian of the Galaxy.",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "data_base": "local storage",
    "banner":"Images/work3.png",
    "deployed": "https://preeminent-marzipan-04585e.netlify.app",
    "gitlink": ""}
];


project_details.forEach(project=>{

    let Projects_Div = document.getElementById("projects_div");

    let Maindiv= document.createElement("div");
    Maindiv.className="main"

    let pictureDiv = document.createElement("div");
    pictureDiv.className="picture";

    let laptopDiv = document.createElement("div");
    let screenDiv = document.createElement("div");
    let img=document.createElement("img");
    img.src = project.banner;
    screenDiv.append(img);
    laptopDiv.append(screenDiv);
    let base = document.createElement("div");
    let lower_base =document.createElement("div");

    pictureDiv.append(laptopDiv,base,lower_base);

    let descriptionDiv =document.createElement("div");
    descriptionDiv.className ="project_description";

    let nameDiv=document.createElement("div");
    nameDiv.innerText=project.project_name;
    let projectDetails = document.createElement("div");
    projectDetails.innerHTML =`<p>${project.details}</p><p>Tech Stack : ${project.tech_stack}</p><p>Database : ${project.data_base}</p>`;
    let buttonsDiv = document.createElement("div");
    let deployedBtn = document.createElement("button");
    deployedBtn.innerText = "Live";

    deployedBtn.onclick=()=>{
        window.open(project.deployed, "_blank");
    }

    let gitBtn = document.createElement("button");
    gitBtn.innerText = "GitHub";
    gitBtn.onclick=()=>{
        window.open(project.gitlink, "_blank");
    }

    buttonsDiv.append(deployedBtn,gitBtn);
    descriptionDiv.append(nameDiv,projectDetails,buttonsDiv);

    Maindiv.append(pictureDiv,descriptionDiv);
    Projects_Div.append(Maindiv);
});

// Mobile view tabs.........


let content=document.getElementById("content");
let bars = document.querySelector("#bar");
let cross = document.getElementById("cross");
bars.onclick=()=>{
  content.style.display="flex";    
  cross.style.display="flex";
  bars.style.display="none";  
}

cross.onclick=()=>{
  closedFun();
}

let contentDiv = document.querySelectorAll("#content>a");
contentDiv.forEach(ele=>{
    ele.onclick=()=>{
      closedFun();
  }
});

document.onscroll=()=>{
  closedFun();
}

let closedFun=()=>{
  content.style.display="none";
  bars.style.display="flex";
  cross.style.display="none";
}

// GitHubCalendar(".calendar", "Sayali-Divate");

//     // or enable responsive functionality:
// GitHubCalendar(".calendar", "Sayali-Divate", { responsive: true });

  
