<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-4 col-md-6 col-10">
        <div class="mb-3">
          <label class="mb-2">โปรดเลือกโรงเรียน</label>
          <select v-model="schoolName" class="form-select mb-2">
            <option v-for="(sc, idx) in schoolData" :key="idx" v-bind:value="sc.id">{{ sc.name }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="mb-2">โปรเลือกห้องเรียน</label>
          <select v-model="classRoom" class="form-select mb-2">
            <option v-for="(rm, idx) in roomData[schoolName]" :key="idx" v-bind:value="idx">
              ห้อง {{ rm.toString()[0] }}/{{ rm.toString()[1] != 0 ? rm.toString()[1] + rm.toString()[2] : rm.toString()[2] }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <a @click="clickDone" class="btn btn-primary w-100">ดำเนินการต่อ</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  data(){
    return {
      classRoom: 0,
      schoolName: 'sksc',
      schoolData: [
        {
          id: 'sksc',
          name: '(SKSC) สมุทรสาครวิทยาลัย',
        },
        {
          id: 'pccp',
          name: '(PCCP) วิทยาศาสตร์จุฬาภรณราชวิทยาลัย (ปทุมธานี)'
        },
        {
          id: 'yorsor',
          name: '(YORSOR) หาดใหญ่วิทยาลัยสมบูรณ์กุลกันยา'
        }
      ],
      roomData: {
        sksc: [
          101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 
          201, 202, 203, 204, 205, 206, 207, 208, 209,
          502
        ],
        pccp: [ 504 ],
        yorsor: [ 403 ]
      }
    }
  },
  methods: {
    async clickDone(){
      if(this.schoolName != ''){
        try{
          var data = await require(`@/assets/schedule_data/${this.schoolName}/${this.roomData[this.schoolName][this.classRoom]}.json`)
          if(!data){
            return this.$swal('Ops...', 'ไม่พบตารางในวันนี้ของคุณ', 'error')
          }else{
            location.href = `/schedule/?school=${this.schoolName}&room=${this.roomData[this.schoolName][this.classRoom]}`
          }
        }catch{
          return this.$swal('Ops...', 'ไม่พบคลาสเรียนนี้ในระบบโปรดรอทีมงานอัพเดท', 'error')
        }
      }else{
        return this.$swal('Ops...', 'โปรดเลือกระดับชั้นเเละห้องก่อนเพื่อดำเนินการต่อ', 'error')
      }
    }
  }
}
</script>