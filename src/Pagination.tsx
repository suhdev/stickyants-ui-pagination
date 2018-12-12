import * as React from 'react'; 
import { B } from 'bem-class-gen';
import { observer } from 'mobx-react';

export interface IPaginationModel {
    /**
     * Total number of items to be paginated
     */
    totalCount:number; 
    /**
     * Items per page 
     */
    itemsPerPage:number; 
    /**
     * Current page number (starting from 1)
     */
    page:number; 
    /**
     * Go to the prev page
     */
    onPrevPage():void; 
    /**
     * Go to the next page
     */
    onNextPage():void; 
    /**
     * The view to use for previous button 
     */
    prevPageView?:React.ReactNode; 
    /**
     * The view to use for next button 
     */
    nextPageView?:React.ReactNode; 
    /**
     * Get the label to use the pagination label defaults to '1 of 10' i.e. '{current} of {total}' 
     * @param currentPage the current page
     * @param totalPages the total number of pages 
     */
    getPaginationLabel?(currentPage:number, totalPages:number):React.ReactNode; 
}

export interface IPaginationProps{
    model:IPaginationModel; 
}

@observer
export class Pagination extends React.Component<IPaginationProps>{
    render(){
        const {model} = this.props; 
        const clz = B().bl('sa-pagination');
        const count = (model.totalCount) || 0;  
        const totalPages = Math.ceil(count/model.itemsPerPage);

        return (
            count > 0?(
                <div className={clz.bem}>
                    <div className={clz.el('btn').amod('prev').bem}
                        onClick={model.page > 1?model.onPrevPage:undefined}>
                        {model.prevPageView || '<'}
                    </div>
                    <div className={clz.el('count').bem}>
                        {model.getPaginationLabel?model.getPaginationLabel(model.page,totalPages):`${model.page} of ${totalPages}`}
                    </div>
                    <div className={clz.el('btn').amod('next').bem}
                        onClick={model.page < totalPages?model.onNextPage:undefined}>
                        {model.nextPageView || '>'}
                    </div>
                </div>
            ):null
        ); 
    }
}