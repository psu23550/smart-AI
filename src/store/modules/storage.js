import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDdDq8JXRHq1N4Pasn8jJBAKmkgM3jsGLI",
    authDomain: "ai-smart.firebaseapp.com",
    databaseURL: "https://ai-smart.firebaseio.com",
    projectId: "ai-smart",
    storageBucket: "ai-smart.appspot.com",
    messagingSenderId: "447464373436"
};
firebase.initializeApp(config);

const db = firebase.firestore();

const state = {
}

const getters = {}

const actions = {
    async getData({ commit }) {
        let dataList = [];
        const information = await db.collection("information").get();
        await information.forEach((doc) => {
            let data = {
                id: doc.id,
                data: doc.data(),
            };
            dataList.push(data);
        });
        return dataList
    },
    async getDataExam({ commit }) {
        let dataList = [];
        const information = await db.collection("Exam").get();
        await information.forEach((doc) => {
            let data = {
                id: doc.id,
                data: doc.data(),
            };
            dataList.push(data);
        });
        return dataList
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
};
