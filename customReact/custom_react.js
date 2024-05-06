// STEP1: returns reference of <div> from index.html where our JS element will be injected
const mainContainer = document.querySelector('#root')
// <div id="root"></div> = index.html

// STEP2 - transpiled/compiled version - Tree (imperative, below) of our HTML element (<a> = declarative) that we wrote in JSX
// Ultimately, JSX -> JS, below, for all elements
const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  children: 'Click here to visit Google',
}

//STEP3 - Add (= render) reactElement (<a>) of VirtualDOM to mainContainer (<div>) of actual WebDOM
function customRender(reactElement, mainContainer) {
  /* APPROACH 1: manually, one-by-one
  // elementToRender = reactElement
  // elementWhereRendered = mainContainer

  // Standard 3-STEP process: Create, Process, Add (append) an element to DOM
  // 1: Create = whatever elements I wrote in my .jsx, all those are compiled
  // Now, each of those must be added to Virtual DOm thru the same 3-step proces
  const domElement = document.createElement(reactElement.type) // returns ref. of newly created <a>

  // 2(a): Process = Add regular text to <a>
  domElement.innerHTML = reactElement.children
  // 2(b): Add both attributes to the element
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)

  // 3: Append VirtualDOM's element -> main WebDOM of index.html
  mainContainer.appendChild(domElement)
  */
  // APPROACH 2: Looping thru it
  // Step 1:
  const domElement = document.createElement(reactElement.type)
  // step 2(a):
  domElement.innerHTML = reactElement.children
  // step 2(b):
  for (const prop in reactElement.props) {
    if (prop === 'children') continue // prop returns a string expression
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  // step 3: (append to mainContainer after domElement is all set)
  mainContainer.appendChild(domElement)
}

customRender(reactElement, mainContainer)
