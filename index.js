var app = new Vue({
    el: '#app', 
    data: {
        message: "Hello world of Vue"
        // seen: true

        /*todos: [
            {text: 'learn Hispanics'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]*/


    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app2 = new Vue({
    el: '#app-2',

    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',

    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',

    data: {
        todos: [
            {text: 'Learn Javascript From Heaven'},
            {text: 'Master this bitch'},
            {text: 'Flippen dominate it and call it my BEEAAAA....!!!'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message2: "Hello Vuejs lovers!!!"
    },

    methods: {
        reverseMessage2: function() {
            this.message2.split('').reverse().join('')
        }
    }
});

// app.message = 'You are the best Dad, Friend, Spouse and partner ever';
// app.seen = false;
// app.todos.push({text: 'Added a new element'})