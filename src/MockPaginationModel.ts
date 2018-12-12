import { IPaginationModel } from "./Pagination";
import {observable, action, computed} from 'mobx'; 

class MockModel implements IPaginationModel {
    @observable.ref itemsPerPage: number = 10; 
    @observable.ref page:number = 1; 
    @observable.ref totalCount:number = 100; 

    @computed get totalPages(){
        return Math.ceil(this.totalCount/this.itemsPerPage);
    }

    @action.bound
    onNextPage(){
        if (this.page < (this.totalPages - 1)){
            this.page++; 
        }
    }

    @action.bound
    onPrevPage(){
        if (this.page > 1){
            this.page--;
        }
    }

    
}

export const model = new MockModel(); 