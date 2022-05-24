import { useState } from "react";

function PostCard(props) {
  let data = props.data;
  let goToMenu = props.menu;

  let [page, setPage] = useState(0);

  let dataPage = [];
  let dataShow = [];
  let count = 0;

  data.forEach((element) => {
    dataShow.push(element);
    count++;
    if (count === 10 || data[data.length - 1] === element) {
      count = 0;
      dataPage.push(dataShow);
      dataShow = [];
    }
  });

  return (
    <>
      {dataPage[page].map((item) => (
        <div key={item.id} className='pb-3'>
          <div className='d-flex align-items-center p-3 border-dev'>
            <div className='ps-3 col-md-2 col-4'>{item.user}</div>
            <div className='col-md-10 col-8'>
              <div className='d-flex'>
                <h5
                  className='cursor-pointer mb-0 pb-2 hovered'
                  onClick={() => {
                    goToMenu("detail-post", item.id);
                  }}>
                  {item.title}
                </h5>
              </div>

              <div>{item.body}</div>
            </div>
          </div>
        </div>
      ))}
      <div className='d-flex flex-wrap justify-content-center pt-3'>
        {dataPage.map((item, index) => (
          <div key={index} className='ps-2'>
            <button
              className='btn btn-muted'
              onClick={() => {
                setPage(index);
              }}>
              {index + 1}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostCard;
