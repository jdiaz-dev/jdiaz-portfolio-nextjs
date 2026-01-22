// data/projects.data.ts
import { Project } from "../app/project-detail/[id]/project.types";

export const projectsSpanishData: Project[] = [
  {
    id: "payment-conciliator",
    image: "/images/fintech4.png",
    title: "Conciliador de Pagos en Tiempo Real",
    company: "Confidencial",
    industry: "Servicios Financieros (Banca)",
    scale: "6M+ usuarios, 20M solicitudes mensuales",
    metrics: [
      { number: "600 mil", label: "Transacciones conciliadas" },
      { number: "20 millones", label: "Solicitudes mensuales" },
      { number: "99.9%", label: "Disponibilidad Operativa del servicio" },
      { number: "99%", label: "Reducción del Tiempo Manual de Conciliación" },
    ],
    overview:
      "Sistema de conciliación de pagos serverless de alto rendimiento desarrollado para un importante banco argentino con más de 6 millones de usuarios activos. El sistema procesa transacciones en tiempo real, garantizando la conciliación precisa de millones de operaciones mensuales.",
    technologies: ["AWS", "Node.js", "OpenSearch"],
    architectureDescription:
      "Se implementó una arquitectura completamente serverless utilizando los servicios nativos de AWS, lo que permitió:",
    architecturePoints: [
      "Escalamiento automático basado en demanda",
      "Costos optimizados (pago por uso)",
      "Alta disponibilidad sin gestión de servidores",
      "Despliegue rápido mediante Infrastructure as Code",
    ],
    components: [
      {
        title: "AWS OpenSearch",
        description:
          "Motor de búsqueda y conciliación en tiempo real. Permitió búsquedas complejas de millones de transacciones en milisegundos.",
      },
      {
        title: "AWS Lambda",
        description:
          "Funciones serverless para procesamiento de eventos. Manejo de lógica de negocio, validaciones y transformaciones de datos.",
      },
      {
        title: "AWS StepFunctions",
        description:
          "Orquestación de workflows complejos. Coordinación de múltiples Lambdas para procesos de conciliación de múltiples pasos.",
      },
      {
        title: "SQS/SNS",
        description:
          "Sistema de mensajería para procesamiento asíncrono. Desacoplamiento de servicios y manejo de picos de carga.",
      },
    ],
    techStack: `Backend:
├── Node.js + TypeScript
├── AWS SDK

Infraestructura:
├── AWS CloudFormation
├── AWS Lambda
├── AWS OpenSearch
├── AWS DynamoDB
├── AWS StepFunctions
├── AWS SQS/SNS
└── AWS CloudWatch

Seguridad:
├── AWS IAM Roles & Policies
└── VPC & Security Groups`,
    businessImpact: [
      "Usuarios satisfechos: Conciliación instantánea de pagos permitió abonar el dinero de forma más rápida a comercios asociados",
      "Reducción de costos operativos: Automatización del 99% de tareas manuales de conciliación",
      "Escalabilidad garantizada: Sistema preparado para crecer junto con el negocio sin rediseño de arquitectura",
      "Confiabilidad: 99.9% de disponibilidad para operaciones críticas del negocio",
      "Visibilidad: Métricas y dashboards en tiempo real para toma de decisiones basada en datos",
    ],
  },
  {
    id: "payment-gateway",
    image: "/images/fintech3.webp",
    company: "Confidencial",
    title: "Proveedor de Pasarela de Pagos",
    industry: "Fintech / Procesamiento de Pagos",
    scale: "5,500 comercios activos",
    metrics: [
      { number: "5,500", label: "Comercios Activos" },
      { number: "99.9%", label: "Disponibilidad Operativa del servicio" },
      { number: "100%", label: "Habilitación de Pagos en Linea" },
    ],
    overview:
      "Sistema de manejo de transacciones distribuidas provenientes de dispositivos POS y links de pago desarrollado para una pasarela de pagos peruana. El sistema administra y procesa pagos de forma segura garantizando las operaciones de 5500 comercios afiliados.",
    technologies: ["Node.js", "MySQL", "MongoDB", "Docker"],
    architectureDescription:
      "Se implementó una arquitectura de microservicios en Node.js basada en eventos y HTTP lo que permitió:",
    architecturePoints: [
      "Desacoplamiento de servicios para mayor resiliencia",
      "Escalabilidad independiente para cada servicio según la demanda",
      "Resiliencia y aislamiento de fallos",
    ],
    components: [
      {
        title: "Apache Kafka",
        description:
          "Bus de eventos para comunicación asíncrona entre microservicios y sincronización de sistemas.",
      },
      {
        title: "PostgreSQL",
        description:
          "Base de datos relacional con stored procedures optimizados para reportes y transacciones.",
      },
      {
        title: "Microservicios Node.js",
        description:
          "Servicios independientes con lógica de negocio aislada y operaciones idempotentes.",
      },
    ],
    techStack: `Backend:
├── Microservicios (Node.js)
├── Transisor de mensajes Apache Kafka
└── Base de datos PostgreSQL`,
    businessImpact: [
      "Usuarios satisfechos: Procesamiento confiable de pagos para miles de comercios",
      "Diversificación del negocio: Habilitación de pagos en línea para nuevos canales de venta",
    ],
  },
  {
    id: "loan-payment-consultant",
    image: "/images/fintech2.jpg",
    title: "Plataforma de Microservicios Bancarios de Alto Rendimiento",
    company: "Confidencial",
    industry: "Banca Digital / Servicios Financieros",
    scale: "1,000,000 usuarios bancarios",
    metrics: [
      { number: "1M", label: "Usuarios Bancarios" },
      { number: "99.9%", label: "Disponibilidad Operativa del servicio" },
      { number: "100%", label: "Consulta de Pagos en Línea" },
    ],
    overview:
      "Sistema de consulta de pagos de cuotas bancarias desarrollado para una entidad financiera peruana. El software permite a los usuarios bancarios consultar el estado de sus pagos de manera rápida y segura.",
    technologies: ["Node.js", "Azure", "SQL Server"],
    architectureDescription:
      "Se implementó microservicios con arquitectura hexagonal y Desarrollo Dirigido por Dominio (DDD):",
    architecturePoints: [
      "Aislamiento de lógica de negocio de dependencias externas",
      "Escalabilidad independiente para cada servicio según la demanda",
      "Resiliencia y aislamiento de fallos",
    ],
    components: [
      {
        title: "SQL Server",
        description:
          "Base de datos relacional con queries optimizados y índices estratégicos para alta concurrencia.",
      },
      {
        title: "Microservicios Node.js",
        description:
          "Servicios independientes con lógica de negocio aislada y operaciones idempotentes.",
      },
      {
        title: "Docker",
        description:
          "Contenedores para despliegue y orquestación de microservicios, facilitando escalabilidad y mantenimiento.",
      },
    ],
    techStack: `Backend:
├── Node.js
├── SQL Server
└── Docker`,
    businessImpact: [
      "Escalabilidad y Mantenibilidad: Aplicación bancaria robusta, escalable y fácil de mantener",
      "Escalabilidad garantizada: Capacidad de soportar crecimiento continuo de usuarios sin rediseño",
    ],
  },
];
