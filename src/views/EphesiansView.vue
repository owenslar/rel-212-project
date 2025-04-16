<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">Ephesians</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    In this letter, Paul has a few main topics that he touches on. During this time in history, the
    Christian chruch was undergoing a lot of persecution, and Paul wanted to offer some advice to
    people that were superstitious and concerned that there were devils out to get them. Paul speaks
    of predestination - things that were set in stone before our existence. He reminds the people
    that the House of Israel will be saved. That fact was set in stone before we came to earth. God
    promised that, and he doesn't break promises. Also, Paul informs people that evil is very real,
    it is out to get people, however, Christ's power exceeds all evils and will prevail against all
    evil. Finally, in times of severe prosecution Paul stesses unity in the following four areas
    with the congregation at Ephesus.
  </div>
  <ul>
    <li>
      Unity in Doctrine - One Lord, one faith, one baptism. Eliminate inconsitencies in doctrine
      that will lead to confusion.
    </li>
    <li>
      Unity Against the World - Be in the world but not of the world. Stay strong against the forces
      of evil in the world that are there to pull you away from Christ.
    </li>
    <li>
      Unity in the Family - Ensure that you have a strong unity within the Home. It is the most
      devestating if Satan infiltrates the home and breaks apart the family.
    </li>
    <li>
      Unity Against the Forces of Evil - You need the armor of God to protect you from the
      adversary. There is no other way to protect yourself.
    </li>
  </ul>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    In this letter we learn that the forces of evil in this world are just as active as Jesus Christ
    is in our lives. There are many temptations and evil forces that are trying to pull us away from
    Jesus Christ at every turn. That is why it is more important than ever to stay unified with
    Christ. As scary as it can be to imagine that there are real forces of evil trying to pull us
    away from Christ, we can be comforted in the fact that Christ's power exceeds them all and can
    overcome them all. In modern times where every force in the world is trying to cause us to be
    worse disciples of Jesus Christ, we must put on the armor of God, and protect ourselves from
    those evils through unity in our congregations and families, and strive to come closer to Jesus
    Christ.
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
