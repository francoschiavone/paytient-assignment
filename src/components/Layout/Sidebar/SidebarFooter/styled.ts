import styled from "styled-components";

export const SidebarFooterContainer = styled.div`
  display: flex;
  height: 78px;
  width: 100%;
  border-top: 2px solid #ebe9f0;

  .avatar {
    width: 40px;
    border-radius: 60px;
    margin: 18px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Inter Regular";

  .userProfile {
    color: #7c7d8d;
    font-size: 12px;
    text-decoration: none;
  }

  .userName {
    color: #374151;
    font-size: 14px;
    padding-bottom: 2px;
    width: 100%;
  }
`;
