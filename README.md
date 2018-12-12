# sa-pagination 

A pagination component for React/mobx applications that uses the MVVM structure. 

## Usage 

Typical usage is for a model that wraps a list of items. See the example below: 

```typescript
import * as React from 'react'; 
import * as ReactDOM from 'react-dom'; 

import {observable,computed,action} from 'mobx'; 
import {Pagination,IPaginationModel} from 'stickyants-ui-pagination'; 

class MockModel implements IPaginationModel {
    @observable.ref itemsPerPage: number = 10; 
    @observable.ref page:number = 1; 
    @observable.ref items:any = [1,2,3,4,5,6,7,8,9,10];
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
    
    initReactions(){

    }
}

const model = new MockModel(); 

function fetchData(page){
    setTimeout(()=>{
        if (page === model.page){
            model.items = model.items.map(e=>e * page); 
        }
    },200);
}

reaction(()=>model.page,fetchData); 

ReactDOM.render(<Pagination model={model} />,
    document.getElementById("Pagination"));

```