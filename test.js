console.log("Script loaded from GitHub repo");
// Email and phone number labels
  document.addEventListener('DOMContentLoaded', () => {
    const handleContactLinks = () => {
      const links = document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]');
  
      links.forEach(link => {
        const href = link.getAttribute('href');
        let linkText = link.textContent.trim();
  
        if (href.startsWith('mailto:')) {
          link.setAttribute('aria-label', `Email Address: ${linkText}`);
        } else if (href.startsWith('tel:')) {
          // remove tel
          linkText = linkText.replace(/^(Tel:|Phone:)\s*/i, '');
          link.setAttribute('aria-label', `Phone number: ${linkText}`);
        }
      });
    };
  
    handleContactLinks();
    console.log("warnings added")
  });