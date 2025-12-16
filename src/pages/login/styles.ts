import { styled } from "styled-components";

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        align-items: flex-start;
    }

    .login-card {
        width: 70%;
        border-radius: 16px;
        overflow: hidden;
        background-color: #FFF;
        border: 1px solid #E5E7EB;
        box-shadow: 0 20px 25px -5px #00000010;

        display: flex;
        flex-direction: row;

        @media screen and (max-width: 1024px) {
            flex-direction: column;
            margin: 20px;
        }

        @media screen and (max-width: 425px) {
            width: 100%;
            margin: 10px;
        }

        > div {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding: 48px;

            @media screen and (max-width: 425px) {
                padding: 24px;
            }
        }

        .icon-container {
            background-color: #FFFFFF10;
            filter: blur(4);
            width: 56px;
            height: 56px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;

            &.small {
                width: 32px;
                height: 32px;
                margin: 0px;
            }
        }

        .title {
            font-size: 2.25rem;
            font-weight: 700;
            color: #FFF;
            margin-bottom: 12px;
        }
        
        .text-info {
            font-size: 1rem;
            color: #E0E7FF;
            line-height: 26px;
        }

        .list {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            margin-bottom: 126px;

            font-size: 0.875rem;
            color: #FFF;
            line-height: 20px;
            gap: 12px;

            .item {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
            }
        }

        .footer-text {
            color: #C7D2FE;
            text-align: center;
        }
    }

    .form-box {
        .form-title {
            font-weight: 700;
            color: #111827;
            font-size: 1.875rem;
            margin-bottom: 8px;
        }

        .form-text {
            color: #4B5563;
            font-size: 1rem;
            margin-bottom: 32px;
        }

        .form {
            label {
                color: #374151;
                font-weight: 600;
            }

            a {
                color: #4F46E5;
                font-size: 1rem;
            }

            .button-submit {
                width: 100%;
                padding: 12px;
                border-radius: 8px;
                font-weight: 600;
                color: #FFF;
            }
        }
    }
`;