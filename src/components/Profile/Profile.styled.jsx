import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 300px;
    border-radius: 7px;
    background: #ffffff;
    margin: 30px auto;
    box-shadow: 2px 2px 5px 1px rgb(179 181 186);
`;

export const Box = styled.div`
    padding-top: 30px;  
    padding-bottom: 30px;
`;

export const Avatar = styled.img`
    width: 100px;
    border-radius: 100%;
    background-color: #fe5060;
    padding: 5px;
`;

export const Name = styled.p`
    color: #111a29;
    font-weight: bold;
    margin-top: 40px;
`;

export const Desc = styled.p`
    color: #8793a2;
    line-height: 1;
    font-size: 18px;
`;

export const Stats = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0;
    padding: 10px 0;
    list-style: none;
    justify-items: stretch;
    background-color: #f1f4f8;
    border-top: 1px solid #e1e7ee;
    border-radius: 0 0 7px 7px;
`;

export const StatsItem = styled.li`
    padding: 5px 16px;
    border-right: 1px solid #e1e7ee;
`;

export const Label = styled.p`
    color: #8793a2;
    font-size: 16px;
`;

export const Quantity = styled.span`
    color: #111a29;
    font-weight: bold;
`;

