import { createSlice } from "@reduxjs/toolkit";

const teacherReducer = createSlice({
  name: "teachers",
  initialState: {
    teachers: [
      { name: "Ama", gen: 23, id: 1234 },
      { name: "Abigail", gen: 23, id: 12398 },
      { name: "Zeinab", gen: 23, id: 12636 },
      { name: "Abena", gen: 23, id: 123475 },
      { name: "Adwoa", gen: 23, id: 12345353 },
    ],
  },
  reducers: {
    createTeacher: (state) => {},
    updateTeacher: () => {},
    deleteTeacher: () => {},
  },
});

export const { createTeacher, updateTeacher, deleteTeacher } =
  teacherReducer.actions;

export default teacherReducer.reducer;
