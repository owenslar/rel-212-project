<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">Pastoral Epistles</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    The Pastoral Epistles are a collection of letters written by Paul to two young leaders in the
    early Church: Timothy and Titus. These letters are deeply personal and offer instruction on how
    to lead and strengthen Christian congregations during growing challenges, both doctrinal and
    cultural. Paul wrote these letters near the end of his life and they reflect his concern for
    preserving sound doctrine and promoting righteous living. Key topics include the qualifications
    of bishops and deacons, warnings against false teachers, proper roles in the church, and how to
    teach with authority and compassion. He emphasizes the importance of scripture, godliness,
    charity, and endurance through trials. Paul repeatedly encourages Timothy and Titus to remain
    faithful and grounded in truth, especially as the Church faces such strong persecution.
  </div>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    These letters show us how Jesus Christ is the foundation for all aspects of Christian life,
    especially leadership. Paul teaches that true discipleship requires strength, humility, and a
    willingness to serve others as Christ did. Christ is the model of sound doctrine, moral
    integrity, and spiritual endurance which are qualities that Paul urges Timothy and Titus to
    embody. Through these teachings, we learn that following Christ means committing to both truth
    and love, both defending the faith while helping others within it. Christ also stands as the
    great example of mentorship and personal ministry. Just as He taught His disciples, Paul tries
    to do the same with Timothy and Titus. In these letters, we are reminded that we are not left
    alone in our callings or struggles. Christ is with us always.
  </div>
  <div class="center">
    <router-link to="/">
      <button class="card-button">Go Back</button>
    </router-link>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
  margin-top: 2rem;
}

.card-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #36976f;
}

.page-title {
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
}

.group-title {
  text-align: start;
  font-size: x-large;
  text-decoration: underline;
}

.group-text {
  text-align: start;
}
</style>
