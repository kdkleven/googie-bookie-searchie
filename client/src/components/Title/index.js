import React from "react"
import styled, { css } from 'styled-components'

const Section = styled.section `
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
`

function Title() {
    return (
        <Section>
            <h1>Googie Bookie Searchie</h1>
            <h2>Search for and save books of interest</h2>
        </Section>
    )
}

export default Title
