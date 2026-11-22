// n = name, p = rent/month, r = rating, ph = phone no., a = amenities
const DB = {
  "Lawgate": [
    {n: "Dreams PG",  p: 5499, ac: 1, r: 4.8, ph: "9600000056", a: ["Wi-Fi", "Backup light", "Water cooler", "Room material"] },
    {n: "Campus PG",  p: 6299, ac: 1, r: 4.5, ph: "9800000002", a: ["Fan", "Backup light", "Bathroom"] },
    {n: "Apna Home",  p: 5999, ac: 1, r: 4.9, ph: "9800000003", a: ["Wi-Fi", "Mini fridge", "Backup light", "Premium material"] },
    {n: "UrbanNest PG", p: 6999, ac: 0, r: 4.2, ph: "9800000004", a: ["Bathroom", "Backup light", "Locker"] },
    {n: "CozyCube PG", p: 4299, ac: 0, r: 4.7, ph: "9800000005", a: ["Wi-Fi", "Backup light", "Kitchenette", "Room material"] }
  ],
  "Green Valley": [
    {n: "Dr. Villa",     p: 8999, ac: 1, r: 4.9, ph: "9800000011", a: ["Wi-Fi", "Backup light", "Balcony", "Room material"] },
    {n: "Pardhan PG",    p: 6599, ac: 0, r: 4.8, ph: "9800000013", a: ["Wi-Fi", "Backup light", "Bathroom", "Material kit"] },
    {n: "Royal PG",      p: 5999, ac: 0, r: 4.0, ph: "9800000014", a: ["Backup light", "Shared washroom"] },
    {n: "Riya Girls PG", p: 8199, ac: 1, r: 4.6, ph: "9900000015", a: ["Wi-Fi", "Backup light", "Workspace", "Room material"] }
  ],
  "Phagwara": [
    { n: "HappyNest PG", p: 5799, ac: 1, r: 4.7, ph: "9800000021", a: ["Wi-Fi", "Backup light", "Desk", "Material"] },
    { n: "Aashry PG",    p: 6099, ac: 0, r: 4.2, ph: "9800000022", a: ["Fan", "Backup light", "Attached bathroom"] },
    { n: "Nestly PG",    p: 5199, ac: 0, r: 4.5, ph: "9800000023", a: ["Wi-Fi", "Backup light", "TV", "Room material"] },
    { n: "Nivaas PG",    p: 4849, ac: 0, r: 4.0, ph: "9800000024", a: ["Fan", "Backup light", "Shared bathroom"] },
    { n: "StayOra PG",   p: 5499, ac: 1, r: 4.9, ph: "9800000025", a: ["Wi-Fi", "Backup light", "Living area", "Premium material"] }
  ],
  "Jalandhar": [
    { n: "LakeView PG",        p: 6199, ac: 1, r: 4.8, ph: "9800000031", a: ["Wi-Fi", "Backup light", "Mini fridge", "Material"] },
    { n: "Smart Residency PG", p: 7399, ac: 1, r: 4.3, ph: "9800000032", a: ["Fan", "Backup light", "TV"] },
    { n: "Sunrise PG",         p: 5199, ac: 0, r: 4.0, ph: "9800000033", a: ["Wi-Fi", "Backup light", "Room material"] },
    { n: "Aavas PG",           p: 4749, ac: 0, r: 4.1, ph: "9800000034", a: ["Shared bathroom", "Backup light", "Locker"] },
    { n: "Sharan PG",          p: 5299, ac: 0, r: 4.9, ph: "9800000035", a: ["Wi-Fi", "Backup light", "Spa kit", "Material"] }
  ],
  "Haridaspur": [
    { n: "Sneh PG",          p: 6699, ac: 1, r: 4.7, ph: "9800000041", a: ["Wi-Fi", "Backup light", "View", "Room material"] },
    { n: "Elite Village PG", p: 6199, ac: 0, r: 4.4, ph: "9800000042", a: ["Fan", "Backup light", "Garden"] },
    { n: "Haven PG",         p: 4899, ac: 1, r: 4.8, ph: "9800000043", a: ["Wi-Fi", "Backup light", "Terrace", "Material"] },
    { n: "HerNest Girls PG", p: 4899, ac: 0, r: 4.0, ph: "9800000044", a: ["Basic", "Backup light", "Shared washroom"] },
    { n: "Blossom PG",       p: 6199, ac: 1, r: 4.6, ph: "9800000045", a: ["Wi-Fi", "Backup light", "Kitchen", "Room material"] }
  ]
};

