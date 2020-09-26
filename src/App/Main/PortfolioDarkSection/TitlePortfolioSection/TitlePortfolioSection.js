import { keys } from "lodash"
import React, { Component, Fragment, useEffect } from "react"
import {Link} from "react-router-dom"


const TitlePortfolioSection= ({
    like
}) =>{     
        return(
        <Fragment>
            <div className="column_caption">
                <p className="title">about portfolio</p>
                <div className="subtitle" >
                    Latest Completed Project
                    <div className="liked_post_btn">
                        <button><Link to="/liked_post"> liked posts: {
                            keys(like).reduce((accObj, id)=>(
                                accObj + like[id]
                            ),0 )
                        }                  
                            </Link></button>
                    </div>
                </div>
                    <div className="yellow_line"></div>
            </div>
        </Fragment>
    )
}

export default TitlePortfolioSection