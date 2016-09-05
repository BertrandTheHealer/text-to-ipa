'use strict';

// UI Wrapper for TextToIPA
var TTIForm = {
    // Error message if a word isn't in the IPA dictionary
    undefMsg: "Some words you have entered cannot be found in the IPA dictionary.",
    // Error/Warning message if a word has multiple pronunciations
	multiMsg: "Some words you have entered have multiple pronunciations in english. These differences are seperated with 'OR'",
    // Currently displayed error messages
    currErrMsg: "",
	currMulMsg: "",
    // Reset the currently displayed error messages
	resetErrMsgs: function () {
		this.currErrMsg = "";
		this.currMulMsg = "";
	},
    // Update the DOM to show the current error messages
	updateMsgs: function () {
		document.getElementById("ipa-err-undef").innerHTML = "<p>" + this.currErrMsg + "</p>";
		document.getElementById("ipa-warn-multi").innerHTML = "<p>" + this.currMulMsg + "</p>";
	},
    // Output the converted IPA text to the DOM
	updateTextarea: function (IPAText) {
		document.getElementById("ipa-out").value = IPAText
	},
	//TODO: Strip and reinsert punctuation
    // Convert english from a form and output the IPA from TextToIPA to another form
	convert: function () {
        // Reset the error messages
		this.resetErrMsgs();
        // Resulting array of IPA text words
		var IPAText = [];
        // Get the input from a form
		var englishText = document.getElementById("ipa-in").value.split(/\s+/g);

		for ( var i = 0; i < englishText.length; i++ ) {
            // Strip punctuation and look up word
			var IPAWordArr = TextToIPA.lookup(englishText[i].toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
            // Does the word exist?
            if ( typeof IPAWordArr[0] == "undefined" ) {
				this.currErrMsg = this.undefMsg
                // Push plain text instead of IPA
				IPAText.push(englishText[i]);
            // If it does, see how many pronunciations there are (TextToIPA knows this, and sends all pronunciations regardless)
            } else if ( IPAWordArr[0] == "multi" ) {
                this.currMulMsg = this.multiMsg
                IPAText.push(IPAWordArr[1]);
            // Otherwise just push the converted word
			} else {
				IPAText.push(IPAWordArr[1]);
			}
		}
        // Turn the array to a sentence, and update the DOM
		IPAText = IPAText.join(" ");
		this.updateTextarea(IPAText);
		this.updateMsgs();
	}
}
