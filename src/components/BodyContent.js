import React from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../Layout'
import MainTitle from './MainTitle'
import SellCard from './SellCard'
import BlogSection from './BlogSection'
import GradientCardsSection from './GradientCardsSection'

function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs'} />
                <div className="sellcards">
                    <SellCard />
                    <SellCard />
                    <SellCard />
                </div>
                <BlogSection />
                <GradientCardsSection />
            </InnerLayout>
        </BodyContentStyled>
    )
}
const BodyContentStyled = styled.main`
.sellcards{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:2rem;
    margin:2rem 0;
}`

export default BodyContent