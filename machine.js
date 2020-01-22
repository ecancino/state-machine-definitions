export function createMachine(definition) {
  const machine = {
    value: definition.initialState,
    transition(event) {
      const { transitions, actions } = definition[machine.value];
      const { target, action } = transitions[event];

      if (!action) {
        return;
      }

      const { onExit } = actions;
      const { onEnter } = definition[target].actions;

      action();
      onExit();
      onEnter();

      machine.value = target;

      return machine.value;
    }
  };

  return machine;
}

export const createMachineDefinition = (initialState, states) => ({
  initialState,
  ...states
});

export const createActions = (onEnter = () => {}, onExit = () => {}) => ({
  onEnter,
  onExit
});

export const createStateDefinition = (transitions, onEnter, onExit) => ({
  actions: createActions(onEnter, onExit),
  transitions
});

export const createTransition = (target, action = () => {}) => ({
  target,
  action
});
