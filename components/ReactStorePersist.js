import ReactStore from './ReactStore';

export const actions = {
  rehydrate: 'rehydrate',
  reset: 'reset',
};

const rehydratable = (defaultReducer, initialState) => (state, action) => {
  switch (action.type) {
    case actions.rehydrate:
      return {
        ...initialState,
        ...action.payload.state,
        rehydrated: true,
      };
    case actions.reset:
      return {
        ...initialState,
        rehydrated: state.rehydrated,
      };
    default:
      return defaultReducer(state, action);
  }
};

export default class ReactStorePersist extends ReactStore {
  constructor(id, snapshotSaver, snapshotGetter, reducer, initialState) {
    const persist = (state) => snapshotSaver(id, state);
    const rehydrate = async (state, dispatch) => {
      const storedState = await snapshotGetter(id);
      return dispatch({
        type: actions.rehydrate,
        payload: {
          state: storedState,
        },
      });
    };
    const rehydratableReducer = rehydratable(reducer, initialState);
    super(rehydratableReducer, initialState, rehydrate, persist);
  }
}
