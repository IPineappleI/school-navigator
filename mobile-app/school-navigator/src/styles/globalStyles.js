import { StyleSheet } from "react-native";
import {CONTENT_BACKGROUND, HEADER_BACKGROUND} from "../constants/colors";

export const globalStyles = StyleSheet.create({
    mainSafeArea: {
        backgroundColor: HEADER_BACKGROUND,
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: CONTENT_BACKGROUND
    },
    header: {
        backgroundColor: HEADER_BACKGROUND
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "os-bold"
    },
})