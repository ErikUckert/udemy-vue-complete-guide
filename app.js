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
        counter = 0,
        name = ""
        return {counter, name}
    },
    methods: {
        incCounter() {
            this.counter++;
        },
        decCounter() {
            this.counter--;
        },
        setName(eventHandler, string) {
          this.name = eventHandler.target.value + string;
        }
    }
};

app = Vue.createApp(eventHandler);
app.mount("#events");