import React from 'react'
import styled, { css } from 'styled-components'

const Section = styled.section `
    margin: 10px;
    text-align: left;
`

function BookCard () {
    return (
        <Section class="card">
          <h4>Title</h4><span><button>View</button><button>Save</button></span>
          <h5>Subtitle</h5>
          <h6>Written by author</h6>
          <img src="" alt="picture"/>Image
          <p>Description</p>
        </Section>
    )
}

export default BookCard
