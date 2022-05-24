import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PostCard from "../components/card/post-card";
import DetailPost from "../components/dashboard/detail-posting";

import { GetAllPost } from "../service/getting-data";

function Dashboard(props) {
  let navigate = useNavigate();

  if (Object.keys(props.logged).length === 0) {
    navigate("/");
    alert("You must login first!");
  }

  let [menu, setMenu] = useState("home");
  let [id, setId] = useState();

  let [data, setData] = useState();

  let fetchingData = async () => {
    let fetch = await GetAllPost();
    setData(fetch);
  };

  let goMenu = (menu, id) => {
    setId(id);
    setMenu(menu);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  let post = <PostCard data={data} menu={goMenu}></PostCard>;
  let detail = <DetailPost id={id} menu={goMenu}></DetailPost>;

  return (
    <div>
      <Container>
        <Row>
          {menu === "home" ? (
            <div>
              <div className='py-3'>
                <h3 className='text-center'>Dashboard Post</h3>
              </div>
              <div>{data ? post : <>Loading data</>}</div>
            </div>
          ) : menu === "detail-post" ? (
            <>{detail}</>
          ) : menu === "detail-profile" ? (
            <></>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
