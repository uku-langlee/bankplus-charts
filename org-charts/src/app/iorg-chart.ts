export interface iOrgChart {
    chartType: string,
    dataTable: any[],
    options: {
        title?: string,
        allowHtml?: boolean,
        allowCollapse?: boolean,
        nodeClass?: string,
        selectedNodeClass?: string
    },
    formatters?: [
        {
          columns?: number[],
          type?: string,
          options?: {
          }
        }
      ]
};