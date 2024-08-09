import { createSlice } from "@reduxjs/toolkit"

const userList = [
    { name: "Alice Johnson", email: "alice@example.com", id: "12345" },
    { name: "Bob Smith", email: "bob@example.com", id: "67890" },
    { name: "Charlie Brown", email: "charlie@example.com", id: "13579" }
]

const initialState = userList

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { id, name, email } = action.payload
            state.push({
                id,
                name,
                email
            })
        },
        removeUser: (state, action) => {
            const { id } = action.payload
            const deleteId = state.findIndex(item => item.id === id)
            state.splice(deleteId, 1)
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload
            state.forEach(item => {
                if (item.id === id) {
                    item.name = name
                    item.email = email
                }
            })
        }
    }
})

export default userSlice.reducer
export const { addUser, removeUser, editUser } = userSlice.actions