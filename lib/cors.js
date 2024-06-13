export function applyCors(req, res) {
    //CORS
    res.setHeader('Access-Control-Allow-Origin', 'https://trusted.domain.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return true;
    }
    return false;
  }