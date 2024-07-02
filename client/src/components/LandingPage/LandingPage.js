// import React, { useEffect, useState } from 'react';
// import { API_URL, API_KEY, IMAGE_BASE_URL } from '../Config'
// import MainImage from './Section/MainImage';
// import { Row } from 'antd';
// import GridCards from '../Commons/GridCards';


// function LandingPage() {

//   const [Movies, setMovies] = useState([]);
//   const [MainMovieImage, setMainMovieImage] = useState(null);

//   useEffect(() => {
//     const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US`;
//     // console.log('endpoint >> ', endpoint)


//     fetch(endpoint)
//     .then(response => response.json())
//     // .then(response => console.log(response))
//     .then(response => {
//       console.log(response.results)
//       // console.log(response.results[0])
//       // console.log(response.results[0].poster_path)
//       setMovies(response.result)
//       setMainMovieImage(response.results[0])
//     })


//   }, []);

//   return (
//     <>
//       <div style= { {width: '100%'} }>
//         {/* Main Image */} 
//         {MainMovieImage && 
//         <MainImage
//         image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
//         title={MainMovieImage.title}
//         overview={`${MainMovieImage.overview}`}
//         />
//         }
//         <div style= { {width: '85%', margin: '1rem auto'} }>

//           <h2>새로 나온 영화</h2>
//           <hr />

//           {/* Movie Grid Card */}
//           <Row>
//             {Movies.map(movie => {
//               return(
//                 <GridCards
//                 path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
//                 title={movie.title}
//                 />
//               );
//             })}
//           </Row>
//         </div>
//         <div style= { {display: 'flex', justifyContent: 'center'} }>
//           <button> 더보기 </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LandingPage;

