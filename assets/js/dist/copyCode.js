$(document).ready(function() {
const codeBlocks = document.querySelectorAll('.rouge-code');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
	  const code = codeBlocks[index].innerText;

	  copyCodeButton.addEventListener('click', () => {
		      window.navigator.clipboard.writeText(code);
		      copyCodeButton.classList.add('copied');

		      setTimeout(() => {
			            copyCodeButton.classList.remove('copied');
			          }, 2000);
		    });
});
});

