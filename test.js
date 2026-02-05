console.log("Script loaded from GitHub repo");
// Email and phone number labels
  (function(){
  const run=()=>{
    const links=document.querySelectorAll('a[href^="mailto:"],a[href^="tel:"]');
    if(!links.length)return setTimeout(run,500);

    links.forEach(l=>{
      let h=l.getAttribute("href"),t=l.textContent.trim();
      h.startsWith("mailto:")
        ?l.setAttribute("aria-label","Email address: "+t)
        :(t=t.replace(/^(Tel:|Phone:)\s*/i,""),
          l.setAttribute("aria-label","Phone number: "+t))
    });

    console.log("ARIA labels applied");
  };
  run();
})();
