const app = Vue.createApp({
    data: function() {
        myGoalA = "Build a Website",
        myGoalB = "Learn Vue"
        myLink = "https://vuejs.org"
        return {
            myGoalA, myGoalB, myLink
        }
    },
    methods: {
        randomGoal () {
            return Math.random() < 0.5 ? this.myGoalA : this.myGoalB;
        }
    }
});

app.mount("#user-goal");
