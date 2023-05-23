import {useEffect, useState} from "react";
import {Dimensions} from "react-native";

export function windowForm() {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        Dimensions.addEventListener('change', ({window: {width, height}}) => {
            setWindowHeight(height);
            setWindowWidth(width);
        });
    });

    return window = [windowWidth, windowHeight];
}