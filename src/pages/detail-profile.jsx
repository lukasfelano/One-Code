import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { GetDetailUser } from "../service/getting-data";

function DetailProfile(props) {
  let navigate = useNavigate();

  if (Object.keys(props.logged).length === 0) {
    alert("You must login first!");
    navigate("/");
  }

  let id = props.logged.id;

  let [data, setData] = useState();

  let fetchingData = async (id) => {
    let fetch = await GetDetailUser(id);
    setData(fetch);
    console.log(fetch);
  };

  useEffect(() => {
    fetchingData(id);
  }, []);

  return (
    <Container>
      <Row>
        <div>
          <div className='py-3'>
            <button
              className='btn btn-info'
              onClick={() => navigate("/dashboard")}>
              Home
            </button>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='border-dev p-3 col-md-6 col-12'>
              <div>
                <h3 className='text-center'>Detail Profile</h3>
              </div>

              {data ? (
                <>
                  <div className='d-flex align-items-center py-3'>
                    <div className='col-3'>Username</div>
                    <div className='ps-3 col-9'>{data.username}</div>
                  </div>

                  <div className='d-flex align-items-center py-3'>
                    <div className='col-3'>Email</div>
                    <div className='ps-3 col-9'>{data.email}</div>
                  </div>

                  <div className='d-flex align-items-center py-3'>
                    <div className='col-3'>Address</div>
                    <div className='ps-3 col-9'>{data.address.street}</div>
                  </div>

                  <div className='d-flex align-items-center py-3'>
                    <div className='col-3'>Phone</div>
                    <div className='ps-3 col-9'>{data.phone}</div>
                  </div>
                </>
              ) : (
                <>Loading Detail Profile</>
              )}
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default DetailProfile;
