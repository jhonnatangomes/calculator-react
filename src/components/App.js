import Top from "./top/Top";
import Screen from "./screen/Screen";
import CalculatorBody from "./body/CalculatorBody";
import { useState } from "react";
import GlobalStyle from "../css/GlobalStyle";
import styled from "styled-components";

export default function App() {
    const [numbers, setNumbers] = useState([]);
    const [operations, setOperations] = useState([]);
    const [result, setResult] = useState("");
    const [theme, setTheme] = useState("1");
    return (
        <>
            <GlobalStyle />
            <Calculator theme={theme}>
                <Top setTheme={setTheme} theme={theme} />
                <Screen result={result} theme={theme} />
                <CalculatorBody
                    result={result}
                    setResult={setResult}
                    numbers={numbers}
                    setNumbers={setNumbers}
                    operations={operations}
                    setOperations={setOperations}
                    theme={theme}
                />
            </Calculator>
        </>
    );
}

const Calculator = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(222, 26%, 31%)";
        }
        if (theme === "2") {
            return "hsl(0, 0%, 90%)";
        }
        if (theme === "3") {
            return "hsl(268, 75%, 9%)";
        }
    }};

    & > div {
        width: 40%;
    }

    @media (max-width: 600px) {
        & > div {
            width: 80%;
        }
    }
`;
