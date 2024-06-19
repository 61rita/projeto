document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});

// Active links and pages styles
var anchor = document.querySelector('.nav-links').querySelectorAll('a');
for (var i = 0; i < anchor.length; i++) {
  if (window.location.href === anchor[i].href) {
    anchor[i].classList.add("active");
  }
}

// Details Animation

document.querySelectorAll('summary')
  .forEach(element => element.addEventListener('click', (event) => {
    const detailsElement = event.target.parentElement;
    const contentElement = event.target.nextElementSibling;

    // Chrome sometimes has a hiccup and gets stuck.
    if (contentElement.classList.contains('animation')) {
      // So we make sure to remove those classes manually,
      contentElement.classList.remove('animation', 'collapsing');
      // ... enforce a reflow so that collapsing may be animated again,
      void element.offsetWidth;
      // ... and fallback to the default behaviour this time.
      return;
    }

    const onAnimationEnd = cb => contentElement.addEventListener(
      "animationend", cb, {once: true}
    );

    // request an animation frame to force Safari 16 to actually perform the animation
    requestAnimationFrame(() => contentElement.classList.add('animation'));
    onAnimationEnd(() => contentElement.classList.remove('animation'));

    const isDetailsOpen = detailsElement.getAttribute('open') !== null;
    if (isDetailsOpen) {
      // prevent default collapsing and delay it until the animation has completed
      event.preventDefault();
      contentElement.classList.add('collapsing');
      onAnimationEnd(() => {
        detailsElement.removeAttribute('open');
        contentElement.classList.remove('collapsing');
      });
    }
  }));

  // H1 Animation

 consoleText(['Hello.', 'I am Rita.', 'A UX/UI Designer.'], 'text',['black','black','black']);

 function consoleText(words, id, colors) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id)
   target.setAttribute('style', 'color:' + colors[0])
   window.setInterval(function() {
 
     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedColor = colors.shift();
         colors.push(usedColor);
         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'color:' + colors[0])
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 1 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       target.innerHTML = words[0].substring(0, letterCount)
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;
 
     } else {
       con.className = 'console-underscore'
 
       visible = true;
     }
   }, 400)
 }