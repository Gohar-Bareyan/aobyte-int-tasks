class DomElement {
  constructor(type, attrs, children) {
    this.type = type;
    this.attrs = attrs;
    this.children = children;
  }

  createDOMElement() {
    const el = document.createElement(this.type);

    if (this.attrs) {
      for (const [key, value] of Object.entries(this.attrs)) {
        el.setAttribute(key, value);
      }
    }

    if (this.children) {
      if (Array.isArray(this.children)) {
        this.children.forEach(child => {
          if (child instanceof DomElement) {
            el.appendChild(child.draw());
          } else if (typeof child === "string") {
            el.textContent = child;
          }
        });
      } else if (this.children instanceof DomElement) {
        el.appendChild(this.children.draw());
      } else if (typeof this.children === "string") {
        el.textContent = this.children;
      }
    }

    return el;
  }

  draw() {
    const el = this.createDOMElement();
    return el;
  }
}

class DivElement extends DomElement {
  constructor(attrs, children) {
    super("div", attrs, children);
  }
}

class SpanElement extends DomElement {
  constructor(attrs, children) {
    super("span", attrs, children);
  }
}

class UlElement extends DomElement {
  constructor(attrs, children) {
    super("ul", attrs, children);
  }
}

class LiElement extends DomElement {
  constructor(attrs, children) {
    super("li", attrs, children);
  }
}

class FormElement extends DomElement {
  constructor(attrs, children) {
    super("form", attrs, children);
  }
}

class LabelElement extends DomElement {
  constructor(attrs, children) {
    super("label", attrs, children);
  }
}

class BrElement extends DomElement {
  constructor(attrs, children) {
    super("br", attrs, children);
  }

  draw() {
    return this.createDOMElement();
  }
}

class InputElement extends DomElement {
  constructor(attrs) {
    super("input", attrs, null);
  }

  draw() {
    return this.createDOMElement();
  }
}

function el(type, attrs, children) {
  return new DomElement(type, attrs, children);
}

const tree1 =
  el("div", { "class": "some_classname", "id": "some_id" },
    el("span", {}, 'hello')
  );

document.getElementById("root").appendChild(tree1.draw());

const tree2 =
  el("div", {},
    el("ul", {}, [
      el("li", {}, "Item 1"),
      el("li", {}, "Item 2"),
      el("li", {}, "Item 3")
    ])
  );

document.getElementById("root").appendChild(tree2.draw());

const tree3 =
  el("form", { action: '/some_action' }, [
    el("label", { for: 'name' }, "First name:"),
    el("br", {}, null),
    el("input", { type: 'text', id: 'name', name: 'name', value: "My name" }, null),
    el("br", {}, null),
    el("label", { for: 'last_name' }, "Last name:"),
    el("br", {}, null),
    el("input", { type: 'text', id: 'last_name', name: 'last_name', value: "My second name" }, null),
    el("br", {}, null),
    el("input", { type: 'submit', value: "Submit" }, null),
  ]);

document.getElementById("root").appendChild(tree3.draw());

// FOR SUBMIT

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = document.getElementById("name");
//   const lastName = document.getElementById("last_name");

//   console.log(`${name.value} ${lastName.value}`);
// });