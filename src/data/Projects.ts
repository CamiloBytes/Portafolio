// Aquí guardamos la info de los proyectos como objetos
export const projects = [
  {
    id: 1,
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    tech: ["HTML", "SCSS", "Python", "Flask"],
    image: "/projects/chertnodes.png", // pon aquí tu imagen
    links: [
      { label: "Live", url: "#", type: "primary" },
      { label: "Cached", url: "#", type: "secondary" },
    ],
  },
  {
    id: 2,
    title: "ProtectX",
    description: "Discord anti-crash bot",
    tech: ["React", "Express", "Discord.js", "Node.js"],
    image: "/projects/protectx.png",
    links: [
      { label: "Live", url: "#", type: "primary" },
    ],
  },
  {
    id: 3,
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    tech: ["CSS", "Express", "Node.js"],
    image: "/projects/kahoot.png",
    links: [
      { label: "Live", url: "#", type: "primary" },
    ],
  },
]
