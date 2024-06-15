import { LoginState } from "./../types/login.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LoginState = {
  user_contact_email: "",
  user_contact_mobile: 0,
  user_id: "",
  user_name: "",
  user_password: "",
  user_profile_picture_url: "",
  user_role: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    currentUser(
      state,
      action: PayloadAction<{
        user_id: string;
        user_name: string;
        user_contact_mobile: number;
        user_contact_email: string;
        user_profile_picture_url: string;
        user_role: string;
        user_password: string;
      }>
    ) {
      const {
        user_id,
        user_name,
        user_contact_mobile,
        user_contact_email,
        user_profile_picture_url,
        user_role,
        user_password,
      } = action.payload;

      state.user_id = user_id;
      state.user_name = user_name;
      state.user_contact_mobile = user_contact_mobile;
      state.user_contact_email = user_contact_email;
      state.user_profile_picture_url = user_profile_picture_url;
      state.user_role = user_role;
      state.user_password = user_password;
    },
    removeUser(
      state,
      action: PayloadAction<{
        user_id: string;
      }>
    ) {
      const { user_id } = action.payload;

      if (state.user_id === user_id) {
        state.user_id = "";
        state.user_name = "";
        state.user_contact_mobile = 0;
        state.user_contact_email = "";
        state.user_profile_picture_url = "";
        state.user_role = "";
        state.user_password = "";
      }
    },
  },
});

export const { currentUser } = loginSlice.actions;

export default loginSlice.reducer;
