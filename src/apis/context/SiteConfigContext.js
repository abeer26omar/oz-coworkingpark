
import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const SiteConfigContext = createContext();

const SiteConfigProvider = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState(null);

  useEffect(() => {
    async function fetchSiteConfig() {
        const formData = new FormData();
        formData.append('server_key', process.env.REACT_APP_SERVER_KEY);
        
        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/get-site-settings`,
            data: formData,
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        };
        const response = await axios(config)
        setSiteConfig(response.data.data.config);
    }

    fetchSiteConfig();
  }, []);

  return (
    <SiteConfigContext.Provider value={siteConfig}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export { SiteConfigContext, SiteConfigProvider };