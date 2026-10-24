const searchInput = document.getElementById('eventSearch');
const clearButton = document.getElementById('clearSearch');
const resultsSummary = document.getElementById('resultsSummary');
const emptyState = document.getElementById('emptyState');
const eventCards = [...document.querySelectorAll('.event-card')];

function normalizeText(value) {
  return value
    .toLocaleLowerCase('tr-TR')
    .trim()
    .replace(/\s+/g, ' ');
}

function updateResults() {
  const query = normalizeText(searchInput.value);
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector('h3')?.textContent || '';
    const isMatch = !query || normalizeText(title).includes(query);
    card.hidden = !isMatch;

    if (isMatch) {
      visibleCount += 1;
    }
  });

  resultsSummary.textContent = `${visibleCount} etkinlik bulundu`;
  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener('input', updateResults);

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  updateResults();
  searchInput.focus();
});

updateResults();
