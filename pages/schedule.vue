<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <h1 class="text-center mb-2"><b>{{ timenow }}</b></h1>
      <p class="text-center mb-2">{{ today }}</p>
      <p class="text-center text-muted" style="font-size:12px">(อัพเดทล่าสุด 12/07/64 12.00 น.)</p>
      <div class="col-xl-8">
        <table class="table table-bordered bg-white">
          <tbody>
            <tr v-for="(sj, index) in tables" :key="index">
              <td>
                <p class="mb-0"><b>{{ sj.teacher }}</b></p>
                <small>{{ sj.start }} - {{ sj.end }}</small>
              </td>
              <td class="text-center">
                <a v-if="!isEndClass(sj.end)" :href="sj.meet_id.indexOf('https://') > -1 ? sj.meet_id : `https://meet.google.com/${sj.meet_id}`" target="_blank" class="mt-2 btn btn-primary btn-sm"><i class="fas fa-user-graduate"></i> เข้าเรียน</a>
                <a v-else :href="sj.meet_id.indexOf('https://') > -1 ? sj.meet_id : `https://meet.google.com/${sj.meet_id}`" target="_blank" class="mt-2 btn btn-secondary btn-sm"><i class="fas fa-business-time"></i> ย้อนหลัง</a>
              </td>
            </tr>
          </tbody>
        </table>
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
      color_day: ''
    }
  },
  created(){
    this.loopTime()
  },
  async mounted() {
    var data = await require(`@/assets/schedule_data/${this.$route.query?.school}/${this.$route.query?.room}.json`)
    // this.tables = data[0][this.getDayName()]
    this.tables = data[0]['Friday']
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
      }, 1500)
    }
  }
}
</script>