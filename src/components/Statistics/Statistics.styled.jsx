import styled from '@emotion/styled';

export const SectionStats = styled.section`
text-align: center;
background-color: #fff;
width: 300px;
margin: 0  auto;
border-radius: 7px;
padding-top: 5px;
box-shadow: 2px 2px 5px 1px rgb(179 181 186);
`;

export const Title= styled.h2`
color: #8793a2;
`;

export const StatList = styled.ul`
list-style: none;
display: flex;
justify-content: space-between;
padding: 0;
margin: 0;
`;

const setBgColor = props => {
    switch (props.labelType) {
        case '.docx':
            return 'var(--color1)';
        case '.pdf':
            return 'var(--color2)';
        case '.mp3':
            return 'var(--color3)';
        case '.psd':
            return 'var(--color4)';
        default:
            return 'var(--color5)';
    }
};

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;    
padding: 5px 11.3px;
background-color: ${setBgColor};
color: #ffffff;
`;

export const Label= styled.span`
font-size: 14px;

`;

export const Percentage = styled.span`
padding-top: 5px;
`;