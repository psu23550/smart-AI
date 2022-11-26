<template>
  <div class="content">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="header bg-teal-6 text-black">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="left = !left" />
          <q-toolbar-title class="row">
            <router-link to="/"><img class="photo" src="~assets/logo.jpg" /></router-link>
            <p class="title">Smart AI Teaching for Nursing care of Midwifery</p>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer content-class="bg-teal-2 drawer text-white" show-if-above v-model="left" side="left" bordered>
        <div class="column">
          <div class="q-pa-lg"></div>
          <q-btn color="secondary">
            <router-link to="/1" class="text-right">ความผูกพันธ์กับบุตร</router-link>
          </q-btn>
          <q-btn color="secondary">
            <router-link to="/2" class="text-right">การเลี้ยงลูกด้วยนมคุณเเม่</router-link>
          </q-btn>
          <q-btn color="secondary">
            <router-link to="/3" class="text-right">การอุ้มบุตร</router-link>
          </q-btn>
          <q-btn color="secondary">
            <router-link to="/4" class="text-right">การอาบน้ำบุตร</router-link>
          </q-btn>
          <q-btn color="secondary">
            <router-link to="/5" class="text-right">การดูเเลสะดือเเละการทำความสะอาดสะดื้อ</router-link>
          </q-btn>
          <q-btn color="secondary">
            <router-link to="/6" class="text-right">การดูเเลการขับถ่าย</router-link>
          </q-btn>
          <q-btn color="secondary">
            <router-link to="/7" class="text-right">อาการผิดปกติของบุตร</router-link>
          </q-btn>

          <div class="q-pa-4" style="max-width: 350 px">
            <q-btn color="secondary">
              <q-list>
                <q-expansion-item class="text-right" color="secondary" expand-separator
                  label="พฤติกรรมการเเสดงออกเเละการตอบสนอง">
                  <div class="column">
                    <q-btn color="secondary">
                      <router-link to="/7-1" class="d">พฤติกรรมหิว</router-link>
                    </q-btn>
                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมอิ่ม</router-link>
                    </q-btn>

                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมระยะง่วง</router-link>
                    </q-btn>
                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมในระยะหลับลึก</router-link>
                    </q-btn>
                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมในระยะหลับตืน</router-link>
                    </q-btn>
                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมในระยะตื่นสงบ</router-link>
                    </q-btn>
                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมในระยะตื่นเต็มที่</router-link>
                    </q-btn>
                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมในระยะร้องไห้</router-link>
                    </q-btn>
                    <q-btn color="secondary">
                      <router-link to="/tie" class="d">พฤติกรรมความต้องการเล่นหรือพูดคุย</router-link>
                    </q-btn>
                  </div>
                </q-expansion-item>
              </q-list>
            </q-btn>
          </div>

          <q-btn color="secondary">
            <router-link to="/9" class="text-right">แบบทดสอบ</router-link>
          </q-btn>

          <div class="Barcode">
            <img src="~/assets/barcode.jpg" width="120px" height="120px" />
          </div>
        </div>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    }
  },
  data() {
    return {
      left: false
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap");

.header {
  height: 80px;
}

.font-sans {
  font-family: "Prompt", sans-serif;
}

.photo {
  width: 50px;
  height: 50px;
  margin-top: 15px;
}

.title {
  font-family: "Prompt", sans-serif;
  margin-top: 20px;
  margin-left: 10px;
}

.drawer {
  background-color: aqua;
}

.content {
  height: 100%;
  /* background-image: url("~assets/download.jpg"); */
}

.btn1 {
  display: flex;
  justify-content: flex-start;
}

.d {
  text-align: center;
  text-decoration: none;
  color: white;
  margin-top: 10px;
}

.a {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Prompt", sans-serif !important;
}

.text-right {
  text-align: center;
  text-decoration: none;
  color: white;
  padding-bottom: 5px;
  font-family: "Prompt", sans-serif !important;
}

.column {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -20px;
}

.q-link {
  text-align: center;
}

.cursor-pointer {
  text-align: center;
}

.q-btn {
  margin: 5px;
}

.drawer {
  position: fixed;
}

.Barcode {
  margin-top: 20px;
  margin-left: 80px;
}
</style>
