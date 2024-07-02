import { Row } from 'antd';
import React from 'react'
import AntCard from '../Commons/AntCard';
import { IMAGE_BASE_URL } from '../Config';

const ImageList = (props) => {
  return (
    <Row gutter={[10, 10]}>
      {props.map(targets => {
        return (
          <React.Fragment key={targets.id}>
            {targets.profile_path &&
              <AntCard
                path={`${IMAGE_BASE_URL}w400${targets.profile_path}`}
                character={targets.character}
                castName={targets.name}
              />
            }
          </React.Fragment>
        );
      })}
    </Row>


  )
}
{/* <Row gutter={[10, 10]}>
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
</Row> */}
export default ImageList