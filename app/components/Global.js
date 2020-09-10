import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Gallery from './Gallery';

class Global extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    search(){
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            let {items} = json;
            this.setState({items})
        });
    }

    render(){
        return (
            <div className="container">
                <div className="header">
                    {/* <img  
                        className="logo"
                        src="https://imgur.com/LGwlFh8.png"
                        alt="Logo"
                    /> */}

                    <span className="title">Book Finder</span>
                    
                    <FormGroup>
                        <InputGroup>
                            <FormControl 
                                type="text"
                                placeholder="Search for a book"
                                onChange={event=>this.setState({query: event.target.value})}
                                onKeyPress={event=>{
                                    if(event.key === 'Enter'){
                                        this.search();
                                    }
                                }}
                            />
                            <Button 
                                className="button"
                                onClick={()=>this.search()}
                            >
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faSearch}
                                />
                            </Button>
                        </InputGroup>
                    </FormGroup>
                </div>
                
                <Gallery items={this.state.items}/>
            </div>
        )
    }
}

export default Global;