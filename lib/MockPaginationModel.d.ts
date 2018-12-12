import { IPaginationModel } from "./Pagination";
declare class MockModel implements IPaginationModel {
    itemsPerPage: number;
    page: number;
    totalCount: number;
    readonly totalPages: number;
    onNextPage(): void;
    onPrevPage(): void;
}
export declare const model: MockModel;
export {};
