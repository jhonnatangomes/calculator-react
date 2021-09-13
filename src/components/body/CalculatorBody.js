import { CalculatorBodyStyle, Reset, Equal, Del, Button } from "./BodyStyle";

export default function CalculatorBody({
    numbers,
    setNumbers,
    operations,
    setOperations,
    result,
    setResult,
    theme,
}) {
    function writeNumber(num) {
        const newNumbers = [...numbers];
        if (numbers.length === operations.length) {
            newNumbers.push("");
        }
        newNumbers[newNumbers.length - 1] += num;
        setNumbers(newNumbers);
        setResult(result + num);
    }

    function del() {
        setResult(result.slice(0, -1));
    }

    function reset() {
        setNumbers([]);
        setOperations([]);
        setResult("");
    }

    function writeOperation(operation) {
        if (result === "") {
            return;
        }

        const newOperations = [...operations];
        if (numbers.length !== operations.length) {
            newOperations.push("");
        }
        newOperations[newOperations.length - 1] = operation;
        setOperations(newOperations);
        if (!isNaN(result[result.length - 1])) {
            setResult(result + operation);
        } else {
            setResult(result.slice(0, -1) + operation);
        }
    }

    function equal() {
        let newNumbers = [...numbers];
        const newOperations = [...operations, "="];
        newNumbers = newNumbers.map((number) => Number(number));
        let index = 0;

        while (newOperations.includes("×") || newOperations.includes("/")) {
            if (newOperations[index] === "×" || newOperations[index] === "/") {
                newNumbers[index] = calculate(
                    newNumbers[index],
                    newNumbers[index + 1],
                    newOperations[index]
                );
                newOperations[index] = newOperations[index + 1];
                newNumbers.splice(index + 1, 1);
                newOperations.splice(index + 1, 1);
            } else {
                index++;
            }
        }

        index = 0;
        while (newOperations.includes("+") || newOperations.includes("-")) {
            if (newOperations[index] === "+" || newOperations[index] === "-") {
                newNumbers[index] = calculate(
                    newNumbers[index],
                    newNumbers[index + 1],
                    newOperations[index]
                );
                newOperations[index] = newOperations[index + 1];
                newNumbers.splice(index + 1, 1);
                newOperations.splice(index + 1, 1);
            } else {
                index++;
            }
        }

        setNumbers([String(newNumbers[0])]);
        setOperations([]);
        setResult(String(newNumbers[0]));
    }

    function calculate(num1, num2, operation) {
        switch (operation) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "×":
                return num1 * num2;
            case "/":
                return num1 / num2;
            default:
                break;
        }
    }

    function writeDot() {
        const newNumbers = [...numbers];
        if (numbers.length === operations.length) {
            newNumbers.push("");
        }
        if (!newNumbers[newNumbers.length - 1].includes(".")) {
            newNumbers[newNumbers.length - 1] += ".";
            setResult(result + ".");
        }
        setNumbers(newNumbers);
    }

    return (
        <CalculatorBodyStyle theme={theme}>
            <Button onClick={() => writeNumber("7")} theme={theme}>
                7
            </Button>
            <Button onClick={() => writeNumber("8")} theme={theme}>
                8
            </Button>
            <Button onClick={() => writeNumber("9")} theme={theme}>
                9
            </Button>
            <Del onClick={del} theme={theme}>
                DEL
            </Del>
            <Button onClick={() => writeNumber("4")} theme={theme}>
                4
            </Button>
            <Button onClick={() => writeNumber("5")} theme={theme}>
                5
            </Button>
            <Button onClick={() => writeNumber("6")} theme={theme}>
                6
            </Button>
            <Button onClick={() => writeOperation("+")} theme={theme}>
                +
            </Button>
            <Button onClick={() => writeNumber("1")} theme={theme}>
                1
            </Button>
            <Button onClick={() => writeNumber("2")} theme={theme}>
                2
            </Button>
            <Button onClick={() => writeNumber("3")} theme={theme}>
                3
            </Button>
            <Button onClick={() => writeOperation("-")} theme={theme}>
                -
            </Button>
            <Button onClick={writeDot} theme={theme}>
                .
            </Button>
            <Button onClick={() => writeNumber("0")} theme={theme}>
                0
            </Button>
            <Button onClick={() => writeOperation("/")} theme={theme}>
                /
            </Button>
            <Button onClick={() => writeOperation("×")} theme={theme}>
                x
            </Button>
            <Reset onClick={reset} theme={theme}>
                RESET
            </Reset>
            <Equal onClick={equal} theme={theme}>
                =
            </Equal>
        </CalculatorBodyStyle>
    );
}
