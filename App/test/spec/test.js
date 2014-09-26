/* global describe, it */
(function () {
	'use strict';



	describe('DOM tests - Signup form', function() {
		var formElem = document.forms[0];

		it('Form exists in the DOM', function() {
			expect(formElem).to.not.equal(null);
		});

	});

})();
