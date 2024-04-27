
window.addEventListener('DOMContentLoaded', (event) => {
  const allowedText = "This is an official dobivm website and is allowed.";
  const localText = "This is a local file and doesn't affect anything.";
  const currentUrl = window.location.href;
  const isDobivm = currentUrl.includes('http://dobivm.rf.gd') || currentUrl.includes('https://dobivm.rf.gd');
  const isDobi = currentUrl.includes('http://dobi.rf.gd') || currentUrl.includes('https://dobi.rf.gd');

  if (isDobivm || isDobi) {
    const paragraph = document.createElement('p');
    paragraph.textContent = allowedText;
    document.body.appendChild(paragraph);
  } else {
    const paragraph = document.createElement('p');
    paragraph.textContent = localText;
    document.body.appendChild(paragraph);
  }
});
