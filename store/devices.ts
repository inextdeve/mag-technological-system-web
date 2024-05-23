import { createSlice } from "@reduxjs/toolkit";

interface DevicesState {
  items: { [key: number]: Device };
  selectedId: number | null;
  selectedIds: number[] | [];
}

const initialState: DevicesState = {
  items: {},
  selectedId: null,
  selectedIds: [],
};

const { reducer, actions } = createSlice({
  name: "devices",
  initialState,
  reducers: {
    refresh(state, action) {
      state.items = {};
      action.payload.forEach((item: Device) => (state.items[item.id] = item));
    },
    update(state, action) {
      action.payload.forEach((item: Device) => (state.items[item.id] = item));
    },
    select(state, action) {
      state.selectedId = action.payload;
    },
    selectId(state, action) {
      state.selectedId = action.payload;
      state.selectedIds = state.selectedId ? [state.selectedId] : [];
    },
    selectIds(state, action) {
      state.selectedIds = action.payload;
      [state.selectedId] = state.selectedIds;
    },
    remove(state, action) {
      delete state.items[action.payload];
    },
  },
});

export { actions as devicesActions };
export { reducer as devicesReducer };
