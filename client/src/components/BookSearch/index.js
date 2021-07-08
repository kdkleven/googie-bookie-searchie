import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'

const Section = styled.section `
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
`

function BookSearch() {
    return (
        <Section>
            <h3>Book Search</h3>
            <p>Book</p>
            <input placeholder="Harry Potter"></input>
            <Button color="inherit">Search</Button>
        </Section>
    )
}

export default BookSearch