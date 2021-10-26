/* const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events'); */

const eventHandler =  {
    data() {
        counter = 0
        return {counter}
    },
    methods: {
        incCounter() {
            this.counter++;
        },
        decCounter() {
            this.counter--;
        }
    }
};

app = Vue.createApp(eventHandler);
app.mount("#events");