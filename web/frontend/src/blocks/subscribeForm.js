import { Vue } from '../vue.js';


var subscribeForm = new Vue({
    name: 'subscribe-form',
    el: '#subscribe-form',
    data: {
        apiUrl: '/api/subscribes/',
        responseReceived: false,
        responseError: false,
        phoneNumber: '',
        name: '',
        dataError: false
    },
    computed: {
        phoneNumberIsValid() {
            let numberIsValid = false;
            if (this.phoneNumber.length > 0) {
                if (this.phoneNumber.indexOf('_') === -1) {
                    numberIsValid = true;
                }
            }
            return numberIsValid
        }
    },
    methods: {
        submit() {
            if (this.phoneNumberIsValid) {
                $("#modal").fadeIn()
                this.dataError = false;
                let data = {
                    'name': this.name,
                    'phoneNumber': this.phoneNumber
                }
                this.$http.post(this.apiUrl, data).then(
                    response => {
                        this.handleSuccessfulResponse(response);
                    },
                    response => {
                        this.handleFailedResponse(response);
                    }
                )
            } else {
                this.dataError = true;
            }
        },
        handleSuccessfulResponse(response) {

        },
        handleFailedResponse(response) {

        }
    }
});
