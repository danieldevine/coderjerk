# About

<div class="about-layout">
  <div class="about-photo">
    <img src="/dan.png" alt="Dan Devine" />
  </div>
  <div class="about-bio">

I'm Dan Devine, Technical Director at [Maverick](https://www.maverick-intl.com) and a working full stack web developer. I write closed and open source code professionally and think about it too. That's me in the picture looking like a stock photo business guy.

I'm currently working on what is shaping up to be an excellent website maintenance and management platform [Meantain](https://www.meantain.com)
which will be going into public beta later this year, as well as continuing to build webistes and web apps professionally. 

I'm pretty busy so I post on here roughly once every 2 years.

Contact me at [jerk@coderjerk.com](mailto:jerk@coderjerk.com) if you want something, or if you want to chat in public you can do it here on [github discussions](https://github.com/danieldevine/coderjerk/discussions).

  </div>
</div>

<style>
.about-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 1.5rem;
}

.about-photo {
  flex-shrink: 0;
  width: 240px;
}

.about-photo img {
  width: 100%;
  border-radius: 8px;
}

.about-bio {
  flex: 1;
}

.about-bio p:first-child {
  margin-top: 0;
}

@media (max-width: 640px) {
  .about-layout {
    flex-direction: column;
  }

  .about-photo {
    width: 180px;
  }
}
</style>
