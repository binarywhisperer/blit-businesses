Vue.component('business-list', {
    props: ['businesses'],
    template: '<ul class="vue-businesses-list">' +
    '<li v-for="business, key in businesses">' +
    '<h3>{{ business.name }}</h3>' +
    '<p v-if="location(business)">{{ location(business) }}</p>' +
    '</li>' +
    '</ul>',
    methods:{
        location:function(business){
            if(business.address.length && business.city.length && business.state.length && business.zip.length){
                return business.address + ' ' + business.city + ', ' + business.state + ' ' + business.zip
            }
            return false;
        }
    }
});

const vueBusinesses = new Vue({
    el: '#vue-businesses',
    data:{
        businesses: []
    },
    mounted:function(){
        var vm = this;
        $.getJSON('https://blacklatinoit.com/api/businesses', function(businesses){
           vm.businesses = businesses;
        });
    }

});