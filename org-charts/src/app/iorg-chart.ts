export interface iOrgChart {
    chartType: string,
    dataTable: any[],
    options: {
        title?: string,
        allowHtml?: boolean
        allowCollapse?: boolean;
    }
};