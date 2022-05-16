import './Detail.css';

import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { Row, Col, Button } from 'antd';

import { ApplicationState } from '../../store';
import * as DetailStore from '../../store/Detail';


type DetailProps =
  ApplicationState &
  typeof DetailStore.actionCreators &
  RouteComponentProps<{ id: string }>;

class Detail extends React.PureComponent<DetailProps> {
  state = {
    id: '',
  };

  componentDidMount() {
    if (this.state.id !== this.props.match.params.id) {
      this.load();
    }
  }

  componentDidUpdate(prevProps: DetailProps) {
    if (this.props.detail?.detail?.item?.id === this.props.match.params.id) {
      document.title = `${this.props.detail?.detail?.item?.title} - Mercado Libre`;
    }
  }

  load = () => {
    document.title = `Mercado Libre`;
    this.props.getById(this.props.match.params.id);
  }

  capitelize = (str: string | undefined) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }

  onSearch = (value: string) => {
    this.props.getById(value);
  }

  public render() {
    return (
      <React.Fragment>
        <div className="content-detail">
          <Row>
            <Col span="16">
              <img src={this.props.detail?.detail?.item?.picture} alt="" />
            </Col>
            <Col span="8">
              <Row>
                <Col span="24">
                  <span>{this.capitelize(this.props.detail?.detail?.item?.condition)} · {this.props.detail?.detail?.item?.sold_quantity} Vendidos</span>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                  <div className="detail-info">
                    <h1>{this.props.detail?.detail?.item?.title}</h1>
                    <span className="content-detail-price">$ {this.props.detail?.detail?.item?.price.amount.toLocaleString('en-us', { minimumFractionDigits: 2 })}</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                  <Button className="button-primary" type="primary" size="large">
                    Comprar
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <strong><span className="content-detail-description-title">Descripción del producto</span></strong>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <div className="content-detail-description">
                {this.props.detail?.detail?.item?.description}
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: ApplicationState) => state, { ...DetailStore.actionCreators }
)(Detail as any);