// Photos from your original files, keyed by PG name
const IMG = {
  "Dreams PG": "https://imgs.search.brave.com/n4JSoU3rtQcXPUMqs5vIGlInJRttl7AWXAjrFudRIIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI0/L0F1Zy8wOC9QaG90/b19oNDAwX3c1NDAv/R1IyLTQ1NzU0My0y/MjE0NDUxXzQwMF81/NDAuanBn",
  "Campus PG": "https://imgs.search.brave.com/mJw7MXWTABk-b3jQjclwJA2g_Zj1CLUI5iv4l9Q9YBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/cC1zb3V0aC0xLmFt/YXpvbmF3cy5jb20v/d3d3LmNpbWcuaW4v/aW1hZ2VzLzIwMjEv/MDcvMjcvNTMvXzE2/MjczODIxOTUxX2xh/cmdlLmpwZWc",
  "Apna Home": "https://imgs.search.brave.com/qk0W8nw1uLAnjwcfVCJSAG5CWkmRHRTdpeki_uSHu6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TVi9GSi9CSC9B/TkRST0lELTU0OTgx/NDUxL3Byb2R1Y3Qt/anBlZy01MDB4NTAw/LmpwZw",
  "UrbanNest PG": "https://imgs.search.brave.com/3EwKudl2kIzsne_3oEQRxszWWFAJ873WH9Yg70basbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIz/L0ZlYi8yNS9QaG90/b19oNDAwX3c1NDAv/R1IyLTM1MzM5MS0x/NjczOTMxXzQwMF81/NDAucG5n",
  "CozyCube PG": "https://imgs.search.brave.com/f-5p-T1Gteh74Q-ME3oNpwyBG_9UW8a1YhYKu07X8xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI0/L01heS8yNy9QaG90/b19oNDAwX3c1NDAv/R1IyLTQ0MzQzOS0y/MTQ1NDAxXzQwMF81/NDAuanBlZw",

  "Dr. Villa": "https://imgs.search.brave.com/SkjhHvymC_C8clhhnRS0Ks3CY6JvYBrcW7_vU0rHvQM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bG9jYWxvLnNpdGUv/P2Rwcj0xJmZpdD1j/b3ZlciZmb3JtYXQ9/aW1hZ2UvanBlZyZo/ZWlnaHQ9MjA4JnF1/YWxpdHk9ODUmdXJs/PWh0dHBzOi8vbGgz/Lmdvb2dsZXVzZXJj/b250ZW50LmNvbS9w/L0FGMVFpcE5ueFd2/VkJ5REhOUGNOeFlL/b3dabGN6MXlZMFpo/d2lIM1ZBUk9vJndp/ZHRoPTM4MiZzaWc9/X0JQZmh1aEVqbnJ6/NE1zZWNmenRVeHEy/TjNxNGhnei1uYVpW/SHp3bTYyVQ",
  "Pardhan PG": "https://imgs.search.brave.com/Yz5koQPHW6t4eAYkQBtfBEVaRTb2euvgKBtd__it7h0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIx/L0RlYy8yNi9QaG90/b19oNDAwX3c1NDAv/R1IyLTI2MDc1MS0x/MjIwMjU3XzQwMF81/NDAuanBn",
  "Royal PG": "https://imgs.search.brave.com/uTgp9s0BCJANYWMeOrkzHhDUk8QXxhibFpPeMVIjGP4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIz/L0phbi8yMC9QaG90/b19oNDAwX3c1NDAv/R1IyLTM0NDczOS0x/NjMzMDQzXzQwMF81/NDAucG5n",
  "Riya Girls PG": "https://imgs.search.brave.com/Y4lm02NHkQtGK_IxAW1nNZWuek2FkJezne6aFflGo6Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1LzUv/NTEwNjUxODcyL1NW/L1JRL1BaLzIyNDky/MjE3Ni9wZy1uZWFy/LWxwdS0xMDAweDEw/MDAuanBlZw",

  "HappyNest PG": "https://imgs.search.brave.com/dXmJi6j9YUJRgCIKQt3FZ_tQxdTXbZM4c-Qruy95u6I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cGhhZ3dhcmEvaTQv/OTk5OXAxODI0LjE4/MjQuMTkwMTI4MTgy/NzI4Lmw0aTQvY2F0/YWxvZ3VlL3NvaGFs/LXBnLXBoYWd3YXJh/LTBzeW9uZXdmZmkt/MjUwLmpwZz93PTY0/MCZxPTc1",
  "Aashry PG": "https://imgs.search.brave.com/GNWj3e3BVrVsw4gvsL8bnvWZ64u61NcBCl9-DfdeCWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cGhhZ3dhcmEvaDQv/OTk5OXAxODI0LjE4/MjQuMTcwOTIyMTU0/OTE5Lng0aDQvY2F0/YWxvZ3VlL3BnLWhv/bWUtZ3VydS1oYXJn/b2JpbmQtbmFnYXIt/cGhhZ3dhcmEtcGF5/aW5nLWd1ZXN0LWFj/Y29tbW9kYXRpb25z/LW1vN3Q0am5uM2Eu/anBnP3c9Mzg0MCZx/PTc1",
  "Nestly PG": "https://imgs.search.brave.com/lXFb5cpvo9wJRjCGVmga7XMcWAiOCqFpZn08HM7z7GE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvcGhhZ3dhcmEv/ajEvOTk5OXAxODI0/LjE4MjQuMTcwNTEz/MTAzMDQ4Lm03ajEv/Y2F0YWxvZ3VlL3Nh/dHlhbS1wZy1ib3lz/LWhvc3RlbC1waGFn/d2FyYS1hYy1wYXlp/bmctZ3Vlc3QtYWNj/b21tb2RhdGlvbnMt/Zm9yLW1lbi1tZHhl/d3o5cXZiLTI1MC5q/cGc_dz02NDAmcT03/NQ",
  "Nivaas PG": "https://imgs.search.brave.com/CAWaH0TmG5S0WStGTp7lcROEJTwhEqRf4ontKrP9nBE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cGhhZ3dhcmEvaDQv/OTk5OXAxODI0LjE4/MjQuMTcwOTIyMTU0/OTE5Lng0aDQvY2F0/YWxvZ3VlL3BnLWhv/bWUtZ3VydS1oYXJn/b2JpbmQtbmFnYXIt/cGhhZ3dhcmEtcGF5/aW5nLWd1ZXN0LWFj/Y29tbW9kYXRpb25z/LXlubXY1bmM3Zmou/anBnP3c9Mzg0MCZx/PTc1",
  "StayOra PG": "https://imgs.search.brave.com/RID7zDq2l0uhoF33I4mIe5cmHJlbRZze53OgP6H58Ss/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cGhhZ3dhcmEvaTQv/OTk5OXAxODI0LjE4/MjQuMTkwMTI4MTgy/NzI4Lmw0aTQvY2F0/YWxvZ3VlL3NvaGFs/LXBnLXBoYWd3YXJh/LTBhbnV0d21veXct/MjUwLmpwZz93PTY0/MCZxPTc1",

  "LakeView PG": "https://imgs.search.brave.com/Rw9s14mhh_f2xaX4pPef8wJEAbmsdtjKoEPu-ruxsI8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcG9s/bG8ub2x4LmluL3Yx/L2ZpbGVzL3NlMnJo/ZWRyMmVwOTItSU4v/aW1hZ2U7cz02MDB4/MTIwMDtxPTYwO2Y9/d2VicA",
  "Smart Residency PG": "https://imgs.search.brave.com/lODTTfVhafnFg60lSqxmod9uGqwEO9CcUbzSQitb2GM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI0/L0F1Zy8yNC9QaG90/b19oNDAwX3c1NDAv/R1IyLTM4MDA5OS0y/MjMxOTk3XzQwMF81/NDAuanBlZw",
  "Sunrise PG": "https://imgs.search.brave.com/sZrI19H6khE-KsuvxkK9hN_EM5OLqD_vv7uGsOGcqRM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuaW5kaWFvbmxp/bmUuaW4vYnVzaW5l/c3NpbWcvZ2FsbGVy/eS8yNTAvMTAwMDE1/NTUwOV81ZTQ1NTNm/YS1jNmNjLTRmYzAt/OWMzMC0yMWE1Mjdl/ZWIwNDMud2VicA",
  "Aavas PG": "https://imgs.search.brave.com/GlQzUzD69gBnmefFzGfRbx9VlWlAZQW3SKHdfJWcDms/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI1/L0phbi8wOC9QaG90/b19oNDAwX3c1NDAv/R1IyLTQ3ODIzNy0y/MzYxMDAzXzQwMF81/NDAuanBn",
  "Sharan PG": "https://imgs.search.brave.com/JhhgYGeX1A8vr9NfKLe2PT5sQQMj2OQAtfAXFsR0apg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIz/L0RlYy8xMi9QaG90/b19oNDAwX3c1NDAv/R1IyLTQxMTcwOS0x/OTcyMTA5XzQwMF81/NDAuanBn",

  "Sneh PG": "https://imgs.search.brave.com/LYg9ZTWM2I86XeMUHzWRvc3YrRkgzfXQHrOM5XSRdts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIz/L0phbi8wOC9QaG90/b19oNDAwX3c1NDAv/R1IyLTM0MTUyMS0x/NjEzNDU1XzQwMF81/NDAuanBlZw",
  "Elite Village PG": "https://imgs.search.brave.com/_GF9aMJ25xCDXZudoBJb1fDDLdfUb6oxfBI3JaL9Fsg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/cC1zb3V0aC0xLmFt/YXpvbmF3cy5jb20v/d3d3LmNpbWcuaW4v/aW1hZ2VzLzIwMjEv/MDcvMjcvNTMvXzE2/MjczODIxOTY3X2xh/cmdlLmpwZWc",
  "Haven PG": "https://imgs.search.brave.com/Lauq5wVlGX0tXi7VoRjD27hSA07x4GzhaQcCPXDcsBI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDIz/L09jdC8wNi9QaG90/b19oNDAwX3c1NDAv/R1IyLTQwMDAyOS0x/OTA3NTAzXzQwMF81/NDAuanBn",
  "HerNest Girls PG": "https://imgs.search.brave.com/241bscih6J7YrVrYLXr_rrSCQGGLMUpE4Nc36OYvCtY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI0/L1NlcC8yOS9QaG90/b19oNDAwX3c1NDAv/R1IyLTQ2NTY2MS0y/MjY3MDI3XzQwMF81/NDAuanBn",
  "Blossom PG": "https://imgs.search.brave.com/FGPxhU8TOvLyCtyNTfcyv8U6gpuZONTX9fMj42Ycyg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcGcv/Z3JkMi9jcm9wcGVk/X2ltYWdlcy8yMDI0/L0ZlYi8xNi9QaG90/b19oNDAwX3c1NDAv/R1IyLTQyMzY4My0y/MDQzNzE3XzQwMF81/NDAuanBn"
};

