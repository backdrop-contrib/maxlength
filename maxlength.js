/* $Id$ */

function maxlength_limit(input, limit) {
  var remainingCnt = limit - input.value.length;
    
  if (remainingCnt < 0) {
    input.value = input.value.substr(0, limit);
        
    remainingCnt = 0;
  }
  
  $('#' + $(input).attr('id') + '-maxlength-counter span.maxlength-counter-remaining').html(remainingCnt);
}
