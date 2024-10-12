import CountryList from './components/countryList';

const Home = () => {
  return (
    <div>
      <h1 className='homeTitle'>Country Info App</h1>
      <p className='subtitle'>Select any Country to see more information</p>
      <CountryList />
    </div>
  );
};

export default Home;
