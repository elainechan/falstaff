class ExpandingList extends HTMLUListElement {
	constructor() {
		super();
		window.onload = function() {
			var uls = document.querySelectorAll(':root ul');
			var lis = document.querySelectorAll(':root li');

			uls.forEach((item, i) => {
				if (i > 0) {
					uls[i].style.display = 'none';
				}
			});
			lis.forEach((item, i) => {
				var childText = lis[i].childNodes[0];
				var newSpan = document.createElement('span');
				newSpan.textContent = childText.textContent;
				childText.parentNode.insertBefore(newSpan, childText);
				childText.parentNode.removeChild(childText);
			});
			var spans = document.querySelectorAll(':root span');
			spans.forEach((item, i) => {
				if (spans[i].nextElementSibling) {
					spans[k].style.cursor = 'pointer';
					spans[k].parentNode.setAttribute('class', 'closed');
					spans[k].onclick = showUl;
				}
			});
		}
		function showUl(e) {
			var nextUl = e.target.nextElementSibling;
			if (nextUl.style.display === 'block') {
				nextUl.style.display === 'none';
				nextUl.parentNode.setAttribute('class', 'closed');
			} else {
				nextUl.style.display = 'block';
				nextUl.parentNode.setAttribute('class', 'open');
			}
		}
	}
}
customElements.define('expanding-list', ExpandingList, { extends: "ul" });