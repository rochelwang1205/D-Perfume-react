import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 處理訂閱邏輯
    console.log('Submitted email:', email);
  };

  const backgroundStyle = {
    backgroundImage: `url('https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index10.jpg?raw=true')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const customStyles = {
    input: {
      border: '2px solid #916000',
      borderRadius: '4px 0 0 4px',
      padding: '20px 57px 20px 16px',
      boxSizing: 'border-box',
      display: 'inline-block',
      outline: 'none',
    },
    button: {
      border: '2px solid #916000',
      backgroundColor: '#916000',
      borderLeftWidth: 0,
      borderRadius: '0 4px 4px 0',
      padding: '20px 24px',
      cursor: 'pointer',
      boxSizing: 'border-box',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#714e00',
      }
    }
  };

  return (
    <div style={backgroundStyle} className="py-5">
      <div className="container" style={{ maxWidth: '1078px', padding: '312px 16px 112px 16px' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h2 className="mb-4 fw-semibold fs-2">
              記得<br />訂閱以獲取更多資訊！
            </h2>
            <div>
              <form onSubmit={handleSubmit} className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={customStyles.input}
                  required
                />
                <button 
                  type="submit" 
                  className="btn text-white"
                  style={customStyles.button}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#714e00'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#916000'}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;