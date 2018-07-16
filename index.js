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

// app.message = 'You are the best Dad, Friend, Spouse and partner ever';
// app.seen = false;
// app.todos.push({text: 'Added a new element'})