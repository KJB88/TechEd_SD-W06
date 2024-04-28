<div align="center">
  <h1>:mortar_board: Tech Educators' SWD Bootcamp :mortar_board:<br/>:mortar_board: Week 06 Assessment :mortar_board:</h1>
    <p>
      <a href="http://www.LinkedIn.com/in/kevin-barr1988">LinkedIn</a> |
      <a href="http://kjb88.github.io">Website</a> |
      <a href="mailto:kevinbarr.business@gmail.com">Email</a> |
      <a href="https://github.com/KJB88">Github</a>
    </p>
  <p>
    Repository for coursework for TechEd Software Development Bootcamp - Week 06
  </p>
</div>
<section>
  <h2>📋 Project Outline</h2>
  <p>
    It's time for some more cookies. Re-create the Cookie Clicker game from previous weeks as a React application. It's useful to build the same application in the new paradigm so you can draw direct comparisons and see how the new approach is different from the old one.
  </p>

  <p>
    React requires a slightly different way of thinking than plain HTML and JavaScript, but it's the same technologies under the hood. The main differences are - surprise, surprise - in the way what is being displayed by your components reacts to changes in the data, rather than manually updating the DOM ourselves.
  </p>

  <p>
    <b>All requirements and stretch goals are complete! No specific difficulties so far.</b>
  </p>
</section>
<section>
  <h2>🙍 User Stories</h2>
  <h3>As a User, I would like to...</h3>
  <ul>
    <li>...be able to click the cookie and increment the counter.</li>
    <li>...see the counter automatically increment using an interval timer.</li>
    <li>...purchase items i can afford in the shop and increase the number of cookies every time the interval passes.</li>
  </ul>
</section>
<section>
<h2>👷 Requirements</h2>
  <ul>
    <li>Create state variables to store the current number of cookies and the cookies PerSecond value (useState)</li>
    <li>Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.</li>
    <li>Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.</li>
    <li>Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.</li>
  </ul>
</section>
<section>
<h2>🥅 Stretch Goals</h2>
  <ul>
    <li>Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes.</li>
    <li>Stylish UI.</li>
  </ul>
</section>
<section>
  <h2>📁 Project Structure</h2>
  <h3>JSX</h3>
  <p>All JSX components are located inside the ./src/jsx folder. Some are fully modular, others are specialized for the project. The header consists of: header.jsx, headingTitle.jsx, nav.jsx and anchorLink.jsx. The main body consists of: bodyMain.jsx, clickableImage.jsx, gamePanel.jsx, statText.jsx, storeItem.jsx and storePanel.jsx. The footer consists of: footer.jsx.</p>
  <h3>JS</h3>
  <p>All JS files are located inside the ./src/js folder. These files are mostly supporting data and/or behaviours that have no relationship to the DOM.</p>
  <h3>CSS</h3>
  <p>All CSS files are located inside the ./src/css folder. They are named after their equivalent .jsx.</p>
</section>
<section>
  <h2>✔️ Implementation (of Requirements)</h2>
    <h3>Why can't I hold all these Tims?</h3>
    <p>You collect passive Tims and gain Tims on clicking! All with the power of React™.</p>
    <h3>Exploring the Map</h3>
    <p>I took my items and mapped them onto some elements. I'm not sure why I put on my hiking boots and packed a lunch for this.</p>
    <h3>Capitalism</h3>
    <p>You click to provide me with your Tims and in return, I provide you with an item. It's good for the economy.</p>
</section>
<section>
  <h2>➕ Implementation (of Stretch Goals)</h2>
  <h3>Persistence is Key</h3>
  <p>
So you continue to enjoy your addiction, your data saves and loads to/from local storage.
  </p>
    <h3>The Peak of Style</h3>
  <p>I copy and pasted loads of pictures of Tim. Don't judge me.</p>
</section>
<section>
  <h2>🏆 Honorary Mentions</h2>
  <h3>CSS Animation</h3>
  <p>Give Tim a smack and he wibbles. You can also watch him scroll across the screen gracefully like some kind of bearded, beanie-wearing swan-man.</p>
</section>
