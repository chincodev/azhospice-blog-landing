import React from 'react'
import { Link } from 'gatsby'


const Copyright = () => (
    <>
        <div class="copy-w3pvt">
	        <div class="container py-3">
	    		<div class="row">
	    			<div class="col-lg-12 w3ls_footer_grid1_left text-lg-center text-center">
						<Link to="/legal/privacy" className='foot-links' >Privacy policy</Link>&nbsp; | &nbsp;
						<Link to="/legal/terms" className='foot-links' >Terms of condition</Link>
	    				<p>&copy; 2020 A-Z Hospice Inc.</p>
	    			</div>
	    		</div>
	    	</div>
	    </div>
		<span 
			onClick={()=>{
				window.scrollTo(0, 0)
			}} 
			class="move-top" 
			aria-label="Move to top">
		</span>
    </>
)
export default Copyright