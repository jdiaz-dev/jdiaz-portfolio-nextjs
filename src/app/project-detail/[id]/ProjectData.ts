// data/projects.data.ts
import { Project } from "./project.types";

export const projectsData: Project[] = [
  {
    id: "payment-conciliator",
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
    architectureDescription:
      "Implementé una arquitectura completamente serverless utilizando los servicios nativos de AWS, lo que permitió:",
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

    architectureDescription:
      "Implementé el patrón SAGA choreography para coordinar transacciones distribuidas:",
    architecturePoints: [
      "Apache Kafka como bus de eventos para desacoplamiento",
      "Lógica de compensación personalizada por microservicio",
      "Garantía de integridad de datos en escenarios de fallo parcial",
      "Stored procedures optimizados para reportería",
    ],
    components: [
      {
        title: "Patrón SAGA",
        description:
          "Implementación choreography para transacciones distribuidas con compensación automática en caso de fallos.",
      },
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
    techStack: `Arquitectura:
├── Microservicios (Node.js)
├── Apache Kafka Event Bus
├── PostgreSQL Database
└── SAGA Orchestration Logic

Características Clave:
├── Rollback automático en fallos
├── Operaciones idempotentes
├── Event sourcing
└── Transacciones de compensación`,
    businessImpact: [
      "Procesamiento confiable de pagos para miles de comercios",
      "Mantenimiento de integridad de datos en entorno distribuido complejo",
      "Escalabilidad para agregar nuevos servicios sin afectar existentes",
      "Mejora en la agilidad del negocio mediante arquitectura basada en eventos",
    ],
  },
  {
    id: "loan-payment-consultant",
    title: "Plataforma de Microservicios Bancarios de Alto Rendimiento",
    company: "Confidencial",
    industry: "Banca Digital / Servicios Financieros",
    scale: "1,000,000 usuarios bancarios",
    metrics: [
      { number: "1M", label: "Usuarios Bancarios" },
      { number: "60%", label: "Mejora en Performance" },
      { number: "100%", label: "Aislamiento de Lógica" },
      { number: "50%", label: "Reducción Tiempo Deploy" },
    ],
    overview:
      "Sistema de consulta de pagos de cuotas bancarias desarrollado para una entidad financiera. El software permite a los usuarios bancarios consultar el estado de sus pagos de manera rápida y segura.",

    architectureDescription:
      "Implementé arquitectura hexagonal (puertos y adaptadores):",
    architecturePoints: [
      "Aislamiento de lógica de negocio de dependencias externas",
      "Optimización de consultas SQL Server para carga concurrente",
      "Base de datos de grafos Neo4j para relaciones complejas",
      "Patrones DDD y CQRS para separación de responsabilidades",
    ],
    components: [
      {
        title: "Arquitectura Hexagonal",
        description:
          "Separación de lógica de negocio mediante puertos y adaptadores, mejorando testabilidad y mantenibilidad.",
      },
      {
        title: "SQL Server Optimizado",
        description:
          "Base de datos relacional con queries optimizados y índices estratégicos para alta concurrencia.",
      },
      {
        title: "Neo4j Graph Database",
        description:
          "Base de datos de grafos para modelar relaciones complejas entre cuentas, transacciones y usuarios.",
      },
      {
        title: "Queries Cypher",
        description:
          "Queries personalizadas en Cypher para análisis de datos relacionales en tiempo real.",
      },
    ],
    techStack: `Backend:
├── Node.js
├── Arquitectura Hexagonal
├── SQL Server (optimizado)
└── Neo4j Graph Database

Patrones de Diseño:
├── Inyección de Dependencias
├── Repository Pattern
├── Domain-Driven Design
└── Principios CQRS`,
    businessImpact: [
      "Desarrollo independiente de módulos, acelerando entrega de nuevas funcionalidades",
      "Aplicación bancaria robusta, escalable y fácil de mantener",
      "Capacidad de soportar crecimiento continuo de usuarios sin rediseño",
      "Reducción de tiempo de desarrollo de nuevas features en 50%",
      "Mejora en la calidad del código y reducción de bugs en producción",
    ],
  },
];
