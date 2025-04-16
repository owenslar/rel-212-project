<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">Philippians</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    In Paul's happiest letter, he addresses the Church at Philippi, to update them on his condition.
    The people in Philippi were righteous and following the teachings of the Lord, however, they
    were concerned with Paul's condition. Paul had been imprisioned and nearly killed in Jerusalem.
    However, after appealing to Ceasar, Paul was under military imprisionment where he wrote a
    collection of letters including this one. Paul informed the people that he was alive and well,
    and offered them thanks for the financial support (even though he normally never accepts money
    from the people). Finally, he shares another "Christ-hymn" with the Philippians where he teaches
    some compelling things about suffering. He tells us to look at Jesus' example of suffering.
    Jesus, who was God, gave it all up to descend to earth and to suffer the most shameful death
    imaginable, a crucifixion. However, because of His suffering, He was restored to His godly form.
    He is setting up an allegory for life: you might encounter a cross before you encounter a
    throne, just as Jesus did. He informs the Philippians that he is encountering his cross, but
    soon he will encounter his throne.
  </div>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    Paul gives us another great way to view suffering in this letter just as he did in 2nd
    Corinthians ("when we are weak, we are strong"). We learn in this letter to look at Christ's
    example of suffering when we encounter our struggles. None of us will ever have to descend to
    the level that Christ descencded to, and yet Christ did it with love and faith the whole way.
    There is no way for us to avoid struggle and hardship, not even Christ could do it. However, if
    we keep our faith in Christ, we can be redeemed and exhalted just as He was after we overcome
    our struggles. We will encounter a cross before we encounter a throne, but as disciples of
    Christ, we know that He will help us overcome.
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
