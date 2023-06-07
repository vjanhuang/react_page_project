import React from 'react'
import { styled } from 'styled-components'
import data from '../data'

function SellCard() {
    return (
        <SellCardStyled>
            {
                data.map((item) => {
                    return <div className="SellerCard" key={item.id}>
                        <div className="number">
                            {item.id}
                        </div>
                        <div className="profile">
                            <img src={item.image} alt="" />
                            <div className="text">
                                <h4>{item.name}</h4>
                                <p>{item.currency}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </SellCardStyled>
    )
}

const SellCardStyled = styled.div`
border-radius:20px;
background:rgba(255,255,255,0.03);
transition:all .4s ease-in-out;
.SellerCard{
    display:flex;
    align-items:center;
    padding:1.5rem 1rem;
    .number{
        padding-right: 1rem;
        font-size: 1.6rem;
        opacity: 0.5;
        p{
            font-weight:700;
        }
    }
    .profile{
        display:flex;
        img{
            width:70px;
            height:70px;
            border-radius:50px;
            object-fit:cover;
        }
    }
    .text{
        margin-left:20px;
    }
}
&:hover{
    transform:translateY(-5px) translateX(5px);
}
`
export default SellCard