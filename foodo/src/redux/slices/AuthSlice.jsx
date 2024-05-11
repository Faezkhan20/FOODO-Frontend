import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isAuth = true;
      // state.user=true; 
      // localStorage.setItem('token', action.payload.token); 
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    
  },
  
});
export const { loginUser, logoutUser, setUser } = authSlice.actions;
export default authSlice.reducer;


// export const register=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
  //   try {
    //     const response=await api.post("/signup",{
//       user:userData,
//     })
//     return response.data.user
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.errors)
//   }
// })
// export const login=createAsyncThunk("auth/login",async(userData,thunkAPI)=>{
//   try {
//     const response=await api.post("/login",{
//       user:userData,
//     })
//     return response.data.token;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.errors)
//   }
// })
// export const getcurrentuser=createAsyncThunk("auth/getcurrentuser",async(thunkAPI)=>{
//   try {
//     const token = localStorage.getItem("token")?? ""
//     const response=await api.get("/get-user",{
//       headers:{ Authorization: `Bearer ${token}` }
//     })
//     return response.data.token;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.errors)
//   }
// })

//   extraReducers:builder=>{
//     builder
//     .addCase(register.pending,(state)=>{
//       state.isAuth=true
//     })
//     .addCase(register.fulfilled,(state,action)=>{
//       state.isAuth=false
//       state.user=action.payload
//     })
//     .addCase(register.rejected,(state)=>{
//       state.isAuth=false  
//     })
//     .addCase(login.pending,(state)=>{
//       state.isAuth=true
//     }).addCase(login.fulfilled,(state,action)=>{
//       state.isAuth=true
//       state.user=action.payload
//     }).addCase(login.rejected,(state)=>{
//       state.isAuth=false
//     })
//     .addCase(getcurrentuser.pending,(state)=>{
//       state.isAuth=true
//     })
//     .addCase(getcurrentuser.fulfilled,(state,action)=>{
//       state.isAuth=true
//       state.user=action.payload
//     })
//     .addCase(getcurrentuser.rejected,(state)=>{
//       state.isAuth=false
//       state.user=null
//     })
    
//   },
  


// export const fetchCurrentuser = (token) => async (dispatch) => {
//   const headers = { 'Authorization': `Bearer ${token}` }
//   try {
//     const res = await api.get("/get-user", {headers: headers});
//     const data = await res.data;
//     dispatch(setUser(data.user));
//     dispatch(loginUser());
//   } catch (error) {
//     console.log(error, "error")
//   }
  
// }
// const dispatch=useDispatch()
//   useEffect(()=>{
//   const token = localStorage.getItem('token');
//     if(token){
//       dispatch(fetchCurrentuser(token));
//     }
//   },[])

