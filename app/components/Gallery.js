import React, { Component} from 'react';

class Gallery extends Component {
    render() {
        let alternate = "https://thomasgatewood.com/wp-content/uploads/2017/12/Artboard-20@2x.png";
        return (
            <div className="card-grid">
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink, publishedDate, authors, categories} = item.volumeInfo;
                        return (
                            <div className="mini-card">
                                <header className="card-header">
                                    <div className="card-header-title">
                                        <span className="book-id">{ "Book - " + (index + 1) }</span>
                                        <span className="book-date">{ publishedDate }</span>
                                    </div>
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
                                </header>
                            
                                <div className="book-meta">
                                    <div className="book-meta-img">
                                        <a 
                                            key={index}
                                            className="book"
                                            href={infoLink}
                                            target="_blank"
                                        >
                                            <img 
                                                src={ imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                                                alt="book image"
                                                className="book-img"
                                            />
                                        </a>
                                    </div>
                                    <div className="book-author">
                                        { authors[0] }
                                    </div>
                                    <div className="tags">
                                        <span>{ categories = (categories!==undefined) ? categories : ['unknown'] }</span>
                                    </div> 
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;