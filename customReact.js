function customRender(sofiReact, container) {
  const domElement = document.createElement(sofiReact.type);
  domElement.innerHTML = sofiReact.children;
  for (const prop in sofiReact.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, sofiReact.props[prop]);
  }
  container.appendCHild(domelement)
}
const sofiReact = {
  type: "a",
  props: {
    href: "https://links.itssofi.dev/",
    target: "_blank",
  },
  children: "Connect with me",
};

const mainContainer = document.getElementById("root");

customRender(sofiReact, mainContainer);
