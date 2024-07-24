export const taskTypes = {
  CLOUDWATCH_METRIC: "CLOUDWATCH METRIC_EXECUTION",
  CLOUDWATCH_LOG_GROUP: "CLOUDWATCH FILTER_LOG_EVENTS",
  EKS_GET_PODS: "EKS GET_PODS",
  EKS_GET_DEPLOYMENTS: "EKS GET_DEPLOYMENTS",
  EKS_GET_EVENTS: "EKS GET_EVENTS",
  EKS_GET_SERVICES: "EKS GET_SERVICES",
  EKS_KUBECTL_COMMAND: "EKS KUBECTL_COMMAND",
  GKE_GET_PODS: "GKE GET_PODS",
  GKE_GET_DEPLOYMENTS: "GKE GET_DEPLOYMENTS",
  GKE_GET_EVENTS: "GKE GET_EVENTS",
  GKE_GET_SERVICES: "GKE GET_SERVICES",
  GKE_KUBECTL_COMMAND: "GKE KUBECTL_COMMAND",
  KUBERNETES_COMMAND: "KUBERNETES COMMAND",
  DATADOG_SERVICE_METRIC_EXECUTION: "DATADOG SERVICE_METRIC_EXECUTION",
  DATADOG_QUERY_METRIC_EXECUTION: "DATADOG QUERY_METRIC_EXECUTION",
  NEW_RELIC_ENTITY_APPLICATION_GOLDEN_METRIC_EXECUTION:
    "NEW_RELIC ENTITY_APPLICATION_GOLDEN_METRIC_EXECUTION",
  NEW_RELIC_ENTITY_DASHBOARD_WIDGET_NRQL_METRIC_EXECUTION:
    "NEW_RELIC ENTITY_DASHBOARD_WIDGET_NRQL_METRIC_EXECUTION",
  NEW_RELIC_NRQL_METRIC_EXECUTION: "NEW_RELIC NRQL_METRIC_EXECUTION",
  GRAFANA_PROMQL_METRIC_EXECUTION: "GRAFANA PROMQL_METRIC_EXECUTION",
  GRAFANA_PROMETHEUS_DATASOURCE:
    "GRAFANA PROMETHEUS_DATASOURCE_METRIC_EXECUTION",
  GRAFANA_LOKI_QUERY_LOGS: "GRAFANA_LOKI QUERY_LOGS",
  GRAFANA_VPC_PROMQL_METRIC_EXECUTION: "GRAFANA_VPC PROMQL_METRIC_EXECUTION",
  GRAFANA_MIMIR_PROMQL_METRIC_EXECUTION:
    "GRAFANA_MIMIR PROMQL_METRIC_EXECUTION",
  AZURE_FILTER_LOG_EVENTS: "AZURE FILTER_LOG_EVENTS",
  POSTGRES_SQL_QUERY: "POSTGRES SQL_QUERY",
  CLICKHOUSE_SQL_QUERY: "CLICKHOUSE SQL_QUERY",
  SQL_DATABASE_CONNECTION_SQL_QUERY: "SQL_DATABASE_CONNECTION SQL_QUERY",
  API_HTTP_REQUEST: "API HTTP_REQUEST",
  BASH_COMMAND: "BASH COMMAND",
  DOCUMENTATION_MARKDOWN: "DOCUMENTATION MARKDOWN",
  DOCUMENTATION_IFRAME: "DOCUMENTATION IFRAME",
  ELASTIC_SEARCH_QUERY_LOGS: "ELASTIC_SEARCH QUERY_LOGS",
  GCM_MQL_EXECUTION: "GCM MQL_EXECUTION",
  GCM_FILTER_LOG_EVENTS: "GCM FILTER_LOG_EVENTS",
  SMTP_SEND_EMAIL: "SMTP SEND_EMAIL",
};
