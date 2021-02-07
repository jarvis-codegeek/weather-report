import {defineAction} from "redux-define"

const NAMESPACE = "WEATHER_REPORT"
const EMPNAMESPACE = "EMPLOYEE"

export const GET_WEATHER_DATA = defineAction("GET_WEATHER_DATA", ["SUCCESS", "ERROR", "PENDING"], NAMESPACE );

export const SAVE_EMPLOYEE_DETAILS = defineAction("SAVE_EMPLOYEE_DETAILS", ["SUCCESS", "ERROR", "PENDING"], EMPNAMESPACE );

