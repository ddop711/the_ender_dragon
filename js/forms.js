// Første form
const webform = document.querySelector("#webform");
const summaryArticle = document.querySelector("#form-summary article");

// Skjul browserens standard fejl-popup
function cancelPopupWebform(event) {
  event.preventDefault();
  const firstInvalid = webform.querySelector(":user-invalid");
  if (firstInvalid) firstInvalid.focus();
}

// Opsamling af data
function handleWebformSubmit(event) {
  event.preventDefault();

  const data = new FormData(webform);

  const dimension = data.get("dimension") || "Ikke valgt";
  const sword = data.get("sword") ? "Ja" : "Nej";
  const bow = data.get("bow") ? "Ja" : "Nej";
  const apple = data.get("apple") ? "Ja" : "Nej";
  const bange = data.get("bange") || "0";

  summaryArticle.innerHTML = `
    <p><strong>Dimension:</strong> ${dimension}</p>
    <p><strong>Sværd:</strong> ${sword}</p>
    <p><strong>Bue:</strong> ${bow}</p>
    <p><strong>Æble:</strong> ${apple}</p>
    <p><strong>Bange-niveau:</strong> ${bange}/10</p>
  `;

  webform.reset();
}

webform.addEventListener("invalid", cancelPopupWebform, true);
webform.addEventListener("submit", handleWebformSubmit);
