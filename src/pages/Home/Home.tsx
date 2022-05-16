import './Home.css';

import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { ApplicationState } from '../../store';
import * as ItemsStore from '../../store/Items';
import ItemList from '../../components/ItemList/ItemList';


type ItemsProps =
  ApplicationState &
  typeof ItemsStore.actionCreators &
  RouteComponentProps<{}>;

class Home extends React.PureComponent<ItemsProps> {
  state = {
    search: '',
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps: ItemsProps) {
    const search = this.getQuery();

    if (this.state.search !== search) {
      this.load();
    }
  }

  load = async () => {
    const search = this.getQuery();
    this.setState({ search });
    document.title = `${search} - Mercado Libre`;

    if (search) {
      this.props.search(search);
    }
  }

  onSelect = (id: string) => {
    this.props.history.push(`/items/${id}`);
  }

  getQuery = () => {
    const params = new URLSearchParams(this.props.location.search);
    return params.get('q') || '';
  }

  public render() {
    return (
      <React.Fragment>
        <div className="content-home">
          <ItemList items={this.props.items?.items} onSelect={this.onSelect}/>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: ApplicationState) => state, { ...ItemsStore.actionCreators }
)(Home as any);