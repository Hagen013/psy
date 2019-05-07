import Vue from 'vue';
import VueResource from 'vue-resource';

import VueInputMask from './core/vue-inputmask.js'
Vue.use(VueInputMask);

// Конфигурирование

// Вшивание CSRF-токена в запросы vue-resurs
import csrfToken from './core/csrfToken';

Vue.use(VueResource);

Vue.http.headers.common['X-CSRFToken'] = csrfToken();

export {
    Vue
}
