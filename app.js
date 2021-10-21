const app = Vue.createApp({
    data: function() {
        myGoal = "Build a Website",
        myLink = "https://vuejs.org"
        return {
            myGoal, myLink
        }
    }
});

app.mount("#user-goal");
