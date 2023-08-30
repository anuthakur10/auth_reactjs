import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHomes } from "../../services/home";

export const getHomesData = createAsyncThunk("home/getHomes", getHomes);
