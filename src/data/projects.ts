export interface Project {
  id: number;
  title: string;
  detailUrl: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Conciliador de Pagos en Tiempo Real",
    detailUrl: "/project-detail/payment-conciliator",
    description:
      "Sistema de conciliación de pagos serverless de alto rendimiento desarrollado para un importante banco argentino con más de 6 millones de usuarios activos. El sistema procesa transacciones en tiempo real, garantizando la reconciliación precisa de millones de operaciones mensuales.",
    image: "/images/fintech4.png",
    technologies: ["AWS", "Node.js", "OpenSearch"],
    link: "https://nutrition.athvio.com/landing",
  },
  {
    id: 2,
    title: "Proveedor de Pasarela de Pagos",
    detailUrl: "/project-detail/payment-gateway",
    description:
      "Sistema de manejo de transacciones distribuidas provenientes de dispositivos POS y links de pago desarrollado para una pasarela de pagos peruana. El sistema administra y procesa pagos de forma segura garantizando las operaciones de 5500 comercios afiliados.",
    image: "/images/fintech3.webp",
    technologies: ["Node.js", "MySQL", "MongoDB", "Docker"],
    link: "https://brave-jepsen-d793ab.netlify.app/",
  },
  {
    id: 3,
    title: "Plataforma de consulta de pagos de cuotas bancarias",
    detailUrl: "/project-detail/loan-payment-consultant",
    description:
      "Sistema de consulta de pagos de cuotas bancarias desarrollado para una entidad financiera. El software permite a los usuarios bancarios consultar el estado de sus pagos de manera rápida y segura.",
    image: "/images/fintech2.jpg",
    technologies: ["Node.js", "Azure", "SQL Server"],
    link: "https://brave-jepsen-d793ab.netlify.app/",
  },
];
