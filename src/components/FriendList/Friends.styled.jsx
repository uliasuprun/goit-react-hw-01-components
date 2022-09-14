import styled from '@emotion/styled';

export const FriendListBox = styled.ul`
width: 300px;
    // background: #fff;
    list-style: none;
    margin: 30px auto;
    padding: 0;
`;

export const Item = styled.li`
display: flex;  
align-items: center;
background: #fff;
margin-bottom: 3px;
border-radius: 0 7px 7px 7px;
box-shadow: 2px 2px 5px 1px rgb(179 181 186);
`;

const setBgColor = props => {
    switch (props.isOnline) {
        case true:
            return 'var(--color6)';
        case false:
            return 'var(--color7)';
        default:
            return 'var(--color5)';
    }
};

export const Status = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    margin: 0 10px;
    border-radius: 100%;
    background-color: ${setBgColor};
`;

export const Avatar = styled.img`
margin-right: 10px;
`;

export const Name = styled.p`
font-weight: 500;
`;