console.log("Script loaded from GitHub repo");

(function () {
  console.log("Accessibility script started");

  let tries = 0;
  const maxTries = 20;

  const run = () => {
    tries++;
    console.log("Scan attempt:", tries);

    const links = document.querySelectorAll(
      'a[href^="mailto:"], a[href^="tel:"]'
    );

    console.log("Links found:", links.length);

    if (!links.length) {
      if (tries < maxTries) {
        setTimeout(run, 500);
      } else {
        console.warn("No mailto/tel links found after retries");
      }
      return;
    }

    links.forEach((link, i) => {
      const href = link.getAttribute("href");
      let text = link.textContent.trim();

      console.log(`Processing link ${i + 1}:`, href, text);

      if (href.startsWith("mailto:")) {
        link.setAttribute("aria-label", "Email address: " + text);
      } else if (href.startsWith("tel:")) {
        text = text.replace(/^(Tel:|Phone:)\s*/i, "");
        link.setAttribute("aria-label", "Phone number: " + text);
      }
    });

    console.log("ARIA labels successfully applied");
  };

  run();
})();
