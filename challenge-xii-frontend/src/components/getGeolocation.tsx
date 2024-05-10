import axios from "axios";
import { useEffect, useState } from "react";

interface GeoData {
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

const GetGeolocation = () => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<GeoData>(
          "http://ip-api.com/json/?fields=61439"
        );
        setGeoData(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return [geoData?.city, geoData?.country];
};

export default GetGeolocation;
