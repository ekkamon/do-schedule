<template>
    <div class="container mt-5">
        <center>
            <h3><b>Release Version: v2.0.1</b></h3>
        </center>
        <div class="border-bottom mb-3">
            <h3 class="mb-3"><b>v2.0.1</b></h3>
            <div class="ms-3">
                <h5 class="text-uppercase"><b>🎲 Updated</b></h5>
                <ul>
                    <li>วิชาที่ครูผู้สอนเป็นสีฟ้า ทางเว็บไซต์ Copy รหัสเข้าเรียนให้เเล้ว เพียงกด Paste เเล้วกดเข้าร่วมห้องเรียนได้เลย</li>
                </ul>
                <h5 class="text-uppercase"><b>🐞 Fixed</b></h5>
                <ul>
                    <li>เเก้ไขไม่สามารถเข้าห้องเรียนได้ในบางวิชา (โรงเรียนสมุทรสาครวิทยาลัย)</li>
                </ul>
                <small class="text-secondary">Date: 10/08/2021</small>
            </div>
        </div>
        <div class="border-bottom mb-3">
            <h3 class="mb-3"><b>v2.0.0 (Big Patch)</b></h3>
            <div class="ms-3">
                <h5 class="text-uppercase"><b>🎲 Updated</b></h5>
                <ul>
                    <li>อัพเดทตารางเรียน โรงเรียนสมุทรสาครวิทยาลัย (ทุกห้อง) (รวม 73 ห้อง)</li>
                </ul>
                <h5 class="text-uppercase"><b>💻 Developer Focus</b></h5>
                <ul>
                    <li>เพิ่มปุ่มจดจำห้องเรียนประจำของท่าน เพื่อไม่ต้องเลือกใหม่ทุกครั้ง</li>
                    <li>เพิ่มช่องสามารถดูตารางเรียนของวันอื่นๆได้</li>
                    <li>ทดสอบเซิร์ฟเวอร์ เพื่อรองรับการใช้งานจำนวนมาก (Benchmark Testing)</li>
                </ul>
                <small class="text-secondary">Date: 25/07/2021</small>
            </div>
        </div>
        <div class="border-bottom mb-3">
            <h3 class="mb-3"><b>v1.1.2</b></h3>
            <div class="ms-3">
                <h5 class="text-uppercase"><b>🎲 Updated</b></h5>
                <ul>
                    <li>อัพเดทตารางเรียน หาดใหญ่วิทยาลัยสมบูรณ์กุลกันยา (ห้อง 4/3)</li>
                </ul>
                <small class="text-secondary">Date: 14/07/2021</small>
            </div>
        </div>
        <div class="border-bottom mb-3">
            <h3 class="mb-3"><b>v1.1.1</b></h3>
            <div class="ms-3">
                <h5 class="text-uppercase"><b>🎲 Updated</b></h5>
                <ul>
                    <li>อัพเดทตารางเรียน วิทยาศาสตร์จุฬาภรณราชวิทยาลัย [ปทุมธานี] (ห้อง 5/4)</li>
                </ul>
                <small class="text-secondary">Date: 13/07/2021</small>
            </div>
        </div>
        <div class="border-bottom mb-3">
            <h3 class="mb-3"><b>v1.1.0</b></h3>
            <div class="ms-3">
                <h5 class="text-uppercase"><b>🎲 Updated</b></h5>
                <ul>
                    <li>เปลี่ยนเเปลง หน้าเลือกตารางเรียนเป็นเเบบใหม่</li>
                    <li>เปลี่ยนเเปลง สีบอกวัน เป็นเวลา HH:mm:ss เเบบ RealTime</li>
                </ul>
                <h5 class="text-uppercase"><b>🥳 User Request</b></h5>
                <ul>
                    <li>เเก้ไขเวลาไม่อัพเดทเเบบ RealTime เเละ ปุ่มไม่อัพเดท Realtime</li>
                    <li>เเก้ไขให้สามารถเข้าคลาสเรียนเเบบย้อนหลังได้</li>
                </ul>
                <small class="text-secondary">Date: 12/07/2021</small>
            </div>
        </div>
        <div class="border-bottom mb-3">
            <h3 class="mb-3"><b>v1.0.0</b></h3>
            <div class="ms-3">
                <h5 class="text-uppercase"><b>🎲 Updated</b></h5>
                <ul>
                    <li>เปิดให้ใช้งานเว็บไซต์ครั้งเเรกเเละอัพเดทตารางเรียน สมุทรสาครวิทยาลัย (ห้อง 5/2)</li>
                </ul>
                <h5 class="text-uppercase"><b>🥰 Thank you</b></h5>
                <ul>
                    <li>ขอบคุณทีมงาน <a href="https://jistic.net">Jistic Network</a> ช่วยเหลือเครื่อง Server เเละ ระบบเว็บไซต์</li>
                </ul>
                <small class="text-secondary">Date: 22/06/2021</small>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    layout: 'navbar',
    data() {
      return {
        title: 'Release Notes - DoSchedule'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'สามารถดูการอัพเดทของ DoSchedule ได้ทางนี้ !'
          },
        ]
      }
    }
  }
</script>