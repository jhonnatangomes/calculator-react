import styled from "styled-components";

const CalculatorBodyStyle = styled.div`
    background-color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(223, 31%, 20%)";
        }
        if (theme === "2") {
            return "hsl(0, 5%, 81%)";
        }
        if (theme === "3") {
            return "hsl(268, 71%, 12%)";
        }
    }};
    height: 507px;
    border-radius: 9px;
    padding: 2.5%;
    display: grid;
    grid-template-columns: repeat(4, 20%);
    grid-gap: 7%;

    button {
        border: none;
        border-radius: 9px;
        cursor: pointer;
        font-family: "Spartan", sans-serif;
    }

    button:hover {
        filter: brightness(75%);
    }

    @media (max-width: 600px) {
        height: 60%;
        grid-template-columns: repeat(4, 23%);
        grid-gap: 3%;
    }
`;

const Button = styled.button`
    background-color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(30, 25%, 89%)";
        }
        if (theme === "2") {
            return "hsl(45, 7%, 89%)";
        }
        if (theme === "3") {
            return "hsl(268, 47%, 21%)";
        }
    }};
    box-shadow: 0px 4px
        ${({ theme }) => {
            if (theme === "1") {
                return "hsl(28, 16%, 65%)";
            }
            if (theme === "2") {
                return "hsl(35, 11%, 61%)";
            }
            if (theme === "3") {
                return "hsl(290, 70%, 36%)";
            }
        }};
    font-size: 32px;
    color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(221, 14%, 31%)";
        }
        if (theme === "2") {
            return "hsl(60, 10%, 19%)";
        }
        if (theme === "3") {
            return "hsl(52, 100%, 62%)";
        }
    }};
`;

const Reset = styled.button`
    grid-column-start: 1;
    grid-column-end: 3;
    color: white;
    font-size: 20px;
    background-color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(225, 21%, 49%)";
        }
        if (theme === "2") {
            return "hsl(185, 42%, 37%)";
        }
        if (theme === "3") {
            return "hsl(281, 89%, 26%)";
        }
    }};
    box-shadow: 0px 4px
        ${({ theme }) => {
            if (theme === "1") {
                return "hsl(224, 28%, 35%)";
            }
            if (theme === "2") {
                return "hsl(185, 58%, 25%)";
            }
            if (theme === "3") {
                return "hsl(285, 91%, 52%)";
            }
        }};
`;

const Equal = styled.button`
    grid-column-start: 3;
    grid-column-end: 5;
    background-color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(6, 63%, 50%)";
        }
        if (theme === "2") {
            return "hsl(25, 98%, 40%)";
        }
        if (theme === "3") {
            return "hsl(176, 100%, 44%)";
        }
    }};
    box-shadow: 0px 4px
        ${({ theme }) => {
            if (theme === "1") {
                return "hsl(6, 70%, 34%)";
            }
            if (theme === "2") {
                return "hsl(25, 99%, 27%)";
            }
            if (theme === "3") {
                return "hsl(177, 92%, 70%)";
            }
        }};
    font-size: 20px;
    color: ${({ theme }) => (theme === "3" ? "hsl(198, 20%, 13%)" : "white")};
`;

const Del = styled.button`
    color: white;
    font-size: 20px;
    background-color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(225, 21%, 49%)";
        }
        if (theme === "2") {
            return "hsl(185, 42%, 37%)";
        }
        if (theme === "3") {
            return "hsl(281, 89%, 26%)";
        }
    }};
    box-shadow: 0px 4px
        ${({ theme }) => {
            if (theme === "1") {
                return "hsl(224, 28%, 35%)";
            }
            if (theme === "2") {
                return "hsl(185, 58%, 25%)";
            }
            if (theme === "3") {
                return "hsl(285, 91%, 52%)";
            }
        }};
`;

export { CalculatorBodyStyle, Reset, Equal, Del, Button };
