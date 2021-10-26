const Assignment = {
    data() {
        name = "Erik",
        age = 31,
        futureAge = age + 5,
        favNum = Math.random().toFixed(2),
        imgUrl = "https://v3.vuejs.org/logo.png",
        imgSize = {
            width: "100",
            height: "100"
        }
        return {name, age, futureAge, favNum, imgUrl, imgSize};
    }
}

Vue.createApp(Assignment).mount("#assignment")