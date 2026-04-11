<template>
  <section class="contact" ref="contactRef">
    <div class="contact__content">
      <div class="contact_img">
        <figure>
          <img src="@/assets/images/contact-img.jpg" alt="My portfolio website" />
        </figure>
      </div>
      <div class="contact__info">
        <h2>CONTACT ME</h2>
        <div class="link__group">
          <SocialLink
            class="link item_a"
            href="mailto:yisheng.chen.jackie@gmail.com"
            label="Email: yisheng.chen.jackie@gmail.com"
            iconName="mail-icon"
          />
          <SocialLink
            class="link item_b"
            href="https://github.com/dizzydog-rgb"
            label="Github"
            iconName="github-icon"
          >
            <div class="github_status">
              <img src="@/assets/icons/github-icon-green.svg" alt="github status" />
              <p>{{ lastCommitMessage }}</p>
            </div>
          </SocialLink>

          <SocialLink
            class="link item_c"
            href="https://codepen.io/collection/zzGkOR"
            label="CodePen"
            iconName="codepen-icon"
          />
          <SocialLink
            class="link item_d"
            href="https://vocus.cc/salon/dizzydog"
            label="BLOG"
            iconName="vocus-icon"
          />
          <SocialLink
            class="link item_e"
            href="www.linkedin.com/in/yi-sheng-chen-jackie"
            label="LinkedIn"
            iconName="linkedin-icon"
          />
        </div>
      </div>
      <div class="animals">
        <figure><img src="@/assets/images/choju-1.webp" alt="rabbit"/></figure>
        <figure><img src="@/assets/images/choju-2.webp" alt="monkey"/></figure>
        <figure><img src="@/assets/images/choju-3.webp" alt="frog"/></figure>
        <figure><img src="@/assets/images/choju-4.webp" alt="fox"/></figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SocialLink from '../base/SocialLink.vue'

const lastCommitMessage = ref('Loading...')
const githubUser = 'dizzydog-rgb'
const fetchLastCommit = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUser}/events/public`)
    const events = await response.json()

    const pushEvent = events.find((event) => event.type === 'PushEvent')

    if (pushEvent && pushEvent.payload.head) {
      const repoUrl = pushEvent.repo.url
      const commitResp = await fetch(`${repoUrl}/commits/${pushEvent.payload.head}`)
      const commitData = await commitResp.json()
      const message = commitData.commit.message
      lastCommitMessage.value = message.length > 35 ? message.substring(0, 35) + '...' : message
    } else {
      lastCommitMessage.value = 'No recent activity'
    }
  } catch (error) {
    console.error('Github API Error:', error)
    lastCommitMessage.value = 'Failed to load'
  }
}

onMounted(() => {
  fetchLastCommit()
})
</script>

<style scoped>
.contact {
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/ukiyo-e-parpe-texture.webp');
  background-size: cover;
  opacity: 0.7;
  z-index: -1;
}
.contact__content {
  max-width: 1700px;
  margin: 0 auto;
  padding: 70px var(--containerPadding) 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
  position: relative;
}

.contact_img figure {
  width: 100%;
  height: 100%;
}
.contact_img figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact__info h2 {
  font-size: var(--f120);
  line-height: 1;
  letter-spacing: 0;
  color: var(--MainColor);
  white-space: nowrap;
  padding-bottom: 90px;
}
.contact__info .link__group {
  max-width: 680px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'a a'
    'b .'
    'c d'
    'e .';
  gap: 40px 20px;
}
.contact__info .link:not(.item_a) {
  max-width: 280px;
}

.item_b {
  position: relative;
}
.github_status {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  left: 110%;
  top: 50%;
  transform: translateY(-50%);
}
.github_status img {
  max-width: 24px;
  animation: pulse 2s infinite;
}
.github_status p {
  font-size: var(--f16);
  color: #2da44e;
  line-height: 1.5;
  flex-shrink: 0;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.contact__content .animals {
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 60px;
  left: 20vw;
  pointer-events: none;
}
.contact__content .animals figure {
  max-width: 10vw;
  position: relative;
  z-index: 1;
}
.contact__content .animals figure::before {
  content: '';
  width: 100%;
  height: 15px;
  background: var(--MainColor);
  opacity: 0.5;
  border-radius: 50%;
  position: absolute;
  bottom: -4px;
  z-index: -1;
}
@keyframes jump-1 {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px) rotate(-2deg);
  }
}
@keyframes jump-2 {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
}
.contact__content .animals figure:nth-of-type(1) {
  position: relative;
  bottom: 15vw;
}
.contact__content .animals figure:nth-of-type(1) img {
  animation: jump-1 1.5s infinite ease-in-out;
}
.contact__content .animals figure:nth-of-type(2) {
  position: relative;
  bottom: 10vw;
}
.contact__content .animals figure:nth-of-type(2) img {
  animation: jump-2 1.8s infinite ease-in-out;
}
.contact__content .animals figure:nth-of-type(3) {
  position: relative;
  bottom: 5vw;
}
.contact__content .animals figure:nth-of-type(3) img {
  animation: jump-1 2s infinite ease-in-out;
}
.contact__content .animals figure:nth-of-type(4) img {
  animation: jump-2 2.5s infinite ease-in-out;
}

.item_a {
  grid-area: a;
}
.item_b {
  grid-area: b;
}
.item_c {
  grid-area: c;
}
.item_d {
  grid-area: d;
}
.item_e {
  grid-area: e;
}

@media (max-width: 1440px) {
  .contact__content .animals {
    bottom: 10px;
    left: 10vw;
  }
}
@media (max-width: 1024px) {
  .contact__info h2 {
    padding-bottom: 70px;
  }
  .contact__content {
    grid-template-columns: 1fr;
  }
  .contact_img {
    grid-row: 2 / 3;
    max-height: 400px;
    overflow: hidden;
  }
  .contact_img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .contact__content .animals {
    left: initial;
    right: 60px;
    bottom: 20px;
  }
  .contact__content .animals figure {
    max-width: 15vw;
  }
}
@media (max-width: 768px) {
  .contact__info h2 {
    padding-bottom: 50px;
  }
  .contact__content {
    gap: 60px;
  }
  .contact__info .link__group {
    grid-template-areas:
      'a a'
      'b b'
      '. .'
      'c c'
      'd d'
      'e e';
    gap: 30px 0;
  }
  .github_status {
    left: 20px;
    top: 150%;
  }
  .item_a :deep(span) {
    word-break: break-all;
    text-indent: -3.5em;
    margin-left: 3.5em;
  }
}
@media (max-width: 480px) {
  .contact__content {
    padding: 50px var(--containerPadding) 90px;
    gap: 40px;
  }
  .contact__info h2 {
    padding-bottom: 30px;
  }
  .contact__info .link__group {
    gap: 25px 0;
  }
  .github_status {
    top: 140%;
  }

  .contact__info .link {
    max-width: 280px;
  }
  .item_a :deep(.label-inner) {
    display: none;
  }
  .item_a :deep(span::before) {
    content: 'Email';
    font-size: var(--f20);
    color: var(--SubColor);
    font-family: var(--SFontSans);
  }

  .contact__content .animals {
    left: initial;
    right: 15px;
  }
  .contact__content .animals figure {
    max-width: 20vw;
  }
}
</style>
