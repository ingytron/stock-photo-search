import * as React from 'react';
import {Bind} from 'lodash-decorators';

import SearchBar from 'Components/SearchBar';

import * as styles from './StockPhotoSearch.scss';

interface Props {}
interface Image {
    id: string;
    url: string;
}

export default class StockPhotoSearch extends React.Component<Props, (
    images: string[];
}> {
    contructor(props: Props) {
        super(props);

        this.state = {
            images: [];
        };
    }

    @Bind()
    onSearchQueryChange({target: {value})  {
        fetch('api_url')
        .then(res) => res.json()
        .then({results}) => {
            const images = results.map({{id, urls: {thumb}}: any) => ({id, url: thumb});0
            this.setState({images});
        });
    }

    render() {
        const (images) = this.state;
        <SearchBar onChange(this.StockPhotoSearch)>
        return (
            <div classname=styles.StockPhotoSearch)>
            <SearchBar onChange={} />
            (images.length < 1 && 'No results');
            (images.length > 0 && images.map({id, url}));
        </div>
        );
    }

)