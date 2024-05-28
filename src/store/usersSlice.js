import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "John Doe",
    nickname: "Johnny",
    photo: "/assets/photos/photo1.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 2,
    name: "Jane Doe",
    nickname: "Janie",
    photo: "/assets/photos/photo2.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 3,
    name: "John Smith",
    nickname: "Smithy",
    photo: "/assets/photos/photo3.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 4,
    name: "Jane Smith",
    nickname: "Janey",
    photo: "/assets/photos/photo4.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 5,
    name: "John Johnson",
    nickname: "Johny",
    photo: "/assets/photos/photo5.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 6,
    name: "Jane Johnson",
    nickname: "Jane",
    photo: "/assets/photos/photo6.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 7,
    name: "John Brown",
    nickname: "Brownie",
    photo: "/assets/photos/photo7.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 8,
    name: "Jane Brown",
    nickname: "Janey",
    photo: "/assets/photos/photo8.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 9,
    name: "John White",
    nickname: "Whitey",
    photo: "/assets/photos/photo9.jpg",
    profession: getRandomProfession(),
  },
  {
    id: 10,
    name: "Jane White",
    nickname: "Janey",
    photo: "/assets/photos/photo10.jpg",
    profession: getRandomProfession(),
  },
];

function getRandomProfession() {
  const professions = ["Engineer", "Doctor", "Teacher", "Artist", "Chef"];
  const randomIndex = Math.floor(Math.random() * professions.length);
  return professions[randomIndex];
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
