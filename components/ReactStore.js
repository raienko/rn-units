import React, {useReducer, useContext, useEffect} from 'react';

export default class ReactStore {
  Provider = () => null;
  Consumer = () => null;
  useStore = () => {};
  state = null;
  dispatch = () => {};

  constructor(reducer, initialState, onDidMount, onStateChange) {
    const Context = React.createContext();

    const Provider = (params) => {
      const [state, dispatch] = useReducer(reducer, initialState);
      this.state = state;
      this.dispatch = (action) => dispatch(action);

      useEffect(() => {
        if (onDidMount) {
          onDidMount(state, dispatch);
        }
      }, []);

      useEffect(() => {
        if (onDidMount) {
          onStateChange(state, dispatch);
        }
      }, [state]);

      return <Context.Provider {...params} value={{state, dispatch}} />;
    };

    this.Context = Context;
    this.Provider = Provider;
    this.Consumer = Context.Consumer;
    this.useStore = () => useContext(Context);
  }
}
