document.addEventListener("DOMContentLoaded", () => {
  const contentPlaceholder = document.getElementById("content-placeholder");

  // Mapping of page names to their HTML files in the content folder
  const pageMap = {
    Home: "content/home.html",
    Quickstart: "content/quickstart.html",
    Showcase: "content/showcase.html",
    "MNIST Tutorial": "content/mnist_tutorial.html",
    "API Reference": "content/api_reference.html",
    Tensor: "content/tensor.html",
    Properties: "content/properties.html",
    Creation: "content/creation.html",
    Movement: "content/movement.html",
    Elementwise: "content/elementwise.html",
    "Complex Ops": "content/complex_ops.html",
    dtypes: "content/dtypes.html",
    "nn (Neural Networks)": "content/nn.html",
    "Environment Variables": "content/environment_variables.html",
    Runtime: "content/runtime.html",
    Developer: "content/developer.html",
    Intro: "content/intro.html",
    "Function (autodiff)": "content/function_autodiff.html",
    UOp: "content/uop.html",
    "Runtime Overview": "content/runtime_overview.html",
    HCQ: "content/hcq.html",
    tinybox: "content/tinybox.html",
  };

  // Function to load content by page name
  function loadContent(pageName) {
    const url = pageMap[pageName];
    if (!url) {
      contentPlaceholder.innerHTML = `<main><h1>404</h1><p>Content not found.</p></main>`;
      return;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.text();
      })
      .then((html) => {
        contentPlaceholder.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        contentPlaceholder.innerHTML = `<main><h1>Error</h1><p>Unable to load content.</p></main>`;
      });
  }

  // Event listener for nav links
  const navLinks = document.querySelectorAll("nav a[data-page]");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pageName = e.target.getAttribute("data-page");
      loadContent(pageName);
    });
  });

  // Optional: Load a default page on initial load
  loadContent("Home");
});
