<script setup>
import EpistleCard from '@/components/EpistleCard.vue'
import { onMounted } from 'vue'
// import { useRoute } from 'vue-router'

onMounted(() => {
  const anchorId = sessionStorage.getItem('returnAnchor')
  if (!anchorId) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    return
  }

  if (anchorId) {
    const el = document.getElementById(anchorId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    sessionStorage.removeItem('returnAnchor')
  }
})
</script>

<template>
  <main id="main">
    <div class="title-text">
      Welcome to Owen Larson's REL 212 Final Project! Explore below for information on the Apostle
      Paul's Epistles.
    </div>
    <div id="first-mission" class="main-text">First Mission: 46-48 A.D.</div>
    <EpistleCard
      title="Galatians - 48 A.D."
      image="https://rcsasouthernsuburbs.com/wp-content/uploads/2021/09/Jerusalem_Council.jpg"
      alt="Galations Picture"
      description="In this letter, Paul addresses concerns of the church related to the Abrahamic Covenant. Have the terms changed? Should converts to the church be curcumcised in accordance with the Abrahamic Covenant? At this time, the church was struggling with tensions between the Jewish converts and the Gentile converts."
      link="/galatians"
      anchorId="first-mission"
    />

    <div id="second-mission" class="main-text">Second Mission: 51-53 A.D.</div>
    <EpistleCard
      title="1st and 2nd Thessalonians - 52 A.D"
      image="https://i.ytimg.com/vi/wGzr-70oWKI/maxresdefault.jpg"
      alt="First Thessalonians Picture"
      description="During Paul's second mission to Corinth, Paul wrote two letters to Thessalonica. In the first letter, Paul comforts believers who were concerned about their deceased loved ones, giving more information about resurrection. The second letter addresses the concerns about the timing of the second coming, and Paul urges the community to remain steadfast until the day comes."
      link="/thessalonians"
      anchorId="second-mission"
    />

    <div id="third-mission" class="main-text">Third Mission: 54-58 A.D.</div>
    <EpistleCard
      title="1st Corinthians - 57 A.D."
      image="https://www.venicechurchofchrist.org/wp-content/uploads/2016/08/Paulvalentin.jpg"
      alt="First Corinthians Image"
      description="During Paul's third mission, he writes a series of stern letters to the Chruch at Corinth who were dealing with many struggles. Paul addresses concerns such as sexual immorality, food offered to idols, fractured congregations, spiritual gifts and more in this letter."
      link="/firstcorinthians"
      anchorId="third-mission"
    />

    <EpistleCard
      title="2nd Corinthians - 57 A.D"
      image="https://freethinkingministries.com/wp-content/uploads/2018/03/Saul-before-Jesus.png"
      alt="Second Corinthians Image"
      description="Paul was losing credibility in the eyes of the people at Corinth, so he chooses to defend himself in unexpected ways. Paul also offers some insightful theology relating to suffering."
      link="/secondcorinthians"
      anchorId="second-corinthians-id"
    />

    <div id="prison" class="main-text">Prison in Rome: 61-63 A.D.</div>

    <EpistleCard
      title="Colossians - 62 A.D."
      image="https://upload.wikimedia.org/wikipedia/commons/f/ff/Francesco_Botticini_-_The_Assumption_of_the_Virgin.jpg"
      alt="Colossians image"
      description="Paul was concerned that the church at Colossae was losing focus by mixing religious and cultural views too much. Paul addresses those concerns and also reminds this congregation - who were very concerned with angels -  where Jesus fits into the divine heirarchy."
      link="/colossians"
      anchorId="prison"
    />
    <EpistleCard
      title="Ephesians - 62 A.D."
      image="https://cdn.britannica.com/93/130093-050-4926C50E/Paul-the-Apostle-epistle-prison-Ephesians.jpg"
      alt="Ephesians Image"
      description="Paul offers some insight on divine predestination, and offers comfort to those concerned about the devil being out to get them. Additionally, Paul stresses the importance of unity in a time of much persecution."
      link="/ephesians"
      anchorId="ephesians-id"
    />
    <EpistleCard
      title="Philippians - 62 A.D."
      image="https://cdn.ldsliving.com/dims4/default/c202522/2147483647/strip/true/crop/640x320+0+0/resize/640x320!/format/jpg/quality/90/?url=http%3A%2F%2Flds-living-brightspot-us-east-2.s3.us-east-2.amazonaws.com%2F4d%2F78%2Feb0cdd0a546debca83cf19dad669%2F53262.jpg"
      alt="Philippians Epistle"
      description="Paul addresses likely his favorite congregation in a very happy letter to inform them that he is alive and well. He assures the people that persecution and struggle are a normal part of our lives, just as they were in Jesus' life."
      link="/philippians"
      anchorId="philippians-id"
    />
    <EpistleCard
      title="Philemon - 63 A.D."
      image="https://wp-media.patheos.com/blogs/sites/52/2012/10/Rembrandt.jpg"
      alt="Philemon image"
      description="Paul writes a fairly manipulative letter to get one of his good friends Philemon to take back his old slave Onesimus as a friend. Paul utilizes his position of power to help redeem Onesimus, an allegory of Jesus' efforts for us."
      link="/philemon"
      anchorId="philemon-id"
    />

    <div id="mamertine-prison" class="main-text">Mamertine Prison in Rome: 64-65 A.D.</div>
    <EpistleCard
      title="Pastoral Epistles of Paul - 64-67 A.D."
      image="https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.XXX.30058720.7055475/2781824.jpg"
      alt="Pastorals image"
      description="Paul wrote the Pastoral Epistles to provide guidance to young Church leaders in the face of growing challenges. These letters offer some practical instruction on how to effectively lead a church."
      link="/pastorals"
      anchorId="mamerine-prison"
    />
  </main>
</template>

<style scoped>
.main-text {
  font-size: 2rem;
  text-decoration: underline;
  font-weight: bold;
  text-align: center;
  margin: 1rem;
}

.title-text {
  font-size: 2rem;
  text-align: center;
}
</style>
