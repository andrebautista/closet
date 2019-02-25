import { h, Component } from 'preact';
import Select from 'preact-material-components/Select';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';
import style from './style';

export default class SelectRetailer extends Component {
	state = {
  		chosenIndex: ''
  	};

	render() {
		return (
          <div className={style.itemRetailerSelect}>
            <Select hintText="Select an option"
              selectedIndex={this.state.chosenIndex}
              onChange={(e)=>{
                this.setState({
                  chosenIndex: e.target.selectedIndex
                });
              }}>
                <Select.Item>Ross</Select.Item>
            </Select>
          </div>
        );
	}
}