export function createMachine(initialState, states) {
  const definition = createMachineDefinition(initialState, states);
  let value = initialState;
  return {
    getState() {
      return value;
    },
    transition(event) {
      const { transitions, actions } = definition[value];
      const { target, action } = transitions[event];

      if (!action) {
        return;
      }

      const { onExit } = actions;
      const { onEnter } = definition[target].actions;

      action();
      onExit();
      onEnter();

      value = target;

      return target;
    }
  };
}

export const createMachineDefinition = (initialState, states) => ({
  initialState,
  ...states
});

export const createActions = (onEnter = () => {}, onExit = () => {}) => ({
  onEnter,
  onExit
});

export const createState = (transitions, onEnter, onExit) => ({
  actions: createActions(onEnter, onExit),
  transitions
});

export const createTransition = (target, action = () => {}) => ({
  target,
  action
});
