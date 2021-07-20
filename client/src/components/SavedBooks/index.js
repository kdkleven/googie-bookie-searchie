import React from 'react'
import styled, { css } from 'styled-components'
import BookCard from '../../components/BookCard'

const Section = styled.section `
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
    text-align: left;
`

function SavedBooks() {
    return (
        <Section>
        <h3>SavedBooks</h3>
            <BookCard />
        </Section>
    )
}

export default SavedBooks