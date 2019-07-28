var wallofcode = new Vue({

    el: "#wallofcode",

    data: {

    },

    computed: {

        date: function () { return moment()._d.getMonth() + '/' + moment()._d.getDay() + '/' + moment()._d.getFullYear(); }

    },

    methods: {

    },

    created() {
        console.log("Vue app created!");
    }

})