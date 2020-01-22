// Import stylesheets
import "./style.css";

// Write Javascript code!
const updateDOM = message =>
  (document.querySelector("#app").innerHTML = `<h1>${message}</h1>`);

updateDOM("JS Starter");

import {
  createStateDefinition,
  createTransition,
  createMachineDefinition,
  createActions,
  createMachine
} from "./machine";

const off = createStateDefinition(
  {
    switch: createTransition("on", function() {
      console.log('transition action for "switch" in "off" state');
    })
  },
  () => console.log("off: onEnter"),
  () => console.log("off: onExit")
);

const on = createStateDefinition(
  {
    switch: createTransition("off", function() {
      console.log('transition action for "switch" in "on" state');
    })
  },
  () => console.log("on: onEnter"),
  () => console.log("on: onExit")
);

const definition = createMachineDefinition("off", { off, on });

const machine = createMachine(definition);

let state = machine.value;
updateDOM(`current state: ${state}`);

// state = machine.transition(state, "switch");
state = machine.transition("switch");
updateDOM(`current state: ${state}`);

state = machine.transition("switch");
updateDOM(`current state: ${state}`);
