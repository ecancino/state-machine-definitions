const $app = document.querySelector("#app");

export const updateDOM = message => ($app.innerHTML = `<h1>${message}</h1>`);
