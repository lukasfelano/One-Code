import { useState, useEffect } from "react";

import { GetDetailPost } from "../../service/getting-data";

function DetailPost(props) {
  let id = props.id;
  let goToMenu = props.menu;

  let [data, setData] = useState();

  let fetchingData = async (id) => {
    let fetch = await GetDetailPost(id);
    setData(fetch);
  };

  useEffect(() => {
    fetchingData(id);
  }, []);

  return (
    <>
      <div className='py-3'>
        <button className='btn btn-info' onClick={() => goToMenu("home", null)}>
          Home
        </button>
      </div>
      <div>
        <h3 className='text-center'>Detail Post</h3>
      </div>

      {data ? (
        <div className='animation-op'>
          <div className='d-flex align-items-center py-3'>
            <div className='ps-3 col-md-2 col-4'>{data.user}</div>
            <div className='col-md-10 col-8'>
              <h5 className='mb-0'>{data.title}</h5>
              <div>{data.body}</div>
            </div>
          </div>
          <div className='pt-3'>
            <h4 className='mb-0'>Comment</h4>
            <div>
              {data.comment.map((item) => (
                <div className='py-2' key={item.id}>
                  <div className='border-dev p-3'>{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>Loading Detail</>
      )}
    </>
  );
}

export default DetailPost;
