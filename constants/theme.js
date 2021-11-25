import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    black: '#000',
    white: '#fff',
    gray: 'gray',
    darkGray: '#393737',
    paleGray: '#666666'
}

export const SIZES = {
    // font sizes
    title: 18,
    desc: 16,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    title: { fontFamily: "Nunito-Regular", fontSize: SIZES.title },
    title2: { fontFamily: "Nunito-Bold", fontSize: SIZES.title },
    desc: { fontFamily: "Nunito-Light", fontSize: SIZES.desc }
};