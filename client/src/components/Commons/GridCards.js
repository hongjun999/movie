import { Col } from 'antd';
import React from 'react';

// 오류를 해결 하기위한 fragment
// https://ko.legacy.reactjs.org/docs/fragments.html
// 자식들을 그룹화하여 사용할 수 있다.
// 대부분 div로 묶지만 빈 꺽새로 하는 경우가 많다.
/* 
// 사용법
<React.fragment> </React.fragment>

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // React는 `key`가 없으면 key warning을 발생합니다.
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
*/



const GridCards = (props) => {
  /* 
  xs : 0  575px
  sm : 576 ~ 767px
  md : 768 ~ 991px
  lg : 992 ~ 1199px
  */
  // console.log(props)
  // console.log('props.LandingPage >> ', props.LandingPage)
  
  if (props.LandingPage) {
    // [LandingPage] 처리======================

    return (
      // 영역 중 4칸을 씀
      // <Col span={4}>

      // 가로 크기에 따라 영역 설정
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.title}
            />
          </a>

        </div>
      </Col>
    )
  } else {
    // [Detail 처리]========================
    return (
      // 영역 중 4칸을 씀
      // <Col span={4}>

      // 가로 크기에 따라 영역 설정
      <Col lg={4} md={6} sm={12} xs={24}>
        <div>
            <img
              style={{ width: '100%' }}
              src={props.path}
              alt={props.castName}
            />
          

        </div>
      </Col>
    )
  }
}
export default GridCards