// Paste the code to the console to bypass the copy protection. If you cannot inspect elements with mouse then type shortcut ctrl+shift+i. That will open the dev tools.

// If console dosen't allow pasting the code then type this to the console
// =======>  allow pasting

(function () {
    // Step 1: Unblock event listeners
    const events = [
      'copy', 'cut', 'contextmenu', 'selectstart',
      'mousedown', 'mouseup', 'keydown', 'keypress'
    ];
    events.forEach(event => {
      document.addEventListener(event, e => e.stopPropagation(), true);
    });
  
    // Step 2: Force-enable CSS text selection
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`
      * {
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
      }
    `));
    document.head.appendChild(style);
  
    // Step 3: Remove inline event handlers
    const removeInlineHandlers = () => {
      const attrs = [
        'oncopy', 'oncut', 'oncontextmenu', 'onselectstart',
        'onmousedown', 'onmouseup', 'onkeydown', 'onkeypress'
      ];
      const elements = document.querySelectorAll('*');
      for (let el of elements) {
        for (let attr of attrs) {
          if (el.hasAttribute(attr)) el.removeAttribute(attr);
        }
      }
    };
  
    // Initial cleanup
    removeInlineHandlers();
  
    // Step 4: Observe new elements added to the page
    const observer = new MutationObserver(removeInlineHandlers);
    observer.observe(document.body, { childList: true, subtree: true });
  
    console.log("Copy protection bypassed successfully.");
  })();
  

