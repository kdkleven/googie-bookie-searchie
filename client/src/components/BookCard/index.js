import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'

const Section = styled.section `
    margin: 10px;
    text-align: left;
`

function BookCard () {
    return (
        <Section className="card">
          <h4>Title<span><Button>View</Button><Button>Save</Button></span></h4>
          <h5>Subtitle</h5>
          <h6>Written by </h6>
          <img src="" alt="picture"/>Image
          <p>Description</p>
        </Section>
    )
}

export default BookCard
