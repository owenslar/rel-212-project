<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">Galatians</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    In Galatia, there were divisions being made between Jewish and Gentile converts. There were many
    questions surrounding how Mosiac Law fits in to this new Church and faith. Do Gentile converts
    need to be circumcised as per the Abrahamic Covenant? Have the terms of the Abrahamic Covenant
    changed? Paul addresses the people as an apostle of Christ, emphasizing that his authority to
    speak on these topics comes from Jesus Christ, not from human authority. Paul informs the people
    that salvation comes through faith in Jesus Christ alone, not by works of the law such as
    circumcision or dietary rules. It is important to note the definitions to four words that Paul
    uses frequently in this letter.
  </div>
  <ul>
    <li>Faith - total loyalty to Jesus Christ in a patron-client relationship</li>
    <li>Works - the Law of Moses</li>
    <li>Justification - to be in harmony with the Law, your covenant membership</li>
    <li>Sanctification - to be made holy, to get to the point where you don't desire to sin</li>
  </ul>
  <div class="group-text">
    Paul teaches the people that the standards of the Abrahamic Covenant have changed, and you are
    not saved by your works. The only way to achieve sanctification is to have total faith in Jesus
    Christ. After the Chuch comes to a decision pertaining to the issues of circumcision in the
    church, James offers the verdict, stating that Gentile converts are not required to undergo
    circumcision to become a member of the church.
  </div>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    In this letter, Paul sets powerful precedents that were groundbreaking at the time, but feel
    natural to us now after 2,000 years of hindsight. Authority to lead comes from Jesus Christ
    alone, and the only way to be saved is through faith in Jesus Christ. We can use the insights
    gained from the letter to understand how to be better disciples of Christ. Works are good, but
    they are not used as a measurement of our spirituality in the eyes of God. We must not expect
    our works to directly translate to blessings and sanctification. All we can do is put our faith
    in Jesus Christ and be the best servant we can be, and we will be saved in return.
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
