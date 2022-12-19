import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiBarbecue, GiNoodles } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Vietnamese'}>
            <GiNoodles />
            <h4>Vietnamese</h4>
        </SLink>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/Korean'}>
            <GiBarbecue />
            <h4>Korean</h4>
        </SLink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    @media screen and (max-width: 450px) {
        flex-wrap: wrap;
    }
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 1rem 1rem 0 1rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949,#313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }

    
`;
