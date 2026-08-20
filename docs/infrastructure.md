---
sidebar_position: 5
---

# Infraestructura y disponibilidad

Colombia Geo API está desplegada actualmente utilizando servicios gratuitos para la aplicación y la base de datos.

Esta configuración permite mantener la API disponible para demostraciones, aprendizaje, pruebas y evaluación del proyecto sin necesidad de infraestructura de pago.

## Infraestructura actual

| Componente    | Servicio   | Plan      |
|---------------|------------|-----------|
| API           | Render     | Free      |
| Base de datos | PostgreSQL | Free Tier |

## Disponibilidad

Los planes gratuitos pueden tener ciertas limitaciones de infraestructura.

Como consecuencia, pueden producirse situaciones como:

- Reinicios del servicio.
- Tiempos de respuesta elevados.
- Suspensión temporal de la instancia.
- Periodos ocasionales de indisponibilidad.

Esto significa que la API puede no responder inmediatamente después de un periodo de inactividad o puede experimentar tiempos de respuesta superiores a los esperados.

:::warning
La infraestructura actual está destinada principalmente a demostración, aprendizaje, pruebas y evaluación.

**No se recomienda utilizar esta instancia como infraestructura para aplicaciones críticas o entornos de producción.**
:::

## Uso en producción

Para un entorno productivo se recomienda utilizar infraestructura con recursos y garantías de disponibilidad adecuadas.

Una configuración de producción debería considerar, entre otros aspectos:

- Recursos de servidor adecuados.
- Base de datos administrada con garantías de disponibilidad.
- Backups y estrategia de recuperación.
- Monitoreo.
- Logs centralizados.
- Alertas.
- Escalabilidad.
- Políticas de seguridad.
- Alta disponibilidad según las necesidades de la aplicación.

## El proyecto

La limitación descrita anteriormente corresponde a la **infraestructura utilizada actualmente**, no necesariamente al diseño de la aplicación.

La API fue desarrollada teniendo en cuenta prácticas como:

- Arquitectura modular.
- Clean Code.
- Arquitectura hexagonal.
- Validación de datos.
- Manejo centralizado de excepciones.
- Autenticación y autorización.
- Rate limiting.
- CORS.
- Security headers.
- Health checks.
- Persistencia con PostgreSQL.

Por lo tanto, la aplicación puede ser desplegada posteriormente sobre una infraestructura adecuada para producción.