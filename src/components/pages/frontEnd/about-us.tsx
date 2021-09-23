import React from 'react';
import {Empty,Typography,Row, Col} from 'antd';
 
import Wrapper from "../../layouts/wrapper";
const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <Wrapper className="about-us-page">
        <h2 className="aboutUs-section">About  Us</h2>
        <Title>About us</Title>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</Paragraph>
        <Row style={{marginTop: "50px"}}>
        	<Col span={14} style={{padding: "10px"}} className="gutter-row">
        		<div>
        			<Title>Take your business to the next level</Title>
        			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</Paragraph>
        		</div>
        	</Col>
        	<Col span={10} style={{padding: "10px"}} className="gutter-row">
        		<div className="about-us-content-a-img">
        			<img src="https://gloxy-react.envytheme.com/static/1154f2cfaf53487b50efbec3a1a817d6/14b42/about-img.jpg" />
        		</div>
        	</Col>
        </Row>
    </Wrapper>
  );
}

export default AboutUs;
