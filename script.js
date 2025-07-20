const pdfs = [
  {
    title: "Sirat-ul-Jinan Jild 1",
    readUrl: "https://www.dropbox.com/scl/fi/2tq3o0br5s1v9nzdjoql5/sirat-ul-jinan-jild-1.pdf?rlkey=4wt5q1iw57g3ozgiowbjro0uj&st=kbfr4wpt&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/2tq3o0br5s1v9nzdjoql5/sirat-ul-jinan-jild-1.pdf?rlkey=4wt5q1iw57g3ozgiowbjro0uj&st=kbfr4wpt&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 2",
    readUrl: "https://www.dropbox.com/scl/fi/m22pqbnylhigcg7cjs3rh/sirat-ul-jinan-jild-2.pdf?rlkey=wbohtt7s8x7iqdp6sy6uc6nk0&st=rkll0obi&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/m22pqbnylhigcg7cjs3rh/sirat-ul-jinan-jild-2.pdf?rlkey=wbohtt7s8x7iqdp6sy6uc6nk0&st=rkll0obi&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 3",
    readUrl: "https://www.dropbox.com/scl/fi/3mfskpf6glv7yq6lu9nfv/sirat-ul-jinan-jild-3.pdf?rlkey=33jop03498mqtbryb26i48xk6&st=mzwc1lm3&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/3mfskpf6glv7yq6lu9nfv/sirat-ul-jinan-jild-3.pdf?rlkey=33jop03498mqtbryb26i48xk6&st=mzwc1lm3&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 4",
    readUrl: "https://www.dropbox.com/scl/fi/x0ct1udhznm3w21ubp020/sirat-ul-jinan-jild-4.pdf?rlkey=grj0juu2pf9kwk8x7418toqkb&st=uk1hhxsi&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/x0ct1udhznm3w21ubp020/sirat-ul-jinan-jild-4.pdf?rlkey=grj0juu2pf9kwk8x7418toqkb&st=uk1hhxsi&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 5",
    readUrl: "https://www.dropbox.com/scl/fi/6rosmbttqth9j8bu3moef/sirat-ul-jinan-jild-5.pdf?rlkey=489i3o7zqetsuu32phds70jkc&st=p4ncf45l&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/6rosmbttqth9j8bu3moef/sirat-ul-jinan-jild-5.pdf?rlkey=489i3o7zqetsuu32phds70jkc&st=p4ncf45l&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 6",
    readUrl: "https://www.dropbox.com/scl/fi/94st1w0uopmn0izfibfui/sirat-ul-jinan-jild-6.pdf?rlkey=jfj4wzgurin8w3482zdwhosue&st=g846kpft&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/94st1w0uopmn0izfibfui/sirat-ul-jinan-jild-6.pdf?rlkey=jfj4wzgurin8w3482zdwhosue&st=g846kpft&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 7",
    readUrl: "https://www.dropbox.com/scl/fi/sdavnuq22b9q27nf88eef/sirat-ul-jinan-jild-7.pdf?rlkey=2rxa244pnby3eda3pjxxyx0fw&st=7u7kgbh9&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/sdavnuq22b9q27nf88eef/sirat-ul-jinan-jild-7.pdf?rlkey=2rxa244pnby3eda3pjxxyx0fw&st=7u7kgbh9&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 8",
    readUrl: "https://www.dropbox.com/scl/fi/9nyvekppnnob7gbuqmgn9/sirat-ul-jinan-jild-8.pdf?rlkey=xvsm117wrb712qdyzov7psm8w&st=vc1ugiog&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/9nyvekppnnob7gbuqmgn9/sirat-ul-jinan-jild-8.pdf?rlkey=xvsm117wrb712qdyzov7psm8w&st=vc1ugiog&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 9",
    readUrl: "https://www.dropbox.com/scl/fi/vvbmcu0t6id78z90xm5vp/sirat-ul-jinan-jild-9.pdf?rlkey=1lsafqdo7qpx7i1kigmwtcd2s&st=r7oeeygx&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/vvbmcu0t6id78z90xm5vp/sirat-ul-jinan-jild-9.pdf?rlkey=1lsafqdo7qpx7i1kigmwtcd2s&st=r7oeeygx&dl=1"
  },
  {
    title: "Sirat-ul-Jinan Jild 10",
    readUrl: "https://www.dropbox.com/scl/fi/3u9yggr3ekkhnyh93w6dg/sirat-ul-jinan-jild-10.pdf?rlkey=rqeczfyybx3iiklfwf6r5p9rm&st=58rh2f8k&raw=1",
    downloadUrl: "https://www.dropbox.com/scl/fi/3u9yggr3ekkhnyh93w6dg/sirat-ul-jinan-jild-10.pdf?rlkey=rqeczfyybx3iiklfwf6r5p9rm&st=58rh2f8k&dl=1"
  }
];

const container = document.getElementById('pdf-container');

pdfs.forEach(pdf => {
  const card = document.createElement('div');
  card.className = 'card fade-in';
  card.innerHTML = `
    <h2>${pdf.title}</h2>
    <a href="${pdf.readUrl}" target="_blank">
      <button>📖 Read</button>
    </a>
    <a href="${pdf.downloadUrl}" target="_blank">
      <button>⬇️ Download</button>
    </a>
  `;
  container.appendChild(card);
});

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
