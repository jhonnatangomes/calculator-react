import { useState, useEffect } from "react";
import {
    TopStyle,
    Title,
    Theme,
    ToggleContainer,
    ThemeOptions,
    Toggle,
} from "./TopStyles";

export default function Top({ setTheme, theme }) {
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        if (localStorage.theme) {
            setChecked(JSON.parse(localStorage.checked));
            setTheme(localStorage.theme);
        } else {
            setChecked([true, false, false]);
        }
    }, []);

    function changeTheme(index) {
        const newChecked = [false, false, false];
        newChecked[index] = true;
        setChecked(newChecked);
        localStorage.setItem("checked", JSON.stringify(newChecked));
        localStorage.setItem("theme", index + 1);
        setTheme(String(index + 1));
    }
    return (
        <TopStyle theme={theme}>
            <Title>calc</Title>
            <Theme>
                <span>THEME</span>
                <ToggleContainer>
                    <ThemeOptions>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </ThemeOptions>
                    <Toggle theme={theme}>
                        <input
                            type="radio"
                            value="1"
                            name="toggle-button"
                            checked={checked[0] || ""}
                            onChange={() => changeTheme(0)}
                        />
                        <label>1</label>
                        <input
                            type="radio"
                            value="2"
                            name="toggle-button"
                            checked={checked[1] || ""}
                            onChange={() => changeTheme(1)}
                        />
                        <label>2</label>
                        <input
                            type="radio"
                            value="3"
                            name="toggle-button"
                            checked={checked[2] || ""}
                            onChange={() => changeTheme(2)}
                        />
                        <label>3</label>
                        <span></span>
                    </Toggle>
                </ToggleContainer>
            </Theme>
        </TopStyle>
    );
}
