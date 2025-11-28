:root {
  --bg: #0f172a;          /* slate-900 */
  --card: #111827;        /* gray-900 */
  --text: #e5e7eb;        /* gray-200 */
  --muted: #9ca3af;       /* gray-400 */
  --primary: #6366f1;     /* indigo-500 */
  --primary-700: #4f46e5;
  --accent: #22c55e;      /* green-500 */
  --danger: #ef4444;      /* red-500 */
  --shadow: 0 10px 25px rgba(0,0,0,0.35);
  --radius: 16px;
}

* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  background: radial-gradient(1200px 600px at 10% 10%, #0b1020, var(--bg));
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  line-height: 1.5;
}

.app-header {
  padding: 32px 16px 8px;
  text-align: center;
}
.app-header h1 {
  margin: 0;
  font-size: clamp(28px, 4vw, 40px);
  letter-spacing: 0.5px;
}
.subtitle {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.95rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 900px) {
  .container {
    grid-template-columns: 1.2fr 0.8fr;
    grid-auto-rows: min-content;
  }
  #list { grid-column: 1 / -1; }
}

.card {
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px;
}

.image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  background: #0b1225;
  margin-bottom: 12px;
}

#animalImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none; /* zobrazí se po načtení */
}

.skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #0b1225 25%, #121a35 50%, #0b1225 75%);
  background-size: 200% 100%;
  animation: shimmer 1.8s infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.form-inline {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 8px;
  align-items: center;
}
.form-inline input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.06);
  color: var(--text);
  outline: none;
}
.form-inline input::placeholder { color: #b4b9c7; }

.btn {
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.06);
  color: var(--text);
  cursor: pointer;
  transition: transform 0.05s ease, background 0.2s ease, border-color 0.2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:active { transform: translateY(0); }

.btn.primary {
  background: linear-gradient(180deg, var(--primary), var(--primary-700));
  border-color: rgba(255,255,255,0.15);
}
.btn.danger {
  background: linear-gradient(180deg, var(--danger), #b91c1c);
  border-color: rgba(255,255,255,0.15);
}

.feedback {
  min-height: 24px;
  margin: 6px 0;
  color: var(--muted);
}
.feedback.success { color: var(--accent); font-weight: 600; }
.feedback.error { color: var(--danger); font-weight: 600; }

.meta {
  display: flex;
  gap: 12px;
  color: var(--muted);
  font-size: 0.9rem;
}

#add .field {
  display: grid;
  gap: 6px;
  margin-bottom: 12px;
}
.hint { color: var(--muted); }

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px;
}
.list li {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
}
.list img {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
  background: #0b1225;
}
.list .title {
  font-weight: 600;
}
.list .chips {
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 0.8rem;
  color: #c7d2fe;
  background: rgba(99,102,241,0.15);
  border: 1px solid rgba(99,102,241,0.35);
}

/* přístupnost */
.sr-only {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

.app-footer {
  text-align: center;
  color: var(--muted);
  padding: 18px;
  font-size: 0.9rem;
}

