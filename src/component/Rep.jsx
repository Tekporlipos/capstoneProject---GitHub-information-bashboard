import { Link, useSearchParams } from 'react-router-dom';
import {Badge, ListGroup,ProgressBar } from "react-bootstrap";
import { useEffect, useState } from 'react';
import API from '../api/github';
function Rep(props) {
    const [commit, setCommit] = useState(0);
    const [langs, setLang] = useState(0);
    const org = new URL(window.location.href).searchParams.get('org');
   async function get(){
       const cont = await API.getContr(props.token, org?org:props.name, props.value.name);
       const lang = await API.getLanguages(props.token, org?org:props.name, props.value.name);
       setLang(lang)
       if (cont.length > 0) {
           let num = 0;
           for (let b = 0; b < cont.length; b++){
               num += cont[b].contributions;
           }
           setCommit(num)
       }
   }
    

    const colors = ['success', 'warning','primary', 'info', 'default', 'secondary'];

    useEffect(() => {
        get();
    });
    return (<ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
    >
        <div className="ms-2 me-auto fext-1">
            <div className="fw-bold">
                <Link to={"/branches/"+props.value.name+"?org="+props.path} className="lin">
                    {props.value.name}
                </Link>
            </div>
            Updated {props.timeSince(props.value.updated_at)}
            <ProgressBar className='w'>
      { Object.keys(langs).map((value,index)=><ProgressBar label={value} striped title={value+" , "+langs[value]} variant={colors[index]} now={langs[value]} key={value} />)}
    </ProgressBar>
        </div>

        <Badge bg="secondary" className={'fext-1'} pill>
            {commit} commits
        </Badge>
    </ListGroup.Item>);
}
export default Rep;