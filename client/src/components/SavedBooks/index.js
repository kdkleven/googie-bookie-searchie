import React from 'react'
import styled, { css } from 'styled-components'
import { Button, TextField } from '@material-ui/core'

const Section = styled.section `
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
    text-align: left;
`

function BookSearch() {
    return (
        <Section>
            <h3>Saved Books</h3>
            <p>Book</p>
            <TextField placeholder="Harry Potter" styles="width:900px" />
            <Button color="inherit">Search</Button>
        </Section>
    )
}

export default BookSearch