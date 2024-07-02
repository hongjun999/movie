import { Button, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AntCard from '../Commons/AntCard';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from '../LandingPage/Section/MainImage';
import MovieInfo from './MovieInfo';

// react-router-dom에서 파라미터의 정보를 import 해줄 수 있다.
const Detail = () => {
  const navigate = useNavigate() // 이전페이지 다음페이지 또는 특정페이지 요청 가능
  const { movieId } = useParams()
  // console.log(movieId) // 개발 환경으로 인해 두 번 출력된다.

  // [state] ===========
  const [Movie, setMovie] = useState({})
  const [Casts, setCasts] = useState([])
  const [Crews, setCrews] = useState([])
  const [ActorToggle, setActorToggle] = useState(false) // false로 비활성화 상태를 디폴트
  const [CrewToggle, setCrewToggle] = useState(false) // false로 비활성화 상태를 디폴트

  useEffect(() => {
    console.log('페이지가 로드되면, 자동으로 실행됩니다!')
    // 배열로 작업해줘야된다.

    //// [특정 영화 정보] URL
    let endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`
    // console.log(endpointInfo)

    //// [출연진] URL
    let endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`
    // console.log("actors >> ", endpointCrew);

    //// [특정 영화 정보] 영화 아이디로 정보 요청
    fetch(endpointInfo)
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        setMovie(res);
      })

    fetch(endpointCrew)
      .then(castInfo => castInfo.json())
      .then(castInfo => {
        // console.log(castInfo);
        setCasts(castInfo.cast)
        setCrews(castInfo.crew)
      })


  }, []);

  // 버튼 핸들러=====================================
  // 한번 누르면 두가지 상태가 왔다갔다 하는 것
  function toggleActorView() {
    setActorToggle(!ActorToggle)
  }

  function toggleCrewView() {
    setCrewToggle(!CrewToggle)
  }
  return (
    <>
      {/* Header */}
      {Movie &&
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
          title={Movie.title}
          overview={Movie.overview}
        />
      }
      <div style={{ textAlign: 'center', margin: '40px auto' }}>
        <Button
          onClick={() => navigate(-1)} // navigate를 함수로 설정하여 안에 url정보를 보여준다 (-1)이면 이전 페이지, ('/') 최상위 페이지로 이동한다.
        >영화 목록</Button>
      </div>
      {/* Body */}
      <div style={{ width: '85%', margin: '20px auto' }}>
        <MovieInfo movie={Movie} />

        <br />
        {/* Actors Grid */}
        <div style={{ textAlign: 'center', margin: '40px auto' }}>
          <Button type={(!ActorToggle) ? "default" : "primary"} onClick={toggleActorView}>배우 목록</Button>
          <span style={{ margin: '10px' }} />
          <Button type={(!CrewToggle) ? "default" : "primary"} onClick={toggleCrewView}>제작진 목록</Button>
        </div>

        {ActorToggle &&
          <>
            <Divider
              // dashed
              // orientation='left'
              // orientationMargin={500}
              style={{ borderColor: '#0dd' }}>배우목록</Divider>
            {/* 컴포넌트 분리 ============================================== */}
            <Row gutter={[10, 10]}>
              {Casts.map(cast => {
                return (
                  <React.Fragment key={cast.id}>
                    {cast.profile_path &&
                      <AntCard
                        path={`${IMAGE_BASE_URL}w400${cast.profile_path}`}
                        character={cast.character}
                        castName={cast.name}
                      />
                    }
                  </React.Fragment>
                );
              })}
            </Row>
          </>
        }
        {CrewToggle &&
          <>
            <Divider plain>제작진 목록</Divider>
            <Row gutter={[10, 10]}>
              {Crews.map((crew, index) => { // 키가 겹치는 이유때문에 키를 index로 바꿔주기위해 설정을 해준다.
                return (
                  <React.Fragment key={index}>
                    {crew.profile_path &&
                      <AntCard
                        path={`${IMAGE_BASE_URL}w400${crew.profile_path}`}
                        character={crew.character}
                        castName={crew.name}
                      />
                    }
                  </React.Fragment>
                );
              })}
            </Row>
          </>
        }
      </div>

    </>
  )
}

export default Detail