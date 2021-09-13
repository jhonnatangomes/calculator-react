import styled from "styled-components";

const ScreenStyle = styled.div`
    background-color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(224, 36%, 15%)";
        }
        if (theme === "2") {
            return "hsl(0, 0%, 93%)";
        }
        if (theme === "3") {
            return "hsl(268, 71%, 12%)";
        }
    }};
    height: 136px;
    margin-bottom: 22px;
    border-radius: 9px;
    text-align: right;
    font-size: 40px;
    color: ${({ theme }) => {
        if (theme === "1") {
            return "hsl(0, 0%, 100%)";
        }
        if (theme === "2") {
            return "hsl(60, 10%, 19%)";
        }
        if (theme === "3") {
            return "hsl(52, 100%, 62%)";
        }
    }};
    padding: 44px 2.5% 50px 0px;

    @media (max-width: 600px) {
        height: 15%;
        padding: 7% 5%;
    }
`;

export default ScreenStyle;
