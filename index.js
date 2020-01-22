// Import stylesheets
import "./style.css";

import { updateDOM } from "./helpers";
import { createState, createTransition, createMachine } from "./machine";

updateDOM("JS Starter");

const machine = createMachine("off", {
  off: createState({
    switch: createTransition("on", () => {
      console.log('transition action for "switch" in "off" state');
    })
  }),
  on: createState({
    switch: createTransition("off", () => {
      console.log('transition action for "switch" in "on" state');
    })
  })
});

let state = machine.getState();
console.log(state);
updateDOM(`current state: ${state}`);

state = machine.transition("switch");
console.log(state);
updateDOM(`current state: ${state}`);

state = machine.transition("switch");
console.log(state);
updateDOM(`current state: ${state}`);

state = machine.transition("switch");
console.log(state);
updateDOM(`current state: ${state}`);