import { Button, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AntCard from '../Commons/AntCard';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from './Section/MainImage';

function LandingPage() {
  // useEffect : React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말함
  // 클라이언트가 서버에게 요청할 때 서버가 응답이 느릴 경우 
  // 서버가 요청이 올 때까지 작업을 못하니까 비동기 처리할 것
  // => 서버에 요청할 땐 비동기 처리할 것

  const [Movies, setMovies] = useState([]);
  // 첫 번째로 받은 data 를 메인 이미지로 지정
  // 값이 안 올 수 있기 때문에 기본값을 null
  const [MainMovieImage, setMainMovieImage] = useState(null);

  const [CurrentPage, setCurrentPage] = useState(0)

  const navigate = useNavigate()

  // useEffect(() => {
  //   const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US`;
  //   // console.log('endpoint >> ', endpoint);

  //   fetch(endpoint) // 요청
  //     .then(res => res.json()) // 응답 : 객체변환
  //     //.then(res => console.log(res.results))
  //     .then(res => {
  //       // console.log(res.results)
  //       setMovies(res.results)
  //       setMainMovieImage(res.results[0])
  //     })
  // }, []);
  // const loadMoreItems = () => {
  //   console.log('더보기 버튼 클릭!!')
  // };
  // useEffect(() => {
  //   const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=1`;

  //   fetch(endpoint) // 요청
  //     .then(res => res.json()) // 응답 : 객체변환
  //     .then(res => {
  //       setMovies(res.results)
  //       setMainMovieImage(res.results[0])
  //     })
  // }, []);
  // const loadMoreItems = () => {
  //   console.log('더보기 버튼 클릭!!')
  //   const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=2`;

  //   fetch(endpoint) // 요청
  //     .then(res => res.json()) // 응답 : 객체변환
  //     .then(res => {
  //       console.log(res.results)
  //       setMovies(res.results)
  //       setMainMovieImage(res.results[0])
  //     })
  // };
  // useEffect와 loadMoreItems의 코드가 반복이 되기 때문에 function을 정의함으로써 리펙토링을 해준다.

  // 반복되는 코드 블럭 지정 후 컨트롤 시프트 r 로 리펙토링을 할 수 있다.
  // 리펙토링 방법은 여러가지이므로 상황에 맡게 리펙토링을 하면 된다.
  useEffect(() => {
    const page = 1
    fetchMovies(page);
  }, []);

  // const loadMoreItems = () => {
  //   console.log('더보기 버튼 클릭!!')
  //   fetchMovies(2)
  // };

  const loadMoreItems = () => {
    console.log('더보기 버튼 클릭!!')
    console.log(CurrentPage)
    fetchMovies(CurrentPage + 1)
  };

  // function fetchMovies(page) {
  //   const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  //   fetch(endpoint) // 요청
  //     .then(res => res.json()) // 응답 : 객체변환
  //     .then(res => {
  //       setMovies(res.results);
  //       setMainMovieImage(res.results[0]);
  //     });
  // }
  function fetchMovies(page) {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    fetch(endpoint) // 요청
      .then(res => res.json()) // 응답 : 객체변환
      .then(res => {
        console.log(res);
        // 가져온 result를 배열로 저장을 하기 때문에 전개 연산자 ... 를 사용해줘서 풀어준 다음 저장해야된다.
        // setMovies(res.results);
        setMovies([...Movies, ...res.results]);
        setMainMovieImage(res.results[0]);
        setCurrentPage(res.page);
        console.log(Movies);
      });
  }




  return (
    <>
      <div>
        {/* <Link to='/items'>items 이동</Link> &nbsp; &nbsp;
        <a href="/items">[a Tag]itmes로 이동</a> */}
      </div>
      <div style={{ width: '100%' }}>

        {/* Main Image : 웹 브라우저 꽉차게 */}
        {MainMovieImage &&
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
            title={`${MainMovieImage.title}`}
            overview={`${MainMovieImage.overview}`}
          />
        }

        {/* 버튼 */}
        <div style={{ textAlign: 'center', margin: '20px' }}
          onClick={() => navigate(1)}>
          <Button>다음</Button>
        </div>
        <div style={{
          // position: 'relative', 
          width: '85%', margin: '1rem auto'
        }}>
          <h2>새로 나온 영화
          </h2>
          {/* <div style={{ position: 'absolute', top: 0, right: 0 }}
            onClick={() => navigate(1)}>
            <Button>다음</Button>
          </div> */}

          <hr />

          {/* Movie Grid Card : 웹 브라우저 안 쪽으로 좀 들어가게 */}
          <Row gutter={[10, 10]}>
            {/* 행이 오고나서 열이 와야된다.
            <GridCards
              path={`${IMAGE_BASE_URL}w400${Movies[0].poster_path}`}
              title={Movies[0].title}
            />
            <GridCards
              path={`${IMAGE_BASE_URL}w400${Movies[1].poster_path}`}
              title={Movies[1].title}
            />
            <GridCards
              path={`${IMAGE_BASE_URL}w400${Movies[2].poster_path}`}
              title={Movies[2].title}
            />
            <GridCards
              path={`${IMAGE_BASE_URL}w400${Movies[3].poster_path}`}
              title={Movies[3].title}
            />
            <GridCards
              path={`${IMAGE_BASE_URL}w400${Movies[4].poster_path}`}
              title={Movies[4].title}
            />
            <GridCards
              path={`${IMAGE_BASE_URL}w400${Movies[5].poster_path}`}
              title={Movies[5].title}
            />
            <GridCards
              path={`${IMAGE_BASE_URL}w400${Movies[6].poster_path}`}
              title={Movies[6].title}
            /> */}

            {/* // 오류를 해결 하기위한 fragment
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
                    */}
            {/* 6개의 컬럼이 오기 위해서 map 을 통해서 반복문 구현 */}
            {/* {Movies.map((movie, index) => { */}
            {Movies.map(movie => {
              return (
                // <React.Fragment key={index}>
                <React.Fragment key={movie.id}>
                  <AntCard
                    LandingPage // 값을 넘겨주려하는 속성은 아니다. 랜딩페이지라는 정보만 넘겨주는 것
                    path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                    title={movie.title}
                    movieId={movie.id}
                  />
                </React.Fragment>
              );
            })}
          </Row>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <button onClick={loadMoreItems}>더보기</button>
        </div>
      </div>
    </>
  )


}

export default LandingPage;