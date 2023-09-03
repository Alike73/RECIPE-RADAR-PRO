import { useEffect, useState } from "react";


const Footer = () => {

  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear((new Date()).getFullYear());
  }, [])

  return (
    <div className="my_footer">
      <div className="container">
        <footer className="py-5">
          <p className="text-center text-body-secondary">
          © { year } Created with <i className="bi bi-heart-fill mx-2" /> 
          by
          <a className="footer_link ms-2" href="https://github.com/Alike73" target="_blank" rel="noreferrer">
            AlecDev
          </a> 
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer;