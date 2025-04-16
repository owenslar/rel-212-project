<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">Philemon</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    This letter from Paul is very short and is addressed to a single man (Philemon) rather than a
    congregation. In this letter, Paul is using his position of power in the church to compell his
    old friend Philemon to take back Onesimus as a brother. Onesimus was Philemon's slave who ran
    away, was presumably converted to the Gospel by Paul, and then asked Paul to help him return to
    Philemon so that he would not get crucified as punishment for running away. Paul writes this
    somewhat manipulative letter with his own hand which makes it legally binding. By the end, he
    essentially gives Philemon no choice but to accept Onesimus back into his home as a brother
    rather than a slave.
  </div>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    This letter is very short, and at first glance, it seems strange that this was included in the
    Biblical canon. However, this small story of redemption for Onesimus can be viewed as an
    allegory to Christ and his redeeming efforts for us. Redeem literally means to be bought back,
    and Onesimus was redeemed by Paul paying a price that he couldn't have payed by himself. This
    directly connects to Jesus' redeeming efforts for us. Jesus is our advocate on the right hand of
    God, and he redeems us by buying us back into God's presence by paying a price that we couldn't
    have paid ourselves. He suffered and died for everyones sins. If it weren't for this redemption,
    we all would have died with no way to return to God again, given the fact that none of us but
    Jesus could have overcame that level of suffering and death.
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
