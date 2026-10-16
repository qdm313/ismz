(() => {
  const characters = Array.isArray(window.CHARACTERS) ? window.CHARACTERS : [];
  const grid = document.getElementById("character-grid");
  const detailName = document.getElementById("detail-name");
  const detailDescription = document.getElementById("detail-description");
  const detailEmptyNote = document.getElementById("detail-empty-note");
  const detailSection = document.getElementById("character-detail");

  if (!grid || !detailName || !detailDescription) return;

  // 이미지가 아직 레퍼지토리에 없더라도, 깨진 이미지 아이콘 대신 자리표시자를 보여 줍니다.
  document.querySelectorAll(".optional-image").forEach((img) => {
    const placeholderSelector = img.dataset.placeholder;
    const placeholder = placeholderSelector
      ? document.querySelector(placeholderSelector)
      : null;

    const hidePlaceholder = () => {
      if (placeholder) placeholder.hidden = true;
      img.classList.add("is-loaded");
    };
    const showPlaceholder = () => {
      img.hidden = true;
      if (placeholder) placeholder.hidden = false;
    };

    img.addEventListener("load", hidePlaceholder);
    img.addEventListener("error", showPlaceholder);

    if (img.complete && img.naturalWidth > 0) hidePlaceholder();
    else if (img.complete && img.naturalWidth === 0) showPlaceholder();
  });

  function makeCard(character, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "character-card";
    button.dataset.characterId = character.id;
    button.setAttribute("aria-label", `${character.name} 소개 보기`);
    button.setAttribute("aria-pressed", "false");

    const art = document.createElement("span");
    art.className = "card-art";

    const placeholder = document.createElement("span");
    placeholder.className = "card-placeholder";
    placeholder.innerHTML = `<span class="placeholder-number">0${index + 1}</span><span class="placeholder-caption">인물 이미지</span><span class="placeholder-person">${character.name}</span>`;

    const img = document.createElement("img");
    img.className = "card-image";
    img.src = character.image;
    img.alt = ""; // 이미지 안에 이름표가 포함된 카드 이미지입니다.
    img.loading = "lazy";
    img.addEventListener("load", () => {
      art.classList.add("has-image");
      placeholder.hidden = true;
    });
    img.addEventListener("error", () => {
      img.hidden = true;
      art.classList.remove("has-image");
      placeholder.hidden = false;
    });

    art.append(placeholder, img);
    button.append(art);
    button.addEventListener("click", () => selectCharacter(character, button));
    return button;
  }

  function selectCharacter(character, selectedButton) {
    grid.querySelectorAll(".character-card").forEach((card) => {
      const selected = card === selectedButton;
      card.classList.toggle("is-selected", selected);
      card.setAttribute("aria-pressed", String(selected));
    });

    detailName.textContent = character.name;
    detailDescription.textContent = character.description;
    detailSection.classList.add("has-selection");
    if (detailEmptyNote) detailEmptyNote.hidden = true;

    // 작은 화면에서 카드를 누른 뒤 상세 소개가 바로 이어지도록 합니다.
    if (window.matchMedia("(max-width: 640px)").matches) {
      detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  characters.forEach((character, index) => {
    grid.appendChild(makeCard(character, index));
  });
})();
