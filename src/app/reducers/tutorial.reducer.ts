import {Action, createReducer, on, State} from '@ngrx/store'
import {Tutorial} from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
}

const scoreboardReducer = createReducer(
  initialState,
  on(TutorialActions.ADD_TUTORIAL, state => ({ ...state, name: state.name, url: state.url })),
);

export function reducer(state: Tutorial | undefined, action: Action) {

  return scoreboardReducer(state, action);
}
