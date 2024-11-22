import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <>
      {/* Landing Section */}
      <section 
        className="vh-100 d-flex align-items-center text-white" 
        style={{
          backgroundImage: `url('https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index1.jpg?raw=true')`,
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
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-2">
              <img 
                src="src/images/index2.jpg" 
                alt="Gabrielle CHANEL" 
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <div className="p-4">
                <h3 className="fs-2 fw-bold">Gabrielle CHANEL</h3>
                <p className="fs-5 mb-3">全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。</p>
                <a href="#" className="text-decoration-none" style={{color: '#AC8A46'}}>查看更多</a>
              </div>
            </div>
          </div>

          {/* Five O'clock */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img 
                src="src/images/index3.png" 
                alt="Five O'clock Au Gingembre" 
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <h3 className="fs-2 fw-bold">Five O'clock Au Gingembre</h3>
                <p className="fs-5 mb-3">生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。</p>
                <a href="#" className="text-decoration-none" style={{color: '#AC8A46'}}>查看更多</a>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="bg-light py-5 mt-5">
            <div className="container">
              <div className="row g-4">
                {/* Poppy & Barley */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img 
                      src="src/images/index6.jpg" 
                      alt="Poppy & Barley" 
                      className="card-img-top"
                      style={{height: '540px', objectFit: 'cover'}}
                    />
                    <div className="card-body">
                      <h3 className="fs-4 fw-bold">Poppy & Barley</h3>
                      <a href="#" className="text-dark text-decoration-none">Jo Malone</a>
                      <div>
                        <span className="text-danger me-2">NT$1,380</span>
                        <del className="text-muted">NT$1,580</del>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Wash */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img 
                      src="src/images/index7.jpg" 
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
                  <div className="card border-0">
                    <div className="position-relative">
                      <img 
                        src="src/images/index8.jpg" 
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

          {/* Bottle Recycling */}
          <div className="row align-items-center py-5">
            <div className="col-md-8">
              <img 
                src="src/images/index9.jpg" 
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
    </>
  );
};

export default HomePage;