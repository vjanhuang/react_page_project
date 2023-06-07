import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layout'
import MainTitle from './MainTitle'
import person from '../img/person.jpg'
import person3 from '../img/person3.jpg'
import avatar from '../img/avata.jpg'
import GradientCard from './GradientCard'


function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Item'} para={'some words'} />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'$10'} title={'hello'} />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'$10'} title={'hello'} />
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'$10'} title={'hello'} />
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'$10'} title={'hello'} />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'$10'} title={'hello'} />
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'$10'} title={'hello'} />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}
const GradientCardsSectionStyled = styled.div`
`
export default GradientCardsSection