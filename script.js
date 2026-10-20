(function () {
  const grid = document.getElementById("grid");
  const filtersEl = document.getElementById("filters");
  const modal = document.getElementById("modal");
  const player = document.getElementById("player");

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("statCount").textContent = VIDEOS.length;

  // Hero background
  const hero = document.getElementById("heroVideo");
  if (SITE.heroVideo) hero.src = SITE.heroVideo;
  else hero.remove();

  // Tools
  document.getElementById("toolsList").innerHTML = SITE.tools
    .map((t) => `<li>${escapeHtml(t)}</li>`)
    .join("");

  // Filters
  const categories = ["All", ...new Set(VIDEOS.map((v) => v.category))];
  filtersEl.innerHTML = categories
    .map((c, i) => `<button class="chip${i === 0 ? " active" : ""}" role="tab" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join("");
  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filtersEl.querySelectorAll(".chip").forEach((b) => b.classList.toggle("active", b === btn));
    render(btn.dataset.cat);
  });

  function thumbFor(v) {
    if (v.thumbnail) return v.thumbnail;
    if (v.youtube) return `https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg`;
    return "";
  }

  function render(cat = "All") {
    const list = VIDEOS.map((v, i) => ({ ...v, i })).filter((v) => cat === "All" || v.category === cat);
    grid.innerHTML = list
      .map((v) => {
        const thumb = thumbFor(v);
        const media = thumb
          ? `<img src="${escapeHtml(thumb)}" alt="" loading="lazy" />`
          : v.src
          ? `<video src="${escapeHtml(v.src)}#t=1" muted playsinline preload="metadata"></video>`
          : "";
        return `
        <article class="card" data-index="${v.i}" tabindex="0" aria-label="Play ${escapeHtml(v.title)}">
          <div class="thumb">
            ${media}
            <span class="play" aria-hidden="true">▶</span>
            ${v.duration ? `<span class="duration">${escapeHtml(v.duration)}</span>` : ""}
          </div>
          <div class="card-body">
            <p class="card-cat">${escapeHtml(v.category)}${v.year ? " · " + v.year : ""}</p>
            <h3>${escapeHtml(v.title)}</h3>
            <div class="tags">${(v.tools || []).map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
          </div>
        </article>`;
      })
      .join("");
  }
  render();

  // Hover preview for mp4 cards
  grid.addEventListener("mouseover", (e) => {
    const vid = e.target.closest(".card")?.querySelector("video");
    if (vid) vid.play().catch(() => {});
  });
  grid.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".card");
    if (!card || card.contains(e.relatedTarget)) return;
    const vid = card.querySelector("video");
    if (vid) vid.pause();
  });

  // Open modal
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openVideo(VIDEOS[card.dataset.index]);
  });
  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".card");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openVideo(VIDEOS[card.dataset.index]);
    }
  });

  function openVideo(v) {
    if (v.youtube) {
      player.innerHTML = `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="${escapeHtml(v.title)}"></iframe>`;
    } else if (v.vimeo) {
      player.innerHTML = `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(v.vimeo)}?autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${escapeHtml(v.title)}"></iframe>`;
    } else {
      player.innerHTML = `<video src="${escapeHtml(v.src)}" controls autoplay playsinline></video>`;
    }
    document.getElementById("modalTitle").textContent = v.title;
    document.getElementById("modalDesc").textContent = v.description || "";
    document.getElementById("modalTags").innerHTML = (v.tools || []).map((t) => `<span>${escapeHtml(t)}</span>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    player.innerHTML = "";
    document.body.style.overflow = "";
  }
  modal.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") links.classList.remove("open");
  });

  // Nav background on scroll
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
})();
