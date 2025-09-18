// Small helper to render agenda JSON into HTML

export function renderAgenda(sessions) {
  // If the file contains an object with totalMinutes and sessions, handle that shape
  const list = Array.isArray(sessions) ? sessions : (sessions.sessions || []);

  const total = list.reduce((s, i) => s + (Number(i.minutes) || 0), 0);
  const parts = [];
  parts.push(`<p class="meta">Total: ${total} minutes</p>`);

  for (const item of list) {
    const title = escapeHtml(item.title || 'Untitled');
    const minutes = item.minutes ? `${item.minutes}m` : '';
    const goal = escapeHtml(item.goal || 'No description provided.');

    parts.push(`
      <div class="session">
        <div class="title">${title} <span class="meta">${minutes}</span></div>
        <div class="goal">${goal}</div>
      </div>
    `);
  }

  return parts.join('\n');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
