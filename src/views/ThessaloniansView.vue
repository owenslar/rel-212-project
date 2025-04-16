<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">First and Second Thessalonians</div>
  <div class="group-title">First Thessalonians Summary</div>
  <div class="group-text">
    In Thessalonica, people were suffering from persecution, but were mostly living with faith. They
    were also concerned about thier loved ones who had already died, and how they would be able to
    be saved if they never got the chance to convert to Christianity before they died. In the
    aincient world, likely everyone knew someone who was close to them who was deceased. Paul
    comforts these people by reminding them of the immenence of the second coming, and informing
    them that when Jesus comes again, the dead will be resurrected before the righteous are lifted
    up.
  </div>
  <br />
  <div class="group-title">Second Thessalonians Summary</div>
  <div class="group-text">
    Paul writes Second Thessalonians to build on First Thessalonians after hearing how people
    responded to the first letter. The people in Thessalonica were very happy to hear Paul's
    messages, however, many people believed that the Second Coming was happening any day, and they
    started becoming idle, sitting around waiting for the Second Coming. Why work and support your
    family if Jesus is coming back next week? Paul called out these people for their laziness and
    urged everyone to be steadfast in worshipping the Lord. Also, Paul listed a few things that need
    to happen before Christ will come again, including the rise of the "man of sin" and the
    "abomination of desolation".
  </div>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    In these letters, we learn more details about Jesus Christ's second coming, including the order
    of events. First, Jesus will come, then the dead will be resurrected, then the living will be
    lifted up. We can find comfort in this fact in the same way the people of Thessalonica did. Any
    of our loved ones who have died, will be resurrected before all the righteous are lifted up.
    Also, these letters give us powerful insight into how to be a better disciple of Jesus Christ.
    Paul urges the congregations to be purposeful and deliberate in your worship of Jesus Christ
    even if you think it doesn't matter. We can hear this message echoed by modern day Prophets at
    every General Conference when they reiterate that in these last days it is more important than
    ever that we take heed in the work of Christ and not become idle. If we want to be the disciple
    that Jesus wants us to be, in every generation, every Prophet has told us that we must center
    our focus on the Lord.
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
