import ScreenStyle from "./ScreenStyle";

export default function Screen({ result, theme }) {
    return <ScreenStyle theme={theme}>{result}</ScreenStyle>;
}
