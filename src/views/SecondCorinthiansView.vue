<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="page-title">Second Corinthians</div>
  <div class="group-title">Summary</div>
  <div class="group-text">
    Paul's writings are quite complicated, sophisticated, and elegant. Given so, people who never
    met Paul but read his writings generally had a lot of respect for him. However, Paul had a very
    small stature, a whiny annoying voice, and was not nearly as compelling of a public speaker as
    he was a writer. Additionally, he wouldn't accept money for his teachings which was seen as a
    sign of inauthenticity. Also, Paul refused to boast about himself, and instead chose to always
    boast in the Lord. Due to all of these factors, people in Corinth who had seen him in person
    were holding him in low respects. They would much rather listen to one of the 'super apostles'
    who were preaching of a false Jesus, were fine with boasting about themselves, were great public
    speakers, and accepted money. Due to this, Paul decided to write another letter to Corinth where
    he would regain the respects of the people of Corinth. He decided he would boast in himself, but
    not in the way that they expected. Paul decided to share his most embarassing and shameful
    moment of his life. After that, Paul boasts more by indirectly reminding the people at Corinth
    that he physically saw Jesus Christ, which is something none of the super-apostles could say. We
    don't know how effective these tactics were in convincing the poeple in Corinth of Paul's
    authoriy, however, these texts can be read in the same context today for people wondering about
    Paul's authority to speak on these topics, and are very effective even today. Finally, Paul
    offers some incredibly insightful words relating to common question: Why do bad things happen to
    good people? Paul "theology of suffering" is that when we are weak, we are strong. Suffering
    forces us to drop our pride, and focus on using the power of Christ to overcome our struggles.
  </div>
  <br />
  <div class="group-title">Connection to Jesus Christ</div>
  <div class="group-text">
    This second letter to Corinth offers some special insights into how the power of Christ is used
    in our lives. We learn through Paul's "theology of suffering" that we are always stronger with
    the Lord than we are on our own. We can never reach our fullest potential without the power of
    Jesus Christ. We undergo suffering because it forces us to focus on the power of Christ to help
    us overcome hardships that we can't overcome alone. If we never underwent any suffering, we
    could easily become prideful and lose sight of what really allows us to avoid suffering which is
    Jesus Christ and His ultimate sacrifice for us. We can learn from this letter that to be a
    better disciple of Christ we must take our hardships head on with Jesus Christ central in our
    lives, because that is when we are truly strong.
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
