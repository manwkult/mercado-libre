import React from 'react';

import { Input, Row, Col } from 'antd';
const { Search } = Input;

interface Props {
  onSearch: (value: any) => void;
}

const Filter: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="content">
        <Row>
          <Col span={4} className="logo-meli">
            <img width="120" alt="Logo" src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png'></img>
          </Col>
          <Col span={20}>
            <Search placeholder="Nunca dejes de buscar" onSearch={props.onSearch} allowClear />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Filter;