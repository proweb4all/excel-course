import './scss/index.scss';
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {rootReducer} from '@/redux/rootReducer';
import {createStore} from '@core/createStore';
import {storage} from '@core/utils';
import {initialState} from '@/redux/initialState';

const store = createStore(rootReducer, initialState)
store.subscribe(state => {
  storage('js-excel', state)
})
const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

// console.log('Excel', excel)
excel.render()
