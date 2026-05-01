- Arquitectura

El sistema está compuesto por:

Aplicación Node.js (2 instancias)
Balanceador de carga (NGINX)
Monitoreo: Prometheus + Grafana
Logs: Elasticsearch + Filebeat + Kibana
Pipeline CI/CD con GitHub Actions
Escaneo de seguridad con Trivy

Flujo:
App → Logs → Filebeat → Elasticsearch → Kibana
App → Métricas → Prometheus → Grafana

- Despliegue
Requisitos:
Docker
Docker Compose
Ejecutar:
docker-compose up --build -d

- Monitoreo y Observabilidad
Grafana: visualización de métricas
Prometheus: recolección de métricas
Kibana: visualización de logs
Filebeat: envío de logs

Se configuró una alerta en Grafana para detectar la caída de la aplicación.

- Seguridad (DevSecOps)
Escaneo de vulnerabilidades con Trivy en CI/CD
No exposición de credenciales en el repositorio
Uso de imágenes base oficiales
- Pruebas realizadas
Generación de tráfico hacia la aplicación
Verificación de logs en Kibana
Visualización de métricas en Grafana
Simulación de fallo deteniendo contenedores
Validación del pipeline CI/CD