import React, { Component} from 'react';

class Gallery extends Component {
    render() {
        let alternate = "https://thomasgatewood.com/wp-content/uploads/2017/12/Artboard-20@2x.png";
        return (
            <div className="card-grid">
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <div className="mini-card">
                                <header className="card-header">
                                    <div className="card-header-title">
                                        { "Book - " + (index + 1)}
                                        <h2>
                                            <a 
                                                key={index}
                                                className="book"
                                                href={infoLink}
                                                target="_blank"
                                            >
                                                {title}
                                            </a>
                                        </h2>
                                    </div>
                                </header>
                            
                                <img 
                                    src={ imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                                    alt="book image"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            
                            </div>
                        )
                    })
                }
                
                <div className="mini-card"></div>
                <div className="mini-card"></div>
                <div className="mini-card"></div>
            </div>
        )
    }
}

export default Gallery;