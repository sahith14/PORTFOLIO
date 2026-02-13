:root {
  --bg: #070812;
  --card: rgba(255, 255, 255, 0.08);
  --text: #eaf0ff;
  --muted: #a7b0cb;
  --primary: linear-gradient(135deg, #7b61ff, #00d1ff);
  --border: rgba(255, 255, 255, 0.16);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  color: var(--text);
  background: radial-gradient(circle at 20% 20%, #1b1f3d, var(--bg) 50%);
  min-height: 100vh;
  overflow-x: hidden;
}

.bg-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(circle at center, black 15%, transparent 80%);
}

.hero,
.section,
footer {
  width: min(1120px, 90vw);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.topbar {
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  color: #fff;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  letter-spacing: 0.03em;
}

.hero-content {
  padding: 4.5rem 0 5rem;
  max-width: 760px;
}

.tag {
  color: #8be9ff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 0.78rem;
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 1.12;
}

h1 {
  font-size: clamp(2.2rem, 7vw, 4.4rem);
  margin-top: 0.8rem;
}

h2 {
  font-size: clamp(1.6rem, 3.7vw, 2.8rem);
}

.intro {
  color: var(--muted);
  max-width: 60ch;
  font-size: 1.1rem;
  line-height: 1.7;
}

.cta {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.7rem 1.2rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta:hover {
  transform: translateY(-2px);
}

.cta-primary {
  background: var(--primary);
  border: none;
  box-shadow: 0 10px 24px rgba(0, 209, 255, 0.25);
}

.section {
  padding: 2rem 0 4rem;
}

.section-heading {
  margin-bottom: 1.6rem;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.1rem;
}

.video-card {
  margin: 0;
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  background: var(--card);
  backdrop-filter: blur(6px);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.video-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 209, 255, 0.6);
}

.video-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.video-meta {
  padding: 1rem;
}

.video-meta p,
.services li,
footer p {
  color: var(--muted);
}

.services {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.services ul {
  margin: 0;
  padding-left: 1.1rem;
  line-height: 1.8;
}

footer {
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

dialog {
  width: min(880px, 92vw);
  border: 1px solid var(--border);
  border-radius: 20px;
  background: #080a18;
  color: #fff;
  padding: 1rem;
}

dialog::backdrop {
  background: rgba(3, 5, 17, 0.75);
}

.video-frame {
  margin-top: 0.8rem;
  aspect-ratio: 16 / 9;
}

iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}

.close {
  float: right;
  background: transparent;
  border: 1px solid var(--border);
  color: #fff;
  border-radius: 999px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}

@media (max-width: 780px) {
  .services {
    grid-template-columns: 1fr;
  }
}
