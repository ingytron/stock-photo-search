 import * as React from 'react';

 import * as style from './SearchBar.scss';

 interface Props {
     onChange(event: React.ChangeEvent<HTMLInputElement>): void;
 }

 export default (onChange: Props) => <input classNames=(styles.SearchBar) type="search";