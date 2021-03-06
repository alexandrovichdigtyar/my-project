import React from "react";
import {SelectedLanguages} from "./SelectedLanguages";
import {fetchPopularRepos} from "../utils/api";
import {Repos} from "./Repos";

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.selectLanguage = this.selectLanguage.bind(this);
    }
    
    componentDidMount() {
        this.fetchHandler(this.state.selectedLanguage);
    }
    
    fetchHandler(language) {
        fetchPopularRepos(language)
            .then(data => {this.setState({repos: data})})
            .catch(error => console.error(error))
    }

    selectLanguage(language) {
        if(language !== this.state.selectedLanguage && this.state.repos) {
            this.setState({selectedLanguage: language, repos: null}); 
            this.fetchHandler(language);
        }
    }

    render() {
        console.log("repos") 
        return (
            <div>
                <SelectedLanguages
                    selectedLanguage={this.state.selectedLanguage}
                    selectLanguageHandler={this.selectLanguage}
                />
                {this.state.repos ? <Repos repos={this.state.repos} /> : <p style={{textAlign: "center"}}>Loading...</p>}
            </div>
        )
    }
}

export default Popular;
