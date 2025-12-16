import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: 100vh;
    grid-template-columns: 18% 60% 1fr;

    grid-template-areas: "sidenav content aside-content";

    nav {
        grid-area: sidenav;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 1px solid #E5E7EB;

        .icon-container {
            padding: 24px;
        }

        .profile-container {
            background-color: #F9FAFB;
            padding: 16px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 12px;

            img {
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 100%;
            }

            .profile-data {
                display: flex;
                flex-direction: column;

                .profile-name {
                    color: #111827;
                    font-weight: 600;
                    font-size: 1rem;
                }

                .profile-ra {
                    color: #6B7280;
                    font-size: 0.86rem;
                }
            }
        }

        .channel-container {
            padding: 16px 12px;

            > span {
                color: #9CA3AF;
                font-size: 0.86rem;
                font-weight: 600;
                text-transform: uppercase;
            }

            ul {
                color: #4B5563;
                margin-top: 8px;
                display: flex;
                flex-direction: column;
                gap: 8px;

                li {
                    padding: 8px 12px;
                }
            }

            button {
                border: 1px dashed #D1D5DB;
                border-radius: 6px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 8px;
                color: #4B5563;
                margin-top: 36px;
            }
        }

        .button-signout {
            color: #6B7280;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            border-top: 1px solid #E5E7EB;
        }
    }

    main {
        grid-area: content;
    }

    aside {
        grid-area: aside-content;
    }
`;