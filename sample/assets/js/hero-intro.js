// These durations mirror the CSS transitions on .hero__endframe /
// .hero__intro-video in sections.css/responsive.css. Using fixed timers
// (instead of waiting on a `transitionend` event) keeps the sequence
// deterministic even if a transition gets skipped or fires its events
// out of order.
//
// Mobile (≤768px) uses a shorter, tighter crossfade (~900ms, per the
// rounded-card treatment in responsive.css) than desktop's slower
// 1.6s zoom-settle in sections.css — desktop's timing is unchanged.
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const CROSSFADE_DURATION = isMobile ? 950 : 1650;
const CONTENT_REVEAL_DELAY = isMobile ? 200 : 350; // a small cinematic beat before content appears

// In-memory only — deliberately not persisted anywhere (no localStorage/
// sessionStorage/cookies). This resets whenever the page/tab is freshly
// loaded, and guards against initHeroIntro() ever being invoked twice
// within the same page lifecycle (e.g. an accidental duplicate init call).
let hasRun = false;

export function initHeroIntro() {
  if (hasRun) return;
  hasRun = true;

  const hero = document.getElementById('hero');
  const video = document.getElementById('hero-intro-video');
  const endframe = document.getElementById('hero-endframe-img');
  if (!hero || !video || !endframe) return;

  if (!hero.classList.contains('hero--intro-active')) return;

  // Skip straight to the normal hero (no end-frame — there's no video
  // frame for it to match) if playback never actually happened.
  function revealWithoutVideo() {
    hero.classList.remove('hero--intro-active');
  }

  // Video → end-frame crossfade, then the hero content reveal.
  function revealViaEndframe() {
    hero.classList.add('hero--intro-endframe');

    setTimeout(() => {
      video.style.display = 'none';

      setTimeout(() => {
        hero.classList.remove('hero--intro-active'); // un-pauses the content's entrance animations
        hero.classList.add('hero--intro-done');
      }, CONTENT_REVEAL_DELAY);
    }, CROSSFADE_DURATION);
  }

  // ended fires exactly once per playback, and playback is only ever
  // started once per page load (see hasRun above) — nothing here can
  // be triggered by scrolling, resizing, or re-rendering.
  video.addEventListener('ended', revealViaEndframe);

  video.load();
  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(revealWithoutVideo); // autoplay blocked / file issue — show hero now
  }
}
