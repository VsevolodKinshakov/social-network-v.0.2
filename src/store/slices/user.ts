import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Начальное состояние пользователя
const initialState = {
  name: 'Арина Волкова',
  friendsCount: 130,
  followersCount: 923,
  subscriptionsCount: 246,
  birthday: '9 августа',
  city: 'Ташкент',
  education: 'Филиал университета нефти и газа им. Губкина в Ташкенте',
  occupation: 'Фотограф',
  hobby: 'Танцы',
};

// Срез пользователя с помощью Redux Toolkit
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Действие для обновления имени пользователя
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    // Другие действия для обновления других данных о пользователе
  },
});

// Действия пользователя для использования в компонентах
export const { updateName } = userSlice.actions;

// Редюсер пользователя для добавления его в ваш Store
export default userSlice.reducer;
