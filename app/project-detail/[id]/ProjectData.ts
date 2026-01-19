// data/projects.data.ts
import { Project } from "./project.types";

export const projectsData: Project[] = [
  {
    id: "payment-conciliator",
    title: "Conciliador de Pagos en Tiempo Real",
    subtitle:
      "Sistema serverless de alta disponibilidad para procesamiento masivo de transacciones bancarias",
    industry: "Servicios Financieros (Banca)",
    scale: "6M+ usuarios, 20M solicitudes mensuales",
    role: "Backend Engineer",
    duration: "Mayo 2023 - Presente",
    tags: [
      "Node.js",
      "TypeScript",
      "AWS Lambda",
      "OpenSearch",
      "DynamoDB",
      "ECS Fargate",
      "StepFunctions",
      "CloudFormation",
    ],
    metrics: [
      { number: "20M", label: "Solicitudes Mensuales" },
      { number: "6M+", label: "Usuarios Bancarios" },
      { number: "99.9%", label: "Uptime Logrado" },
      { number: "95%", label: "Reducción Tiempo Manual" },
    ],
    overview:
      "Sistema de conciliación de pagos serverless de alto rendimiento desarrollado para un importante banco argentino con más de 6 millones de usuarios activos. El sistema procesa transacciones en tiempo real, garantizando la reconciliación precisa de millones de operaciones mensuales.",
    challengeIntro: "Diseñar e implementar una solución escalable capaz de:",
    challengePoints: [
      "Procesar 20 millones de solicitudes mensuales con latencia mínima",
      "Mantener alta disponibilidad (99.9% uptime) para operaciones críticas",
      "Conciliar transacciones de múltiples fuentes de pago en tiempo real",
      "Escalar automáticamente según la demanda sin intervención manual",
      "Garantizar la seguridad y trazabilidad de todas las operaciones",
    ],
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
          "Motor de búsqueda y conciliación en tiempo real. Permite búsquedas complejas y agregaciones de millones de transacciones en milisegundos.",
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
        title: "DynamoDB",
        description:
          "Base de datos NoSQL para almacenamiento de transacciones y estados. Escalamiento automático y baja latencia.",
      },
      {
        title: "SQS/SNS",
        description:
          "Sistema de mensajería para procesamiento asíncrono. Desacoplamiento de servicios y manejo de picos de carga.",
      },
      {
        title: "ECS Fargate",
        description:
          "Contenedores serverless para servicios de larga ejecución. Load Balancer para distribución de tráfico.",
      },
    ],
    techStack: `Backend:
├── Node.js + TypeScript
├── AWS SDK v3
└── Custom Lambda Layers

Infraestructura:
├── AWS CloudFormation (IaC)
├── AWS Lambda
├── AWS OpenSearch Service
├── AWS DynamoDB
├── AWS ECS Fargate + ALB
├── AWS StepFunctions
├── AWS SQS/SNS
└── AWS CloudWatch (Monitoring)

Seguridad:
├── AWS IAM Roles & Policies
├── VPC & Security Groups
└── AWS Secrets Manager`,
    achievements: [
      {
        title: "Procesamiento Masivo",
        description:
          "Logré implementar un sistema capaz de procesar 20 millones de solicitudes mensuales con latencias inferiores a 100ms para el 95% de las transacciones.",
      },
      {
        title: "Alta Disponibilidad",
        description:
          "Alcancé un 99.9% de uptime mediante arquitectura multi-AZ, auto-scaling y monitoreo proactivo con CloudWatch.",
      },
      {
        title: "Disaster Recovery",
        description:
          "Implementé procedimientos de recuperación ante desastres que evitaron la eliminación catastrófica de infraestructura en ambiente de producción mediante validaciones de CloudFormation.",
      },
      {
        title: "Optimización de Costos",
        description:
          "Optimicé las políticas basadas en recursos de Lambda para soportar múltiples suscripciones SNS, reduciendo la cantidad de funciones necesarias en un 40%.",
      },
      {
        title: "Eficiencia Operativa",
        description:
          "Reduje el tiempo de conciliación manual en 95%, permitiendo que el equipo de operaciones se enfocara en casos excepcionales en lugar de tareas repetitivas.",
      },
    ],
    challenges: [
      {
        title: "Escalamiento de OpenSearch",
        description:
          "Configuré clústeres de OpenSearch con réplicas y sharding apropiado para manejar el volumen de búsquedas sin degradación de performance.",
      },
      {
        title: "Orquestación Compleja",
        description:
          "Diseñé workflows en StepFunctions con manejo de errores, reintentos y compensación para garantizar la consistencia eventual de las transacciones.",
      },
      {
        title: "Seguridad en Arquitectura Distribuida",
        description:
          "Implementé principio de mínimo privilegio con políticas IAM granulares y encriptación end-to-end para datos sensibles.",
      },
      {
        title: "Monitoreo y Observabilidad",
        description:
          "Configuré dashboards en CloudWatch con alertas proactivas para identificar y resolver problemas antes de que afectaran a usuarios.",
      },
    ],
    businessImpact: [
      "Mejora en la experiencia del usuario: Conciliación instantánea de pagos, reduciendo tiempo de espera de horas a segundos",
      "Reducción de costos operativos: Automatización del 95% de tareas manuales de conciliación",
      "Escalabilidad garantizada: Sistema preparado para crecer junto con el negocio sin rediseño de arquitectura",
      "Confiabilidad: 99.9% de disponibilidad para operaciones críticas del negocio",
      "Visibilidad: Métricas y dashboards en tiempo real para toma de decisiones basada en datos",
    ],
  },
  {
    id: "saga-payment-system",
    title: "Gestor de Transacciones Distribuidas con Patrón SAGA",
    subtitle:
      "Sistema de gestión de transacciones para plataforma de pagos mediante dispositivos POS",
    industry: "Fintech / Procesamiento de Pagos",
    scale: "5,500 comercios activos",
    role: "Backend Engineer",
    duration: "Enero 2022 - Febrero 2023",
    tags: [
      "Node.js",
      "SAGA Pattern",
      "Apache Kafka",
      "PostgreSQL",
      "Microservicios",
    ],
    metrics: [
      { number: "5,500", label: "Comercios Activos" },
      { number: "40%", label: "Reducción de Fallos" },
      { number: "2", label: "Sistemas Sincronizados" },
      { number: "100%", label: "Consistencia de Datos" },
    ],
    overview:
      "Sistema de gestión de transacciones distribuidas para una plataforma de pagos mediante dispositivos POS, implementando el patrón SAGA para garantizar la consistencia de datos a través de múltiples microservicios.",
    challengeIntro:
      "Diseñar un sistema de procesamiento de pagos que garantizara:",
    challengePoints: [
      "Consistencia transaccional en arquitectura de microservicios distribuidos",
      "Capacidad de revertir cambios parciales en caso de fallos",
      "Coordinación de operaciones complejas que involucran múltiples servicios",
      "Sincronización confiable entre sistemas críticos",
      "Generación automatizada de reportes de pagos",
    ],
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
    achievements: [
      {
        title: "Implementación SAGA Exitosa",
        description:
          "Implementación exitosa del patrón SAGA sirviendo a 5,500 comercios activos con consistencia garantizada.",
      },
      {
        title: "Desacoplamiento Completo",
        description:
          "Desacoplamiento completo de microservicios mediante Apache Kafka, permitiendo sincronización confiable entre 2 sistemas críticos.",
      },
      {
        title: "Automatización de Reportes",
        description:
          "Desarrollo de stored procedures en PostgreSQL para automatización de reportes de pagos semanales.",
      },
      {
        title: "Reducción de Inconsistencias",
        description:
          "Reducción de 40% en inconsistencias transaccionales mediante mecanismos de compensación inteligentes.",
      },
    ],
    challenges: [
      {
        title: "Coordinación Distribuida",
        description:
          "Diseñé un sistema de eventos que garantiza el orden correcto de operaciones en flujos de compensación complejos.",
      },
      {
        title: "Idempotencia",
        description:
          "Implementé operaciones idempotentes en todos los microservicios para manejar reintentos de forma segura.",
      },
      {
        title: "Monitoreo de Transacciones",
        description:
          "Creé sistema de tracking para seguimiento de transacciones distribuidas a través de múltiples servicios.",
      },
    ],
    businessImpact: [
      "Procesamiento confiable de pagos para miles de comercios",
      "Mantenimiento de integridad de datos en entorno distribuido complejo",
      "Escalabilidad para agregar nuevos servicios sin afectar existentes",
      "Mejora en la agilidad del negocio mediante arquitectura basada en eventos",
    ],
  },
  {
    id: "banking-microservices",
    title: "Plataforma de Microservicios Bancarios de Alto Rendimiento",
    subtitle:
      "Plataforma escalable para aplicación bancaria con arquitectura hexagonal",
    industry: "Banca Digital / Servicios Financieros",
    scale: "1,000,000 usuarios bancarios",
    role: "Backend Engineer",
    duration: "Julio 2021 - Diciembre 2022",
    tags: [
      "Node.js",
      "Arquitectura Hexagonal",
      "SQL Server",
      "Neo4j",
      "DDD",
      "CQRS",
    ],
    metrics: [
      { number: "1M", label: "Usuarios Bancarios" },
      { number: "60%", label: "Mejora en Performance" },
      { number: "100%", label: "Aislamiento de Lógica" },
      { number: "50%", label: "Reducción Tiempo Deploy" },
    ],
    overview:
      "Plataforma de microservicios para aplicación bancaria enfocada en rendimiento, escalabilidad y arquitectura limpia. El proyecto implicó optimización de sistemas existentes para soportar un millón de usuarios concurrentes mientras se protegía la lógica de negocio crítica mediante patrones arquitectónicos avanzados.",
    challengeIntro: "Escalar una aplicación bancaria para:",
    challengePoints: [
      "Soportar 1 millón de usuarios concurrentes",
      "Mantener tiempos de respuesta óptimos bajo alta carga",
      "Proteger la compleja lógica de negocio del dominio bancario",
      "Manejar alto volumen de transacciones simultáneas",
      "Facilitar el mantenimiento y evolución del código",
    ],
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
    achievements: [
      {
        title: "Escalamiento Exitoso",
        description:
          "Escalamiento exitoso de la plataforma para soportar 1,000,000 de usuarios bancarios sin degradación de rendimiento.",
      },
      {
        title: "Arquitectura Limpia",
        description:
          "Implementación de arquitectura hexagonal que aisló y protegió la lógica de negocio crítica, mejorando la mantenibilidad del código en 70%.",
      },
      {
        title: "Optimización de Base de Datos",
        description:
          "Optimización de base de datos SQL Server para manejar solicitudes concurrentes de alto volumen, mejorando performance en 60%.",
      },
      {
        title: "Diseño de Grafos",
        description:
          "Diseño e implementación de esquema de base de datos de grafos en Neo4j para análisis complejo de relaciones entre entidades.",
      },
      {
        title: "Desarrollo Ágil",
        description:
          "Desarrollo de queries Cypher eficientes para operaciones de búsqueda y análisis en tiempo real, reduciendo tiempos de consulta en 80%.",
      },
    ],
    challenges: [
      {
        title: "Migración a Arquitectura Hexagonal",
        description:
          "Migré gradualmente el código legacy a arquitectura hexagonal sin detener el servicio, usando el patrón Strangler Fig.",
      },
      {
        title: "Optimización de Queries",
        description:
          "Identifiqué y optimicé queries N+1 y agregué índices estratégicos en SQL Server para mejorar performance bajo carga.",
      },
      {
        title: "Modelado de Grafos",
        description:
          "Diseñé esquema de grafos que representa relaciones complejas del dominio bancario de forma eficiente y escalable.",
      },
    ],
    businessImpact: [
      "Desarrollo independiente de módulos, acelerando entrega de nuevas funcionalidades",
      "Aplicación bancaria robusta, escalable y fácil de mantener",
      "Capacidad de soportar crecimiento continuo de usuarios sin rediseño",
      "Reducción de tiempo de desarrollo de nuevas features en 50%",
      "Mejora en la calidad del código y reducción de bugs en producción",
    ],
  },
];
