import styled from "styled-components";

const TopStyle = styled.div`
    margin-bottom: 41px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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

    @media (max-width: 600px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.span`
    font-size: 32px;
`;
const Theme = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
`;

const ToggleContainer = styled.div`
    position: relative;
`;
const ThemeOptions = styled.div`
    position: absolute;
    top: -17px;
    left: 10px;

    span {
        margin-right: 11px;
    }
`;

const Toggle = styled.div`
    padding: 3px 5px;
    border-radius: 20px;
    display: inline-block;
    position: relative;
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

    input {
        position: absolute;
        z-index: 3;
        opacity: 0;
        cursor: pointer;
    }

    label {
        text-align: center;
        position: relative;
        z-index: 2;
        margin: 0;
        padding: 2px 3px;
        font-size: 18px;
        opacity: 0;
    }

    span {
        height: 16px;
        width: 16px;
        line-height: 16px;
        border-radius: 50%;
        background: ${({ theme }) => {
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
        display: block;
        position: absolute;
        transition: all 0.3s ease-in-out;
    }

    input[value="1"]:checked ~ span {
        left: 5px;
        top: 3.5px;
    }

    input[value="2"]:checked ~ span {
        left: 23px;
        top: 3.5px;
    }

    input[value="3"]:checked ~ span {
        left: 41px;
        top: 3.5px;
    }
`;

export { TopStyle, Title, Theme, ToggleContainer, ThemeOptions, Toggle };
