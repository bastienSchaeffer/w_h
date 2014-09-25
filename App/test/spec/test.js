/* global describe, it */
(function () {
	'use strict';



	describe('DOM tests - Signup form', function() {
	  var formElem = document.forms[0];
	  var signupButton = document.getElementById('send_form');
	 
	  it('Form exists in the DOM', function() {
	    expect(formElem).to.not.equal(null);
	  });
	 
	  it('Input field should be set to type password', function() {
	    expect(formElem.password.getAttribute('type')).to.equal('password');
	  });
	 
	  it('Signup button has the right text', function() {
	    expect(signupButton.innerHTML).to.equal('Submit');
	  });
	});

})();
