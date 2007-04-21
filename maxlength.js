/* $Id$ */

function maxlength_limit(textarea, limit) {
  var remainingTag = document.getElementById('maxlength-counter-remaining');
  var remainingCnt = limit - textarea.value.length;
    
  if (remainingCnt < 0) {
    textarea.value = textarea.value.substr(0, limit);
        
    remainingCnt = 0;
  }
    
  remainingTag.innerHTML = remainingCnt;
}
