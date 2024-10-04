import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Slider from "../components/Slider";
import sale1 from "../assets/sale1.jpg";
import sale2 from "../assets/sale2.jpg";
import sale3 from "../assets/sale3.jpg";
import sale4 from "../assets/sale4.jpg";
import sale5 from "../assets/sale5.jpg";
import Explore from "../components/Explore";
import Footer from "../components/Footer";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const images = [sale1,sale2,sale3,sale4,sale5];

  const [loading, Setloading] = useState(false);
  const [posts, Setposts] = useState([]);

  async function fetchUrl() {
    Setloading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      Setposts(data);
    } catch (e) {
      console.log("fetch nhi hua");
      Setposts([]);
    }
    Setloading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>   
        <div className="min-h-[300px] sm:h-[590px] overflow-hidden object-cover block"><Slider images={images}/></div>
        <div><Explore/></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px] w-11/12 mx-auto space-y-5 sm:space-y-10 space-x-5 min-h-[80vh] pb-20 pr-2 ">
          {
            posts.map((post) => <Product key={post.id} post={post} />)
          }
        </div>
        <div><Footer/></div>
        </div>
        
      ) : (
        <div className="flex justify-center items-center">No Data Found</div>
      )}
    </div>
  );
};

export default Home;
