import DataTable from './components/DataTable.vue';

/* tslint:disable */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.createApp({}).component('ZDataTable', DataTable);
}

export default DataTable;
