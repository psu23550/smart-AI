<template>
  <div class="q-mt-xl">
    <div class="flex justify-center" v-if="!authen">
      <q-btn rounded class="btn" @click="googleSignIn()">เข้าสู่ระบบด้วย Google</q-btn>
    </div>
    <div v-else>
      <p class="q-pl-xl text-h4 q-mb-xl">แบบทดสอบ</p>
      <div class="q-pl-xl ans">
        <q-spinner v-if="loading" color="primary" size="3em" />
        <div v-else v-for="(item, index) in datas" v-bind:key="item.id">
          <p class="text-h5">{{ index + 1 }}.{{ item["data"]["question"] }}</p>
          <div class="q-gutter-sm column">
            <q-radio v-model="answer[index]" @input="checkAnswer(index)" val="a"
              :label="item['data']['choices']['a']" />
            <q-radio v-model="answer[index]" @input="checkAnswer(index)" val="b"
              :label="item['data']['choices']['b']" />
            <q-radio v-model="answer[index]" @input="checkAnswer(index)" val="c"
              :label="item['data']['choices']['c']" />
            <q-radio v-model="answer[index]" @input="checkAnswer(index)" val="d"
              :label="item['data']['choices']['d']" />
          </div>
          <div class="ans-card" :class="answerClass[index]" v-if="answer[index]">
            <p>ผลลัพธ์: {{ isCorrect[index] == true ? "ถูก" : "ผิด" }}</p>
            <p v-if="isCorrect[index] == false">
              {{ item["data"]["choices"][item.data.answer] }}
            </p>
          </div>
          <br />
        </div>
        <q-btn rounded class="btn q-mb-xl" @click="signOut()">ออกจากระบบ</q-btn>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      datas: [],
      answer: [],
      isCorrect: [],
      answerClass: [],
      loading: false,
      authen: false
    };
  },
  async mounted() {
    this.loading = true;
    const fectData = await this.$store.dispatch("getDataExam");
    this.datas.push(...fectData);
    this.loading = false;
    // console.log("this.datas", this.datas);
  },
  methods: {
    async checkAnswer(index) {
      console.log("asdas", this.datas[index].data.answer);
      console.log("ANS", this.answer);
      if (this.datas[index].data.answer === this.answer[index]) {
        this.isCorrect[index] = true;
        this.answerClass[index] = "correct-ans";
      } else {
        this.isCorrect[index] = false;
        this.answerClass[index] = "wrong-ans";
      }
      console.log("this.isCorrect", this.isCorrect);
    },
    async googleSignIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          // console.log("token", token) // Token
          // console.log("user", user.email) // User that was authenticated
          if (user.email) {
            this.authen = true;
          }
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    },
    async signOut() {
      this.authen = false;
    }
  }
};
</script>

<style scoped>
p {
  font-family: "Prompt", sans-serif;
}

.ans {
  font-family: "Prompt", sans-serif;
}

.btn {
  font-family: "Prompt", sans-serif;
  padding: 10px;
}

.ans-card {
  padding: 10px;
  border-radius: 10px;
  color: white;
}

.wrong-ans {
  background-color: salmon;
}

.correct-ans {
  background-color: rgb(20, 230, 125);
}
</style>
