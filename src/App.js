import React, { useState } from "react";

import { marked } from "marked";

function App() {
  const [inputText, setInput] = useState(`Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

![tommy wiseau](https://pyxis.nymag.com/v1/imgs/b25/753/ef0495a30eac613c74c5db75f6036ba7fc-14-the-room-tommy-wiseau.rsquare.w700.jpg)

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~.

Shopping list:

  * bananas
  * carrots
  * bokoya

Numbered list:

  1. pasta
  2. sempa
  3. julian

> Hi Mark

The rain---not the reign---snow dust.

\`\`\`
I'm a code block!
\`\`\`

 *[ffc](https://freecodecamp.com)*
`);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const createMarkup = () => {
    var options = { sanitize: true };
    return { __html: marked(inputText, options) };
  };

  return (
    <div id="container">
      <textarea
        id="editor"
        autofocus
        rows="5"
        cols="50"
        onChange={handleChange}
      >
        {inputText}
      </textarea>

      <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

export default App;
