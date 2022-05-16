 import './Item.css';

import React from 'react';
import { Data } from '../../models/Data';
import { Row, Col } from 'antd';

interface Props {
  item: Data;
  onClick: () => void;
}

const Item: React.FC<Props> = (props) => {
  
  return (
    <React.Fragment>
      <div className="item" onClick={() => props.onClick()}>
        <Row>
          <Col span={4}>
            <div className="item-image">
              <img width="150" alt="Item" src={props.item.picture} />
            </div>
          </Col>
          <Col span={16}>
            <div className="item-info">
              <div className="item-price">$ {props.item.price.amount.toLocaleString('en-us', {minimumFractionDigits: 2})}</div>
              <div className="item-title">{props.item.title}</div>
            </div>
          </Col>
          <Col span={4}>

          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Item;