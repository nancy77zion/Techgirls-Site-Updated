
import lady from "../assets/images/lady.png";
import cert from "../assets/images/shape-1.svg";
import book from "../assets/images/shape-3.svg";
import '../index.css';

const Home = () => {

 

  return (
    <div className=" px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 md:pt-6 overflow-hidden">
        <div className="mt-4 md:mt-0">
          <span className="absolute right-96 animate-pulse">
            <img src={cert} alt="" />
          </span>
          <span className="absolute  bottom-2 left-36 animate-bounce"> 
            <img src={book} alt=""/>
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome to Tech<span className="text-success">Girls</span>
          </h1>
          <h5 className="text-base md:text-lg">
            Now learning from anywhere, and build a bright career
          </h5>
          <p className="pt-3 text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vitae
            mollitia tenetur corporis. Natus ex nemo dicta obcaecati, sapiente,
            ut voluptate ratione modi iure accusantium similique, cupiditate
            dolores. Corrupti, dolorem!
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <img src={lady} alt="lady" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
