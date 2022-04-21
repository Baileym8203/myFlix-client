import react from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';

function VisibilityFilterInput(props) {
return (
<Col style={{display: "flex", justifyContent: "end", marginTop: "-5px"}}>
<Form.Control
style={{width: "450px", marginTop: "0.5em"}}
onChange={e => props.setFilter(e.target.value)}
value={props.visibilityFilter}
placeholder="filter"
 />
 </Col>
)
}
 
export default connect(
null,
{ setFilter }
)(VisibilityFilterInput);