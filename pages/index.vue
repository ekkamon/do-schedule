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
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="save" :true-value="true" :checked="save">
            <label class="form-check-label" for="flexCheckChecked">
              จดจำห้องเรียน
            </label>
          </div>
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
      save: false,
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
          101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
          201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212,
          301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312,
          401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413,
          501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511,
          601, 602, 603, 604, 505, 606, 607, 608, 609, 610, 611,
        ],
        pccp: [ 504 ],
        yorsor: [ 403 ]
      }
    }
  },
  mounted(){
    this.save = localStorage.getItem('save')
    this.classRoom = localStorage.getItem('saveRoom') ? localStorage.getItem('saveRoom') : 0
    this.schoolName = localStorage.getItem('saveSchool') ? localStorage.getItem('saveSchool') : 'sksc'
  },
  methods: {
    async clickDone(){
      
      if(this.save){
        localStorage.setItem('saveRoom', this.classRoom)
        localStorage.setItem('saveSchool', this.schoolName)
        localStorage.setItem('save', true)
      }else{
        localStorage.clear()
      }

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