import * as React from 'react';
export interface IPaginationModel {
    /**
     * Total number of items to be paginated
     */
    totalCount: number;
    /**
     * Items per page
     */
    itemsPerPage: number;
    /**
     * Current page number (starting from 1)
     */
    page: number;
    /**
     * Go to the prev page
     */
    onPrevPage(): void;
    /**
     * Go to the next page
     */
    onNextPage(): void;
    /**
     * The view to use for previous button
     */
    prevPageView?: React.ReactNode;
    /**
     * The view to use for next button
     */
    nextPageView?: React.ReactNode;
    /**
     * Get the label to use the pagination label defaults to '1 of 10' i.e. '{current} of {total}'
     * @param currentPage the current page
     * @param totalPages the total number of pages
     */
    getPaginationLabel?(currentPage: number, totalPages: number): React.ReactNode;
}
export interface IPaginationProps {
    model: IPaginationModel;
}
export declare class Pagination extends React.Component<IPaginationProps> {
    render(): JSX.Element;
}
