const libraryDiv = document.getElementById("library");

const totalBooks = 10;

for (let i = 1; i <= totalBooks; i++) {
  const pdfName = `sirat-ul-jinan-jild-${i}.pdf`;
  const pdfPath = `pdfs/${pdfName}`;

  const card = document.createElement("div");
  card.className = "book-card";

  card.innerHTML = `
    <h3>Jild ${i}</h3>
    <a class="view-btn" href="${pdfPath}" target="_blank">📖 Read</a>
    <a class="download-btn" href="${pdfPath}" download>⬇️ Download</a>
  `;

  libraryDiv.appendChild(card);
}
