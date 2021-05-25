import styled from '@emotion/styled';

const IconButton = styled.button`
  cursor: pointer;
  border: none;
  color: #909090;
  background-color: transparent;
  transition: all 0.2s ease;

  svg {
    height: 16px;
    width: 16px;
  }

  :hover {
    color: #606060;
  }
`;

export default IconButton;
