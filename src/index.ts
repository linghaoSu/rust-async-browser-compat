import './index.css';
import { createApp } from 'vue';
import App from './App.vue';
import { queryNamespacesTest } from './test';

createApp(App).mount('#root');

queryNamespacesTest();
