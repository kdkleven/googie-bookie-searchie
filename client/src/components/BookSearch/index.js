import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Button, TextField } from '@material-ui/core'
import API from '../../utils/API'

function Books() {
 
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState("")

    const Section = styled.section `
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
    text-align: left;
    `

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res => 
                setBooks(res.data)
                )
                .catch(err => console.log(err))
    }

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err))
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setFormObject({...formObject, [name]: value})
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        if (formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis
            })
                .then(res => loadBooks())
                .catch(err => console.log(err))
        }
    }
 
 
    return (
        <Section fluid>
            <h3>Book Search</h3>
            <p>Book</p>
            <TextField onChange={handleInputChange} placeholder="Harry Potter" styles="width:900px" />
            <Button onClick={handleFormSubmit} color="inherit">Search</Button>
        </Section>
    )
}

export default Books