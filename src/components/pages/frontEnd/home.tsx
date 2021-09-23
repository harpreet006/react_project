import React, {useState} from 'react';
import axios from 'axios';
import {Row, Col, Typography, Input, Form, Button, 
Radio, Switch, Slider, Select,Carousel, Divider } from 'antd';
import {useHistory} from 'react-router';
import Wrapper from "../../layouts/wrapper";
import { LeftOutlined, RightOutlined,SmileOutlined } from '@ant-design/icons'
import { FaBeer,FaCommentMedical } from 'react-icons/fa';
import { AiFillAlert,AiFillCopy } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";


const { Title, Paragraph, Text } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715'
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  )
}

const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715'
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  )
}

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}


const Home = () => {
	const [loading, setLoading] = useState(false); 
  return (
    <Wrapper>
      <Carousel autoplay arrows {...settings}>
        <div>
	        <h3 className='carousel-slide'>
	        	<img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" />
	        </h3>
	        </div>
	        <div>        
	        	<h3 className='carousel-slide'><img src="https://wallpapercave.com/wp/wp2046360.jpg" />
	        </h3>
	        </div>
	        <div>
	        	<h3 className='carousel-slide'><img src="https://wallpapercave.com/wp/wp2046360.jpg" />
	        </h3>
	        </div>
	        <div>
	        	<h3 className='carousel-slide'><img src="https://cdn.pixabay.com/photo/2020/05/17/23/09/foal-5183837_960_720.jpg" />
	        </h3>
        </div>
      </Carousel>
      <Divider orientation="center" className="ant-service-text"><Title>Service</Title></Divider>
	    <Typography>	    
		    <Paragraph>
		      In the process of internal desktop applications development, many different design specs and
		      implementations would be involved, which might cause designers and developers difficulties and
		      duplication and reduce the efficiency of development.
		    </Paragraph>
		    
		</Typography>		
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding: "10px"}}>
	    <Col span={8} style={{padding: "10px"}} className="gutter-row">
		    <div style={{border: "1px solid #eee", background:  "#fdfdfd",padding: "15px",borderRadius:"10px"}}>
		    	<div style={{textAlign:"center", fontSize: "50px"}}>
		    		<HiOutlineDesktopComputer />			    	
		    	</div>
		    	<p style={{textAlign:"center", fontSize: "30px"}}>Service 1</p>
			    <Paragraph>
			      In the process of internal desktop applications development, many different design specs and
			      The next generation of the web’s favorite icon library + toolkit is
			      In the process of internal desktop applications development, many different design specs and
			      The next generation of the web’s favorite icon library + toolkit is
			    </Paragraph>
		    </div>
	    </Col>
	    <Col span={8} style={{padding: "10px"}} className="gutter-row">
	    	<div style={{border: "1px solid #eee", background:  "#fdfdfd",padding: "15px",borderRadius:"10px"}}>
	    		<div style={{textAlign:"center", fontSize: "50px"}}>
		    		<AiFillCopy />			    	
		    	</div>
		    	<p style={{textAlign:"center", fontSize: "30px"}}>Service 2</p>
		    	<Paragraph>
			      In the process of internal desktop applications development, many different design specs and
			      The next generation of the web’s favorite icon library + toolkit is
			      In the process of internal desktop applications development, many different design specs and
			      The next generation of the web’s favorite icon library + toolkit is
			    </Paragraph>
		    </div>
	    </Col>
	    <Col span={8} style={{padding: "10px"}} className="gutter-row">
	    	<div style={{border: "1px solid #eee", background:  "#fdfdfd",padding: "15px",borderRadius:"10px"}}>
	    	<div style={{textAlign:"center", fontSize: "50px"}}>
		    		<GiTeacher />			    	
		    	</div>
		    	<p style={{textAlign:"center", fontSize: "30px"}}>Service 3</p>	
		    	<Paragraph>
			      In the process of internal desktop applications development, many different design specs and
			      The next generation of the web’s favorite icon library + toolkit is
			      In the process of internal desktop applications development, many different design specs and
			      The next generation of the web’s favorite icon library + toolkit is
			    </Paragraph>
		    </div>
	    </Col>
    </Row>
	<Row style={{ 
      backgroundImage: `url("https://gloxy-react.envytheme.com/static/cta-bg-img-39434724a310b9e24e6c1b0f4e4f7773.jpg")`,marginTop:"30px" 
    }} >	
       
	      <Col span={14}>
	      <div style={{padding:"15px"}}>
	      	<Title>We offer best in class service for your needs</Title>
	      	<Paragraph>
		      In the process of internal desktop applications development, many different design specs and
		      The next generation of the web’s favorite icon library + toolkit is
		      In the process of internal desktop applications development, many different design specs and
		      The next generation of the web’s favorite icon library + toolkit is
			</Paragraph>
			<Button type="primary" size='large'>PURCHASE NOW</Button>
			</div>
	      </Col>
	      <Col span={6}>
	      <div style={{padding:"15px"}}>
	      	<img src="https://gloxy-react.envytheme.com/static/ca7b86b3712d7856d7672387f1c6b1a3/70169/mac-pro.png" />
	      </div>
	      </Col>

    </Row>
    </Wrapper>
  );
}

export default Home;
