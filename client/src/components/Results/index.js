import React from 'react'
import styled, { css } from 'styled-components'

const Section = styled.section `
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
`

function Results() {
    return (
        <Section>
        <h3>Results</h3>
        <div class="card">
          <h4>Title</h4><span><button>View</button><button>Save</button></span>
          <h5>Subtitle</h5>
          <h6>Written by author</h6>
          <img src="" alt="picture"/>Image
          <p>Description</p>
        </div>
        </Section>
    )
}

export default Results