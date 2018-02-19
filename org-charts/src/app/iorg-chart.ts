export interface iOrgChart {
    chartType: string,
    dataTable: any[],
    options: {
        title?: string,
        allowHtml?: boolean,
        allowCollapse?: boolean,
        nodeClass?: string
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