// helper
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

// render
function render() {
  const q = $("#q").value.trim().toLowerCase();
  const area = $("#area").value, ac = $("#ac").value, sort = $("#sort").value;

  // flatten-one location or all locations
  let list = Object.entries(DB)
    .filter(([name]) => area === "all" || name === area)
    .flatMap(([name, pgs]) => pgs.map(p => ({ ...p, area: name })));

  list = list.filter(p =>
    (ac === "all" || (ac === "ac") === !!p.ac) &&
    (!q || (p.n + " " + p.a.join(" ")).toLowerCase().includes(q))
  );

  if (sort === "asc") list.sort((a, b) => a.p - b.p);
  if (sort === "desc") list.sort((a, b) => b.p - a.p);
  if (sort === "rate") list.sort((a, b) => b.r - a.r);

  $("#grid").innerHTML = list.map(p => `
    <article class="pg">
      <div class="photo">
        ${(p.img || IMG[p.n]) ? `<img src="${esc(p.img || IMG[p.n])}" alt="${esc(p.n)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : ""}
        <span class="tag ${p.ac ? "" : "non"}">${p.ac ? "AC" : "Non-AC"}</span>
      </div>
      <h3>${esc(p.n)}</h3>
      <div class="place">📍 ${esc(p.area)}</div>
      <div class="price">₹${p.p.toLocaleString("en-IN")} <small>/month</small></div>
      <div class="chips">${p.a.map(x => `<span>✓ ${esc(x)}</span>`).join("")}</div>
      <div class="rating">★ ${Number(p.r).toFixed(1)}</div>
      <div class="actions">
        <a href="tel:+91${p.ph}">📞 Call</a>
        <a class="wa" target="_blank" rel="noopener"
        href="https://wa.me/91${p.ph}?text=${encodeURIComponent("Hi, I'm interested in " + p.n + " (" + p.area + ").")}">WhatsApp</a>
      </div>
    </article>`).join("");

  $("#empty").hidden = list.length > 0;
  $("#count").textContent = `${list.length} PG${list.length === 1 ? "" : "s"} found`;
}

// filter dropdown
const names = Object.keys(DB);
$("#area").innerHTML = `<option value="all">All locations</option>` + names.map(n => `<option>${n}</option>`).join("");
$("#form [name=area]").innerHTML = `<option value="">Select…</option>` + names.map(n => `<option>${n}</option>`).join("");
["#q", "#area", "#ac", "#sort"].forEach(id => $(id).addEventListener("input", render));

// dark mode
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  $("#theme").textContent = t === "dark" ? "☀️" : "🌙";
  store.set("theme", t);
}
setTheme(store.get("theme", matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("#theme").onclick = () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(t);
  toast(t === "dark" ? "Dark mode on 🌙" : "Light mode on ☀️");
};

form.addEventListener("reset", () => (prev.hidden = true));

$("#add").onclick = () => $("#dlg").showModal();
$("#cancel").onclick = () => $("#dlg").close();

form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!validate()) return toast("Please fix the highlighted fields", true);


  const pg = {
    img,
    n: name,
    p: Math.round(+f.price.value),
    ac: +f.ac.value,
    r: 4.0, // new listings start at a neutral rating
    ph: f.phone.value.trim(),
    a: f.amen.value.split(",").map(s => s.trim()).filter(Boolean)
  };
  DB[area].push(pg);
  extra.push({ area, pg });
  store.set("pg_extra", extra);

  form.reset();
  $("#dlg").close();
  $("#q").value = "";
  $("#area").value = area; // jump to the area so the new PG is visible
  render();
  toast(`${name} added to ${area} ✅`);
});

render();
