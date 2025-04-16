<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">First Corinthians</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    The Church at Corinth was having many problems, so Paul wrote a series of stern letters to the
    church trying to urge them in the right direction. We think Paul wrote at least 4 letters to
    Corinth, likely 7 total. Some of the problems the Chruch at Corinth were dealing with include
    sexual immorality, food offered to idols, divisions of all kinds, understanding the physical
    body, spiritual gifts, pride, morality, litigation, and certain cultural norms. Due to the
    teachings of Plato, many people in the aincient world including the people in Corinth thought of
    their bodies as untrustworthy, unholy, and unreliable, so they struggled to see the benefit of a
    physical resurrection into their bodies. Paul addressed this issue by informing the poeple that
    we will be ressurected into a perfect, celestial version of our bodies. Paul also used the image
    of the cross in an attempt to unify the congregations, because the image of the cross was
    associated with salvation, grace, and the tree of life. Additionally, in these chapters we come
    across an important idea of Christian Liberty. Paul tries to guide a congregation through issues
    where there is no specific law to tell them what to do. The guidline he gives invovles seeking
    guidance from the Holy Ghost, and not doing anything that will make others in the congregation
    uncomfortable. Finally, there are two more definitions that are important to understand Paul's
    writing.
  </div>
  <ul>
    <li>Hope - an expectation that something will happen (not optimism)</li>
    <li>Charity - the love of self sacrifice (Christ-like love)</li>
  </ul>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    In this letter, we are able to learn many things that can deepen our understanding of Jesus
    Christ, especially what Jesus Christ represents in our lives. Although the image of the cross
    has not been a popular one in Latter-Day Saint culture in the past, I think the image of the
    cross is a great reminder of what role Jesus Christ plays in our lives. Only through the events
    that Jesus endured on the cross are we able to be sanctified and overcome death. We can use this
    image of the cross just as Paul did to help unify us and align us to Christ. Also in this
    letter, we are able to learn how Jesus Christ trusts us to make decisions and will not
    micro-manage us. With the idea of Christian Liberty we learn that He gives us agency for a
    reason, and we are expected to use His input to make good informed decisions without having Him
    tell us everything we should do. Although it would be nice to have a set of rules that say
    exactly what we can and can't do, we are expected to utilize our faith and act in the best way
    we can. A good disciple of Jesus Christ can determine right or wrong on their own, and Jesus has
    trust in us that we will do just that.
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
