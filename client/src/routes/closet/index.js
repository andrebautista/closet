import { h, Component } from 'preact';
import AddClosetItem from '../../components/addClosetItem';
import ClosetItem from '../../components/closetItem';
//Styles
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/TextField/style.css';
import style from './style';

export default class Closet extends Component {
  constructor(props) {
    super(props)
    this.updateItems = this.updateItems.bind(this);
  }

	state = {
		items: []
	};

  updateItems(item) {
    this.setState({ items: [...this.state.items, item] });
  };

	render({}, { items }) {
		return (
			<div class={`${style.closet} page`}>
				<h1>Closet</h1>
				<AddClosetItem updateItems={this.updateItems} />
				{items.map((item, key) =>
					<ClosetItem item={item} key={item.key} />
				)}
			</div>
		);
	}
}
