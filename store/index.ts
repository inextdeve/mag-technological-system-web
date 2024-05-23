import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { errorsReducer as errors } from "./errors";
import { sessionReducer as session } from "./session";
import { devicesReducer as devices } from "./devices";
import { eventsReducer as events } from "./events";
import { geofencesReducer as geofences } from "./geofences";
import { groupsReducer as groups } from "./groups";
import { driversReducer as drivers } from "./drivers";
import { maintenancesReducer as maintenances } from "./maintenances";
import { calendarsReducer as calendars } from "./calendars";
import { reportsReducer as reports } from "./reports";
import throttleMiddleware from "./throttleMiddleware";

const reducer = combineReducers({
  errors,
  session,
  devices,
  events,
  geofences,
  groups,
  drivers,
  maintenances,
  calendars,
  reports,
});

export { errorsActions } from "./errors";
export { sessionActions } from "./session";
export { devicesActions } from "./devices";
export { eventsActions } from "./events";
export { geofencesActions } from "./geofences";
export { groupsActions } from "./groups";
export { driversActions } from "./drivers";
export { maintenancesActions } from "./maintenances";
export { calendarsActions } from "./calendars";
export { reportsActions } from "./reports";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(throttleMiddleware),
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export default store;
