## CSS

* `Q:` Is it okay to use a combination of inline styling and an external stylesheet or is that messy?
* `A:` Ideally you want everything to be external.

 * `Q:` When linking the html and CSS pages, I've noticed that some places online say to use href, rel and type attributes (are they called attributes?) but other places say to just use href and rel (omitting type). Does this matter?
 * `A:` Omitting `type` is fine. Originally when HTML was designed the inventors imagined multiple types. Alas this did not happen.
 See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-type