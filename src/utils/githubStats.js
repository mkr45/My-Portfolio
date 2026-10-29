export function contributionStats(payload, today = new Date().toISOString().slice(0, 10)) {
  if (!Array.isArray(payload?.contributions) || !payload.contributions.length) throw new Error('Missing contributions');
  const days = payload.contributions.filter(day => day.date <= today).sort((a, b) => a.date.localeCompare(b.date));
  if (!days.length || days.some(day => !/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isInteger(day.count) || day.count < 0 || !Number.isInteger(day.level) || day.level < 0 || day.level > 4)) throw new Error('Invalid contributions');
  let longest = 0;
  let run = 0;
  let previous = 0;
  for (const day of days) {
    const timestamp = Date.parse(`${day.date}T00:00:00Z`);
    run = day.count > 0 ? (timestamp - previous === 86400000 ? run + 1 : 1) : 0;
    longest = Math.max(longest, run);
    previous = timestamp;
  }
  let index = days.length - 1;
  let expected = Date.parse(`${today}T00:00:00Z`);
  // Today can still receive contributions; yesterday's streak stays active.
  if (days[index].date !== today || days[index].count === 0) {
    expected -= 86400000;
    if (days[index].date === today) index--;
  }
  let current = 0;
  while (index >= 0 && days[index].count > 0 && Date.parse(`${days[index].date}T00:00:00Z`) === expected) {
    current++;
    index--;
    expected -= 86400000;
  }
  return { days, current, longest, total: days.reduce((sum, day) => sum + day.count, 0), activeDays: days.filter(day => day.count > 0).length };
}

export async function fetchGithubJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json();
}
