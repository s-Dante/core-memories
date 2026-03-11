export const team = [
    {
        id: "dante-fernandez",
        name: "Dante Fernández",
        role: "Programador / Environment Artist",
        status: "Active",
        bio: "@s-Dante",
        image: "/resources/imgs/AboutImgs/Crew/DanteFdz2.png",
        skills: ["Programador", "Environment Artist"],
        socials: {
            linkedin: "https://www.linkedin.com/in/s-dante/",
            github: "https://github.com/s-Dante"
        },
        projects: ["world-park", "robot-mission"]
    },
    {
        id: "fernanda-gonzalez",
        name: "Fernanda González",
        role: "Animadora 2D / Social Media Manager",
        status: "Active",
        bio: "@thecurlyhairgrl",
        image: "/resources/imgs/AboutImgs/Crew/FerGzz.jpg",
        skills: ["Animadora 2D", "Social Media Manager"],
        socials: {
            portfolio: "https://readymag.website/u172468742/5593618/",
            instagram: "https://instagram.com/okidokifercha/"
        },
        projects: ["world-park", "robot-mission"]
    },
    // {
    //     id: "stacy-chapa",
    //     name: "Stacy Chapa",
    //     role: "Animadora 2D / Concept Artist",
    //     status: "Inactive",
    //     bio: "@h_a_ls",
    //     image: "/resources/imgs/AboutImgs/Crew/StacyChapa.jpg",
    //     skills: ["Animadora 2D", "Concept Artist"],
    //     socials: {
    //         instagram: "https://www.instagram.com/h_a_ls",
    //         linkedin: "https://www.linkedin.com/in/stacychapa/"
    //     },
    //     projects: ["world-park"]
    // },
    {
        id: "sofia-villegas",
        name: "Sofia Villegas",
        role: "Lead 3D Artist",
        status: "Active",
        bio: "@fiiasso",
        image: "/resources/imgs/AboutImgs/Crew/SofiaVillegas.jpg",
        skills: ["Lead 3D Artist"],
        socials: {
            portfolio: "https://www.sofiavillegas.com/#contacto",
            instagram: "https://www.instagram.com/fiiasso/"
        },
        projects: ["world-park", "robot-mission"]
    }
];

export const getTeamMemberById = (id) => team.find((member) => member.id === id);
export const getAllTeamMembers = () => team;
export const getActiveTeam = () => team.filter(member => member.status === "Active");
export const getAlumni = () => team.filter(member => member.status === "Alumni");
