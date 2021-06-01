import { Injectable } from '@angular/core'
import {Action, createAction, props} from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'

export const ADD_TUTORIAL       = createAction('[TUTORIAL] Add', props<{ name: string; url: string }>());
export const REMOVE_TUTORIAL    = createAction('[TUTORIAL] Remove');

// export class AddTutorial implements Action {
//   readonly type = ADD_TUTORIAL
//
//   constructor(public payload: Tutorial) {}
// }
//
// export class RemoveTutorial implements Action {
//   readonly type = REMOVE_TUTORIAL
//
//   constructor(public payload: number) {}
// }

// export type Actions = AddTutorial | RemoveTutorial
