console.log("Script loaded from GitHub repoooooooooooo");

(function(){
  let tries=0,max=20;

  const run=()=>{
    tries++;
    console.log("ARIA scan attempt:",tries);

    const links=document.querySelectorAll('a[href^="mailto:"]');
    console.log("Mailto links found:",links.length);

    if(!links.length){
      if(tries<max)return setTimeout(run,500);
      return console.warn("No mailto links detected");
    }

    links.forEach((l,i)=>{
      const h=l.getAttribute("href");
      const email=h.replace("mailto:","").trim();

      console.log("Processing mailto link",i+1,email);

      l.setAttribute("aria-label","Email: "+email);
    });

    console.log("ARIA labels applied to mailto links");
  };

  run();
})();

   console.log("ARIA labels applied to mailto links");