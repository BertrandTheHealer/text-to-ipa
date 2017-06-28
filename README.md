# text-to-ipa
Text to IPA converter in JavaScript

This comes with the core dictionary lookup and example frontend. This project assumes you will be running this translator in a browser of some sort. `text-to-ipa.js` contains the main logic for loading the `ipadict.txt` and looking up words, while `converter-form.js` and `example-translator.html` provide an interface.

Further reading on how this all takes place can be found inside the respective `.js` files where extensive documentation can be found.

For a more styled and better looking version instead of one that has no CSS you can test it on my website [here](http://surrsur.us/projects/ipa/english-to-ipa.html)

# How Does it Work?

This converter will simply look up each word in the CMU to IPA dictionary, and pop out the resulting phonetic text.

This was kind of a pain to get working, as most of the time was found looking for a good IPA dictionary which was ultimately found [here](http://people.umass.edu/nconstan/CMU-IPA/).

