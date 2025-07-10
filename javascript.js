//get elements
const buttons = document.querySelectorAll("button");
const container = document.querySelector(".text");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    let id = e.target.id;
    showTab(id);
  });
}

function showTab(id) {
    container.innerHTML = "";
    const p = document.createElement("p");
    switch (id) {
      case "flexbox":
        p.innerText =
          "CSS Flexible Box Layout, commonly known as Flexbox,[2] is a CSS web layout model.[4] It is in the W3C's candidate recommendation (CR) stage.[2] The flex layout allows responsive elements within a container to be automatically arranged depending on viewport (device screen) size.";
        break;
      case "grid":
        p.innerText =
          "In Cascading Style Sheets, CSS grid layout or CSS grid creates complex responsive web design grid layouts more easily and consistently across browsers. Historically, there have been other methods for controlling web page layout methods, such as tables, floats, and more recently, CSS Flexible Box Layout.";
        break;
      case "responsive":
        p.innerText =
          "Responsive design is a web design approach that creates websites that automatically adjust their layout and appearance to fit different screen sizes and devices, ensuring optimal viewing and usability across all platforms.";
        break;
      case "layout":
        p.innerText =
          "In simple terms, layout refers to the way something is arranged or organized. It's the visual arrangement of elements within a space, whether it's the placement of furniture in a room, the structure of a website, or the design of a page in a document. ";
        break;
    }
    container.appendChild(p);
}
