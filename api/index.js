const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Maintenance | Service Update</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
      <style>
        :root {
          --primary-gradient: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          --secondary-gradient: linear-gradient(135deg, #4776E6 0%, #8E54E9 100%);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: var(--primary-gradient);
          background-size: 400% 400%;
          color: white;
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          text-align: center;
          animation: gradientShift 15s ease infinite;
          overflow-x: hidden;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 800px;
        }
        
        .box {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 90%;
          max-width: 650px;
          transform: translateY(0);
          animation: float 6s ease-in-out infinite;
          margin-bottom: 40px;
        }
        
        h1 {
          font-size: 2.8rem;
          margin-bottom: 20px;
          font-weight: 600;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite;
        }
        
        h2 {
          font-weight: 300;
          font-size: 1.4rem;
          line-height: 1.7;
          max-width: 550px;
          margin: 0 auto;
        }
        
        .icon {
          font-size: 4rem;
          margin-bottom: 25px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
          animation: bounce 3s infinite;
        }
        
        .progress-container {
          width: 100%;
          max-width: 500px;
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          margin: 40px auto 25px;
          overflow: hidden;
        }
        
        .progress-bar {
          height: 100%;
          width: 45%;
          background: white;
          border-radius: 10px;
          animation: progress 3.5s infinite ease-in-out;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }
        
        .status {
          display: inline-block;
          margin-top: 15px;
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          font-size: 0.9rem;
          letter-spacing: 1px;
          animation: statusPulse 4s infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.95; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes progress {
          0% { transform: translateX(-100%); }
          30% { transform: translateX(0%); }
          60% { transform: translateX(100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @media (max-width: 768px) {
          .box { padding: 30px 20px; }
          h1 { font-size: 2.2rem; }
          h2 { font-size: 1.2rem; }
          .icon { font-size: 3rem; }
        }
        
        @media (max-width: 480px) {
          h1 { font-size: 1.8rem; }
          h2 { font-size: 1rem; }
          .icon { font-size: 2.5rem; }
          .progress-container { max-width: 300px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="box">
          <div class="icon">🚧</div>g
          <h1>Server Maintenance</h1>
          <h2>We are currently performing scheduled maintenance. Please check back later. Thank you for your patience!</h2>
          <div class="progress-container">
            <div class="progress-bar"></div>
          </div>
          <div class="status">WORK IN PROGRESS</div>
        </div>
      </div>
    </body>
    </html>
  `);
});

module.exports = app;
