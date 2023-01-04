var box = document.getElementsByClassName('typing-text')[0];
  var str = box.innerText;
  var i = 0;
  box.innerText = '';
  var typing = setInterval(function() {
    box.innerText += str[i++];
    i >= str.length && clearInterval(typing);
  }, 200);