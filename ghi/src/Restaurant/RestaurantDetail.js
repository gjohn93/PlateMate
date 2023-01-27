import React from "react";
import { useState, useEffect } from "react";
import { useAuthContext } from "../Authentication/AuthenticateUser";

export default function RestaurantDetail({ idData }) {
  const { token } = useAuthContext();
  const [restaurant, setRestaurant] = useState("");
  const [review, setReview] = useState("");

  const getDataById = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp/${idData}`;
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await resp.json();
    setRestaurant(data);
  };

  const getReview = async () => {
    const url = `${process.env.REACT_APP_PLATEMATE_API_HOST}/api/yelp/review/${idData}`;
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(url);
    const data = await resp.json();
    console.log(data);
    setReview(data);
  };

  useEffect(() => {
    console.log("I am being called");
    getDataById();
    getReview();
  }, [idData]);

  console.log(restaurant);
  console.log(review);

  if (restaurant && review) {
    return (
      <>
        <div className="flex justify-center drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white w-[400px]">
            <div className="relative rounded-lg bg-[#C26866]-500">
              <div
                id="carouselExampleIndicators"
                class="carousel slide relative"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 0"
                  ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                  <div class="carousel-item active float-left w-full">
                    <img
                      src={restaurant?.photos[0]}
                      class="block w-full rounded-lg"
                      alt="#"
                    />
                  </div>
                  <div class="carousel-item float-left w-full">
                    <img
                      src={restaurant?.photos[1]}
                      class="block w-full rounded-lg"
                      alt="#"
                    />
                  </div>
                  <div class="carousel-item float-left w-full">
                    <img
                      src={restaurant?.photos[2]}
                      class="block w-full rounded-lg"
                      alt="#"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div
            className="text-center 
          rounded-lg shadow-lg bg-white w-[500px] ml-10"
          >
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {restaurant.name}
            </h5>
            <p> Rating: {restaurant.rating} </p>
            {/* <div className="mx-auto">
              <table>
                <thead>
                  <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{restaurant.hours[0].open[0].start} -</td>
                    <td>{restaurant.hours[0].open[1].start} -</td>
                    <td>{restaurant.hours[0].open[2].start} -</td>
                    <td>{restaurant.hours[0].open[3].start} -</td>
                    <td>{restaurant.hours[0].open[4].start} -</td>
                    <td>{restaurant.hours[0].open[5].start} -</td>
                    <td>{restaurant.hours[0].open[6].start} -</td>
                  </tr>
                  <tr>
                    <td>{restaurant.hours[0].open[0].end}</td>
                    <td>{restaurant.hours[0].open[1].end}</td>
                    <td>{restaurant.hours[0].open[2].end}</td>
                    <td>{restaurant.hours[0].open[3].end}</td>
                    <td>{restaurant.hours[0].open[4].end}</td>
                    <td>{restaurant.hours[0].open[5].end}</td>
                    <td>{restaurant.hours[0].open[6].end}</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <div className="pl-2 mb-2">
              <p>Reviews:</p>

              {review.reviews[0].text}

              <br />

              <p> {review.reviews[1].text} </p>

              <br />

              <p> {review.reviews[2].text}</p>

              <br />
            </div>
            <div className="mx-auto">
              <button className="text-[#BB5855] mx-6 rounded text-sm outline outline-offset-4 outline-2 py-0 px-4 relative font-semibold text-center no-underline transition-all duration-300 ease-in-out cursor-pointer hover:text-[#bb58557c]">
                PICK ME
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}