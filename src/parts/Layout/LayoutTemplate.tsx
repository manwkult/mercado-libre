import { Layout } from 'antd';
import * as React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import Filter from '../../components/Widgets/Filter';

const { Content, Header } = Layout;


type LayoutTemplateProps =
  RouteComponentProps<{}>;

class LayoutTemplate extends React.PureComponent<LayoutTemplateProps, { children?: React.ReactNode }> {

	onSearch = (value: string) => {
		this.props.history.push(`/items?q=${value}`);
	};

	public render() {
		return (
			<React.Fragment>
				<Layout className="layout">
					<Header style={{ backgroundColor: '#fff059', padding: '15px' }}>
						<Filter onSearch={this.onSearch}></Filter>
					</Header>
					<Content className="site-layout-content">
						{this.props.children}
					</Content>
				</Layout>
			</React.Fragment>
		);
	}
}

export default withRouter(LayoutTemplate);