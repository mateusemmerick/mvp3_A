import { Margin } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ arr }) {
  const location = useLocation();
  const customStyles = {
    marginLeft: '5rem',
    marginTop: '1rem',
    fontFamily: "Roboto",
    fontSize: 'medium'
  }
  if (arr.length === 2) {
    return (
      <div style={customStyles}>
        <Link to='/'>Início</Link>&nbsp;/&nbsp;  
        {arr[0]}
      </div>
    )
  }
  else if (arr.length === 4) {
    return (
      <div style={customStyles}>
        <Link to='/'>Início</Link>&nbsp;/&nbsp; 
        <Link to='/servicos'>Serviços</Link>&nbsp;/&nbsp;        
        {arr[2]}
      </div>
    )
  }
  else if (arr.length === 6) {
    const lastPath = '/servicos/' + arr[3];
    return (
      <div style={customStyles}>
        <Link to='/'>Início</Link>&nbsp;/&nbsp; 
        <Link to='/servicos'>Serviços</Link>&nbsp;/&nbsp;       
        <Link to={lastPath}>{arr[2]}</Link>&nbsp;/&nbsp;
        {arr[4]}
      </div>
    )
  }



}
