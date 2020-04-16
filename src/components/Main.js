import React from 'react'
import './main.css'

//React Reveal Animation
// import Fade from 'react-reveal/Fade';
import Movies from './Movies';
import MovieBlock from './MovieBlock';
import Pagination from './shared/Pagination';
import SearchBar from './shared/SearchBar';

// jquery
import $ from 'jquery';

// API
const baseURL = 'https://api.themoviedb.org/3/discover/movie?api_key='
const apiKey = '6eb31b073941f3ab8896fa2edb6a2e56'
const apiConfig = '&language=en-US&sort_by=popularity.desc&include_adult=false'
const page = '&page='
// search
const searchBaseURL = 'https://api.themoviedb.org/3/search/movie?api_key='
const searchConfig = '&language=en-US&include_adult=false'
const searchQuery = '&query=';

// API configs
const baseConfigURL = 'https://api.themoviedb.org/3/configuration?api_key='

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movieClicked: false,
            selectedMovie: {},
            ImageBaseURL: '',
            movies: [],
            currentPage: 1,
            maxPages: 5,
            searchQuery: '',
            searched: false
        }
        this.onClickThumbnail = this.onClickThumbnail.bind(this)
        this.onCloseBlock = this.onCloseBlock.bind(this)
        this.onClickNewPage = this.onClickNewPage.bind(this);
        this.onTypeSearch = this.onTypeSearch.bind(this);
    }

    // class properties
    photoSize = 'w500';

    // fetch config
    async loadAPIconfig() {
        const response = await fetch(`${baseConfigURL}${apiKey}`);
        const data = await response.json();

        this.setState({
            ImageBaseURL: data.images.base_url
        });
    }

    // fetch
    async loadMovies(pageNum) {
        // get the right base url
        const response = await fetch(`${baseURL}${apiKey}${apiConfig}${page}${pageNum}`);
        const data = await response.json();

        this.setState({
            movies: data.results,
            currentPage: pageNum,
            // we limit only to maximum of 5 pages
            maxPages: data.total_pages > 5 ? 5 : data.total_pages,
            searched: false,
            searchQuery: ''
        });
    }

    // search
    async searchMovies(query, pageNum = 1) {
        const response = await fetch(`${searchBaseURL}${apiKey}${searchConfig}${searchQuery}${query}${page}${pageNum}`);
        const data = await response.json();

        this.setState({
            movies: data.results,
            currentPage: pageNum,
            // maxPages: 1,
            maxPages: data.total_pages > 5 ? 5 : data.total_pages,
            searchQuery: query,
            searched: true
        });
    }

    componentWillMount() {
        this.loadMovies(this.state.currentPage)
        this.loadAPIconfig();
    }

    onClickThumbnail(movie) {
        if (movie) {
            return this.setState({
                movieClicked: true,
                selectedMovie: movie
            })
        }
    }

    onCloseBlock() {
        return this.setState({
            movieClicked: false
        })
    }

    onClickNewPage(page) {
        console.log(this.state.searchQuery);
        if (page && !this.state.searched) {
            this.loadMovies(page);
        } else {
            console.log('Reseraching movies!');
            this.searchMovies(this.state.searchQuery, page);
        }
        // scroll to the top
        $("html, body").animate({ scrollTop: 0 }, 1000);
    }

    onTypeSearch(event) {
        let query = event.target.value;
        if (query) {
            this.searchMovies(query);
        } else {
            this.loadMovies(1);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="welcome">
                    <h1 className="header">Welcome to the Movie App!</h1>
                    <p className="headerText">This is a small web development project, built as an assessment to Revenue Monster's developer job application. Candidates were given a choice to chose one task out of the given two. I chose to develop a front-end, mobile-optimised web application using React. The app pulls data from the <a href="https://developers.themoviedb.org/3/getting-started/introduction">Movie Database Api</a>, which are then rendered on this page using minimalistic design approach. Users are able to click on any movie thumbnail to get more information about a movie. Additionally, users are able to search for a movie title using the provided search bar. At the point of development, the total number of data pages available were 500. For the sake of time constraint however, the Pagination component only supports up to 5 accessible pages. This component can be extended to support more pages later on.</p>
                </div>
                <SearchBar handleInputChange={this.onTypeSearch}></SearchBar>
                <Movies
                    data={this.state.movies}
                    onClickThumbnail={this.onClickThumbnail}
                    ImageURL={this.state.ImageBaseURL}
                    ImageSize={this.photoSize}
                />
                <Pagination maxPages={this.state.maxPages} currentPage={this.state.currentPage} handleClick={this.onClickNewPage} />

                {/* Selected movie block */}
                {this.state.movieClicked &&
                    < MovieBlock
                        movie={this.state.selectedMovie}
                        ImageURL={this.state.ImageBaseURL}
                        ImageSize={this.photoSize}
                        handleClick={this.onCloseBlock} />
                }
            </React.Fragment>
        )
    }
}

export default Main;

// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
// https://medium.com/@agoiabeladeyemi/pagination-in-reactjs-36f4a6a6eb43