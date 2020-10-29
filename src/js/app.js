document.addEventListener('DOMContentLoaded', function(){

	/* sticky pay button */
	var pay = document.getElementsByClassName('pay')[0];

	function stickyPay() {
		var payHeight = pay.offsetHeight;
		var payCoords = payPosition.getBoundingClientRect();
		var payTop = payCoords.top + pageYOffset;
		var payContainer = window.innerHeight - payHeight + pageYOffset;

		if (payContainer > payTop) {
			pay.classList.add('pay_bottom');
		}
		else if (payContainer <= payTop) {
			pay.classList.remove('pay_bottom');
		}
	}

	if(typeof(pay) != 'undefined' && pay != null){
		// var bottom = document.querySelector('.bottom');
		// bottom.classList.add('bottom_pay');

		var payPoint = document.createElement('div');
		payPoint.className = "point point_pay";
		pay.parentNode.insertBefore(payPoint, pay);
		var payPosition = document.querySelector('.point_pay');

		stickyPay;
		window.addEventListener('scroll', stickyPay);
		window.addEventListener('resize', stickyPay);
	}

	/* sticky header */
	var header = document.querySelector('.header');

	function stickyHeader() {
		var wrapperCoords = wrapper.getBoundingClientRect();
		var wrapperTop = wrapperCoords.top + pageYOffset;
		var wrapperIndent = wrapperTop + 30;

		if (window.scrollY >= wrapperIndent) {
			header.classList.add('is-sticky');
		} else if (window.scrollY < wrapperTop) {
			header.classList.remove('is-sticky');
		}
	}

	if(typeof(header) != 'undefined' && header != null){
		var headerPoint = document.createElement('div');
		headerPoint.className = "point point_header";
		header.parentNode.insertBefore(headerPoint, header);
		var wrapper = document.querySelector('.point_header');

		stickyHeader;
		window.addEventListener('scroll', stickyHeader);
		window.addEventListener('resize', stickyHeader);
	}

});