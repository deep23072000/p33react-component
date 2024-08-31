import photography from './assets/image/photography.avif';

const Hero = () => {
    let style1 = { 
        color: "yellow",
         backgroundColor: "black" 
        }
  return (
    <>
      <div>
        <h1 style={style1}>
            <img src={photography}></img>
          This is Hero section
        </h1>
      </div>
    </>
  );
};

export default Hero;
