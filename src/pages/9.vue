<template>
  <div class="q-mt-xl">
    <p class="q-pl-xl text-h4 q-mb-xl">แบบทดสอบ</p>
    <div class="q-pl-xl ans">
      <div v-for="(item, index) in datas" v-bind:key="item.id">
        <p class="text-h5">{{ index + 1 }}.{{ item["data"]["question"] }}</p>
        <div class="q-gutter-sm column">
          <q-radio
            v-model="answer[index]"
            @input="checkAnswer(index)"
            val="a"
            :label="item['data']['choices']['a']"
          />
          <q-radio
            v-model="answer[index]"
            @input="checkAnswer(index)"
            val="b"
            :label="item['data']['choices']['b']"
          />
          <q-radio
            v-model="answer[index]"
            @input="checkAnswer(index)"
            val="c"
            :label="item['data']['choices']['c']"
          />
          <q-radio
            v-model="answer[index]"
            @input="checkAnswer(index)"
            val="d"
            :label="item['data']['choices']['d']"
          />
        </div>
        <div class="ans-card" :class="answerClass[index]" v-if="answer[index]">
          <p>ผลลัพธ์: {{ isCorrect[index] == true ? "ถูก" : "ผิด" }}</p>
          <p v-if="isCorrect[index] == false">
            {{ item["data"]["choices"][item.data.answer] }}
          </p>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      answer: [],
      isCorrect: [],
      answerClass: []
    };
  },
  async mounted() {
    const fectData = await this.$store.dispatch("getDataExam");
    this.datas.push(...fectData);
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
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap");
p {
  font-family: "Prompt", sans-serif;
}
.ans {
  font-family: "Prompt", sans-serif;
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
