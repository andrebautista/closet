import { h, Component } from 'preact';
import linkState from 'linkstate';
import TextField from 'preact-material-components/TextField';
import Button from 'preact-material-components/Button';
import Icon from 'preact-material-components/Icon';
import SelectRetailer from '../selectRetailer';
//Styles
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/TextField/style.css';

import style from './style';

export default class addClosetItem extends Component {
	state = {
		itemUrl: ''
	};

	submitItem = () => {
		// console.log(this.state.urlValue);
		//scrape url
		//add response to this.props.items
		this.props.updateItems(this.state);
		this.setState({...this.state, itemUrl: ''});
	};
	render({}, { itemUrl }) {
		return (
			<div>
				<div className={style.itemUrl}>
					<TextField
						outlined
						label="Enter item URL"
						value={itemUrl}
						onInput={linkState(this, 'itemUrl')}
					/>
				</div>
				<SelectRetailer />
				<br /><br />
				<Button raised onClick={() => {this.submitItem()}}><Icon>add</Icon> Add item</Button>
			</div>
		);
	}
}
