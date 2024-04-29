export interface Step {
  name?: string;
  id?: string;
  dimension?: string;
  namespace?: string;
  description?: string;
  externalLinks?: ExternalLink[];
  isPrefetched?: boolean;
  notes?: string;
  source: string;
  modelTypes?: ModelTypeMap[];
  modelType?: string;
  selectedSource?: string;
  modelTypeOptions?: ModelTypesOption[];
  namespaceName?: string;
  assets?: any;
  region?: string;
  dimensionName?: string;
  dimensionValue?: string;
  dimensionIndex?: number;
  metric?: string;
  executioninprogress?: string;
  outputLoading?: boolean;
  showOutput?: boolean;
  outputError?: string;
  queryObj?: any;
  promql_label_option_values?: any;
  database?: string;
  db_query?: string;
  textNotes?: string;
  logGroup?: any;
  cw_log_query?: any;
  tasks?: PlaybookTask[];
  dashboard?: any;
  panel?: any;
  grafanaQuery?: any;
  options?: any;
  selectedOptions?: any;
  dbQuery?: string;
  page?: any;
  widget?: any;
  application_name?: string;
  golden_metric?: GoldenMetric;
  nrqlData?: any;
  datadogService?: any;
  datadogMetricFamily?: string;
  datadogEnvironment?: string;
  datadogMetric?: string;
  command?: any;
  cluster?: string;
  isOpen: boolean;
  isPlayground: boolean;
  globalVariables?: GlobalVariable[];
  isCopied?: boolean;
  errors?: any;
  showError: boolean;
  eksRegion?: string;
  eksNamespace?: string;
  query1?: string;
  query2?: string;
  formula?: string;
  requiresFormula?: boolean;
  isLog?: boolean;
}

export interface GoldenMetric {
  golden_metric_name: string;
  golden_metric_unit: string;
  golden_metric_nrql_expression: string;
}

export interface Dimension {
  name: string;
  value: string;
}

export interface MetricExecutionTask {
  namespace: string;
  metric_name: string;
  region: string;
  process_function: string;
  statistic: string;
  dimensions: Dimension[];
}

export interface PromqlMetricExecutionTask {
  promql_expression: string;
  process_function: string;
  promql_label_option_values: any;
  panel_id: string;
  panel_title: string;
  dashboard_uid: string;
  dashboard_title: string;
  panel_promql_expression: string;
}

export interface ClickhouseDataFetchTask {
  database: string;
  query: string;
}

export interface PostgresDataFetchTask {
  database: string;
  query: string;
}

export interface KubernetesDataFetchTask {
  cluster: string;
  command_type: string;
  namespace: string;
  region: string;
  description: string;
}

export interface FilterLogEventsTask {
  region: string;
  log_group_name: string;
  filter_query: string;
}

export interface CloudWatchTask {
  type: string;
  metric_execution_task?: MetricExecutionTask;
  filter_log_events_task?: FilterLogEventsTask;
}

export interface GrafanaTask {
  type: string;
  datasource_uid: string;
  promql_metric_execution_task: PromqlMetricExecutionTask;
}

export interface NewRelicTask {
  type: string;
  dashboard_widget_nrql_metric_execution_task?: NrqlMetricExecutionTask;
  application_entity_golden_metric_execution_task?: NrApplicationEntityTask;
}

export interface DataFetchTask {
  source: string;
  clickhouse_data_fetch_task?: ClickhouseDataFetchTask;
  postgres_data_fetch_task?: PostgresDataFetchTask;
  eks_data_fetch_task?: KubernetesDataFetchTask;
}

export interface DocumentationTask {
  type: string;
  documentation: any;
}

export interface ServiceMetricExecutionTask {
  service_name: string;
  environment_name: string;
  metric: string;
  metric_family: string;
  process_function: string;
}

export interface QueryMetricExecutionTask {
  process_function: string;
  queries: string[];
  formula: string;
}

export interface DatadogTask {
  type: string;
  service_metric_execution_task?: ServiceMetricExecutionTask;
  query_metric_execution_task?: QueryMetricExecutionTask;
}

export interface MetricTask {
  source: string;
  cloudwatch_task?: CloudWatchTask;
  grafana_task?: GrafanaTask;
  new_relic_task?: NewRelicTask;
  datadog_task?: DatadogTask;
}

export interface NrqlMetricExecutionTask {
  dashboard_guid: string;
  dashboard_name: string;
  page_guid: string;
  page_name: string;
  widget_id: string;
  widget_title: string;
  widget_nrql_expression: string;
  process_function: string;
}

export interface NrApplicationEntityTask {
  metric_name: string;
  unit: string;
  nrql_expression: string;
  process_function: string;
}

export interface PlaybookTask {
  name?: string;
  id?: string;
  type: string;
  description: string;
  notes: string;
  metric_task?: MetricTask;
  data_fetch_task?: DataFetchTask;
  documentation_task?: DocumentationTask;
  global_variable_set?: any;
}

export interface GlobalVariable {
  name: string;
  value: string;
}

export interface Playbook {
  id?: string | null;
  name?: string;
  currentPlaybook?: any;
  currentStepIndex?: string | null;
  steps: Step[];
  playbooks: any;
  meta: any;
  globalVariables: GlobalVariable[] | null;
  isEditing?: boolean;
  lastUpdatedAt?: Date | null;
}

export interface Playground {
  id?: string | null;
  name?: string;
  steps: Step[];
  globalVariables: GlobalVariable[];
}

export interface ExternalLink {
  name: string;
  url: string;
}

export interface PlaybookContractStep {
  name: string;
  description: string;
  external_links: ExternalLink[];
  tasks: PlaybookTask[];
}

export interface PlaybookContract {
  name?: string;
  global_variable_set: any;
  steps: PlaybookContractStep[];
}

// Response types for the first API
export interface ConnectorsType {
  id: string;
  label: string;
  connector_type: string;
  model_type: string;
  display_name: string;
}

export interface ConnectorTypesResponse {
  success: boolean;
  active_account_connectors: ConnectorType[];
}

export interface ConnectorType {
  connector_type: string;
  model_types_map: ModelTypeMap[];
}

export interface ModelTypeMap {
  model_type: string;
  display_name: string;
}

// Response types for the second API
export interface AssetModelOptionsResponse {
  success: boolean;
  asset_model_options: AssetModelOption[];
}

export interface AssetModelOption {
  connector_type: string;
  model_types_options: ModelTypesOption[];
}

export interface ModelTypesOption {
  model_type: string;
  cloudwatch_metric_model_options?: CloudwatchMetricModelOptions;
  cloudwatch_log_group_model_options?: CloudwatchLogGroupModelOptions;
}

export interface CloudwatchMetricModelOptions {
  namespaces: string[];
}

export interface CloudwatchLogGroupModelOptions {
  regions: string[];
}

// Request types for the second API
export interface AssetModelOptionsRequest {
  connector_type: string;
  model_type?: string; // Optional depending on if you're targeting a specific model_type
}

// Response types for the third API
export interface AssetsResponse {
  success: boolean;
  assets: any[];
}

export interface CloudwatchAsset {
  id: string;
  connector_type: string;
  type: string;
  last_updated: string;
  cloudwatch_log_group?: CloudwatchLogGroup;
}

export interface CloudwatchLogGroup {
  region: string;
  log_groups: string[];
}

export interface AssetsRequest {
  connector_type: string;
  type: string;
  filters?: any; // Define more specifically if possible, based on the API's expected structure
}
