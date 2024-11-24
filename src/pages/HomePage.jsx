import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscriptionForm from '../components/SubscriptionForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      {/* Landing Section */}
      <section 
        className="vh-100 d-flex align-items-center text-white" 
        style={{
          backgroundImage: `url('https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index1.jpg?raw=true')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-5">
              <h1 className="display-4 fw-bold">Perfume your day</h1>
              <p className="lead mb-4">A perfume is like a piece of clothing, a message, a way of presenting oneself a costume that according to the person who wears it.</p>
              <a href="#" className="btn btn-outline-light rounded-pill px-4 py-2 fs-5">Shop now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-5">
        <div className="container">
          {/* Gabrielle CHANEL */}
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 px-0">
              <img 
                src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index2.jpg?raw=true" 
                alt="Gabrielle CHANEL" 
                className="w-full img-fluid"
              />
            </div>
            <div className="col-md-6 order-md-1" style={{padding:110}}>
              <div className="p-4">
                <h3 className="fs-2 fw-bold">Gabrielle CHANEL</h3>
                <p className="fs-5 mb-3">全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。</p>
                <a href="#" className="text-decoration-none" style={{color: '#AC8A46'}}>查看更多</a>
              </div>
            </div>
          </div>

          {/* Five O'clock */}
          <div className="row align-items-center">
            <div className="col-md-6 px-0">
              <img 
                src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index3.png?raw=true" 
                alt="Five O'clock Au Gingembre" 
                className="img-fluid w-100"
              />
            </div>
            <div className="col-md-6" style={{ padding:110 }}>
              <div className="p-4">
                <h3 className="fs-2 fw-bold">Five O'clock Au Gingembre</h3>
                <p className="fs-5 mb-3">生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。</p>
                <a href="#" className="text-decoration-none" style={{color: '#AC8A46'}}>查看更多</a>
              </div>
            </div>
          </div>

          {/* Chanel n5 */}
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 px-0">
              <img 
                src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index4.jpg?raw=true"
                alt="Gabrielle CHANEL" 
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 order-md-1" style={{ padding:110 }}>
              <div className="p-4">
                <h3 className="fs-2 fw-bold">CHANEL N°5</h3>
                <p className="fs-5 mb-3">N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。</p>
                <a href="#" className="text-decoration-none" style={{color: '#AC8A46'}}>查看更多</a>
              </div>
            </div>
          </div>

          {/* plan a free online training */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 px-0">
              <img 
                src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index5.jpg?raw=true" 
                alt="Five O'clock Au Gingembre" 
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 px-0">
              <div style={{ padding:110 }}>
                <div className="mb-5">
                  <h3 className="fs-4 fw-bold">1.<br/> Levels of Preventive Maintenance Compliance</h3>
                  <p className="fs-6 mb-3">The core idea of preventative maintenance is the performance of proactive actions against unscheduled downtime in order to identify potential defects before they evolve into something more severe.</p>
                </div>
                <div className="mb-5">
                  <h3 className="fs-4 fw-bold">2.<br/>Percentage of Planned Maintenance</h3>
                  <p className="fs-6 mb-3">The planned maintenance percentage is the total planned maintenance time in your CMMS software over a date range over the total number of hours of a service performed by the technicians.</p>
                </div>
                <div className="mb-5">
                  <h3 className="fs-4 fw-bold">3.<br/> Critical percentage of planned maintenance</h3>
                  <p className="fs-6 mb-3">Calculating the critical percentage of planned maintenance will help you prioritize the most important operations that should be performed immediately.</p>
                </div>
                <a href="#" className="text-decoration-none border border-2 border-black rounded-5 py-2 d-block text-center fs-5" style={{color: '#000'}}>Plan a free online training</a>
              </div>
            </div>
          </div>
          </div>
          {/* Products Grid */}
          <div className="bg-gray py-5 mt-5">
            <div className="container">
              <div className="row g-4">
                {/* Poppy & Barley */}
                <div className="col-md-4">
                  <div className="card border-0 bg-transparent">
                    <img 
                      src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index6.jpg?raw=true" 
                      alt="Poppy & Barley" 
                      className="card-img-top"
                      style={{height: '540px', objectFit: 'cover'}}
                    />
                    <div className="card-body">
                      <h3 className="fs-4 fw-bold">Poppy & Barley</h3>
                      <a href="#" className="text-dark text-decoration-none">Jo Malone</a>
                      <div>
                        <del className="text-muted me-2">NT$1,580</del>
                        <span>NT$1,380</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Wash */}
                <div className="col-md-4">
                  <div className="card border-0 bg-transparent">
                    <img 
                      src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index7.jpg?raw=true" 
                      alt="Body Wash" 
                      className="card-img-top"
                      style={{height: '540px', objectFit: 'cover'}}
                    />
                    <div className="card-body">
                      <h3 className="fs-4 fw-bold">Body Wash</h3>
                      <a href="#" className="text-dark text-decoration-none">Curology</a>
                      <div>
                        <span>NT$1,580</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apple Cider Vinegar Capsule */}
                <div className="col-md-4">
                  <div className="card border-0 bg-transparent">
                    <div className="position-relative">
                      <img 
                        src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index8.jpg?raw=true" 
                        alt="Apple Cider Vinegar Capsule" 
                        className="card-img-top"
                        style={{height: '540px', objectFit: 'cover'}}
                      />
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
                        <span className="text-white fs-4">Sold out</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="fs-4 fw-bold">Apple Cider Vinegar Capsule</h3>
                      <a href="#" className="text-dark text-decoration-none">Tonik</a>
                      <div>
                        <span>NT$1,580</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Bottle Recycling */}
            <div className="row align-items-center py-5">
              <div className="col-md-8">
                <img 
                  src="https://github.com/rochelwang1205/D-Perfume-react/blob/main/src/images/index9.jpg?raw=true" 
                  alt="Bottle-recycling" 
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <h3 className="fs-2 fw-bold">Bottle-Recycling</h3>
                <h4 className="fs-5 mb-3">Recycle your used empty bottles and be rewarded!</h4>
                <p className="mb-3">For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.</p>
                <a href="#" className="text-decoration-none" style={{color: '#AC8A46'}}>查看更多</a>
              </div>
            </div>
          </div>
      </section>
      <SubscriptionForm />
      <Footer />
    </>
  );
};

export default HomePage;