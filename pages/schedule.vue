<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <h1 class="text-center mb-2"><b>{{ timenow }}</b></h1>
      <p class="text-center mb-2">{{ today }}</p>
      <div class="col-xl-8">
        <div class="mb-3">
          <select class="form-select form-select-sm" v-model="thisDay" @change="changeDay">
            <option v-if="thisDay == 'Sunday'" value="Sunday">วันอาทิตย์</option>
            <option value="Monday">วันจันทร์</option>
            <option value="Tuesday">วันอังคาร</option>
            <option value="Wednesday">วันพุธ</option>
            <option value="Thursday">วันพฤหัสบดี</option>
            <option value="Friday">วันศุกร์</option>
            <option v-if="thisDay == 'Saturday'" value="Saturday">วันเสาร์</option>
          </select>
        </div>
        <div v-if="loading" class="text-center">
          <h1><i class="fas fa-circle-notch fa-spin"></i></h1>
          <p>กำลังโหลดข้อมูล</p>
        </div>
        <div v-if="notfound" class="alert alert-danger text-center"><i class="fas fa-exclamation-triangle"></i> ไม่พบตารางเรียนในวันนี้</div>
        <table class="table table-bordered bg-white">
          <tbody>
            <tr v-for="(sj, index) in tables" :key="index">
              <td>
                <p class="mb-0"><b :class="sj.teacher.indexOf('(MN)') > -1 ? 'text-primary' : ''">{{ sj.teacher }}</b></p>
                <small>{{ sj.start }} - {{ sj.end }}</small>
              </td>
              <td class="text-center">
                <div v-if="sj.teacher.indexOf('(MN)') <= -1">
                  <a v-if="!isEndClass(sj.end)" :href="sj.meet_id.indexOf('https://') > -1 ? sj.meet_id : `https://meet.google.com/${sj.meet_id}`" target="_blank" class="mt-2 btn btn-primary btn-sm"><i class="fas fa-user-graduate"></i> เข้าเรียน</a>
                  <a v-else :href="sj.meet_id.indexOf('https://') > -1 ? sj.meet_id : `https://meet.google.com/${sj.meet_id}`" target="_blank" class="mt-2 btn btn-secondary btn-sm"><i class="fas fa-user-graduate"></i> เข้าเรียน</a>
                </div>
                <div v-else>
                  <a v-if="!isEndClass(sj.end)" @click="copyText(sj.meet_id)" href="https://meet.google.com/" target="_blank" class="mt-2 btn btn-primary btn-sm"><i class="fas fa-user-graduate"></i> เข้าเรียน</a>
                  <a v-else @click="copyText(sj.meet_id)" href="https://meet.google.com/" target="_blank" class="mt-2 btn btn-secondary btn-sm"><i class="fas fa-user-graduate"></i> เข้าเรียน</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-center text-danger">**หากมีข้อมูลผิดพลาดกรุณาเเจ้งทางเเฟนเพจ</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'navbar',
  data(){
    return {
      tables: [],
      today: new Date().toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }),
      timenow: '',
      color_day: '',
      thisDay: '',
      notfound: '',
      loading: true
    }
  },
  async created(){
    this.loopTime()
  },
  async mounted() {
    this.thisDay = this.getDayName()
    
    try{
      var data = await require(`@/assets/schedule_data/${this.$route.query?.school}/${this.$route.query?.room}.json`)
      this.tables = data[0][this.getDayName()]

      if(!this.tables){
        this.notfound = true;
      }else{
        this.notfound = false;
      }

      this.loading = false;
    }catch(err){
      this.notfound = true;
      this.loading = false;
    }
  },
  methods: {
    getDayName(){
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var date = new Date();
      return days[date.getDay()];
    },
    isEndClass(end){
      var sjTime = end.split(':')
      var Now = new Date();
      var endClass = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), sjTime[0], sjTime[1])

      return Date.parse(Now) >= Date.parse(endClass) ? true : false;
    },
    pad(d) {
      return (d < 10) ? '0' + d.toString() : d.toString();
    },
    getTime(){
      var date = new Date();
      return  this.pad(date.getHours()) + ':' +  this.pad(date.getMinutes()) + ':' + this.pad(date.getUTCSeconds());
    },
    loopTime(){
      this.timenow = this.getTime()
      setTimeout(() => {
        this.timenow = this.getTime()
        this.loopTime()
      }, 1000)
    },
    async changeDay(){
      var data = await require(`@/assets/schedule_data/${this.$route.query?.school}/${this.$route.query?.room}.json`)
      this.tables = data[0][this.thisDay]

      if(!this.tables){
        this.notfound = true;
      }else{
        this.notfound = false;
      }
      
      this.loading = false;
    },
    copyText(text){
      let textarea = document.createElement("textarea")
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
    }
  }
}
</script>