import { shallow, mount, render } from 'enzyme';
import {observable, action} from 'mobx'; 
import * as React from 'react'; 
import {Pagination, IPaginationModel} from '../src/Pagination'; 
import {model} from '../src/MockPaginationModel'; 
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Pagination',()=>{
    
    it('should render properly',()=>{
        expect(render(<Pagination model={model} />).hasClass('sx-pagination')).toBe(false);
        expect(render(<Pagination model={model} />).hasClass('sa-pagination')).toBe(true);
        expect(render(<Pagination model={model} />).find('.sa-pagination__btn').length).toBe(2);
        const el = shallow(<Pagination model={model} />); 
        let page = model.page;
        el.find('.sa-pagination__btn--next').simulate('click');
        expect(model.page).toBe(page+1); 
        page = model.page; 
        el.find('.sa-pagination__btn--prev').simulate('click');
        expect(model.page).toBe(page-1); 
    });
});