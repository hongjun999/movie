import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const AntCard = (props) => {
  const { Meta } = Card;
  if (props.LandingPage) {
    // [LandingPage] 처리======================

    return (
      // 영역 중 4칸을 씀
      // <Col span={4}>
      // 가로 크기에 따라 영역 설정
      <Col lg={4} md={6} sm={12} xs={24}>
        <Card
          hoverable style={{ width: '100%' }}
          cover={<div>
            {/* <a href={`/movie/${props.movieId}`}> */}

            <Link to={`/detail/${props.movieId}`}>
              <img
                style={{ width: '100%' }}
                src={props.path}
                alt={props.title}
              />
            </Link >

            {/* </a> */}
          </div>}
        > <Meta title={props.title} />
        </Card >
      </Col >
    )
  } else {
    // [Detail 처리]========================
    return (
      // 영역 중 4칸을 씀
      // <Col span={4}>

      // 가로 크기에 따라 영역 설정
      <Col lg={4} md={6} sm={12} xs={24}>
        <Card
          hoverable style={{ width: '240' }}
          cover={<div>
            {<img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.castName}
            />}
          </div>}
        ><Meta title={props.castName} />
        </Card>
      </Col>

      // <Col lg={4} md={6} sm={12} xs={24}>
      //   <div>
      //     <img
      //       style={{ width: '100%' }}
      //       src={props.path}
      //       alt={props.castName}
      //     />
      //   </div>
      // </Col>
    )
  }
}

export default AntCard