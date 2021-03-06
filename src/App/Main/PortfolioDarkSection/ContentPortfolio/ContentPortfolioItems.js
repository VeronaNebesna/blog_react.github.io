import React, {useEffect} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import Aos from "aos"
import { add } from "lodash"



const ContentPortfolioItems = ({
    id,
    img,
    headline,
    p1,
    p2,
    category,
    changeCategory,
    isLiked,
    addLike,
    removeLike,
    removeLikedPosts
}) =>{
    useEffect(()=>{
    Aos.init({
        duration:3000
    })
    }, [])  
    return(
        <div  className = { id%2===0 ? "row dark_row content_row reverse_row" :"row dark_row content_row"}
        data-aos= {id%2===0 ? "fade-up-left" : "fade-up-right" }>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                <div className="pic_portfolio">
                    <img src={img}  alt=""/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <div className="desc_portfolio">
                    <div className="headline_desc_portfolio">
                        <p>{headline}</p>
                        <p className="like" onClick={()=> isLiked ? removeLike(id) && removeLikedPosts(id): addLike(id)}> 
                        { isLiked ?  <i class="fas fa-heart"></i>: <i class="far fa-heart"></i>}
                        </p>
                    </div>
                    <div className="title_portfolio">
                        <p>{p1}</p>
                        <p>{p2}</p>
                    </div>
                    <div className="btn_read_more" key={id}>
                        <button><Link to={`/read_more_about/${id}`}>Read more </Link></button>
                        <div className="category_name">
                            Category: 
                            <Link  to="/category" onClick={()=> changeCategory(id,category)}>{category}</Link>           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state, props)=>({
    isLiked:state.likeState[props.id],
    articleCategory: state.categoryList
})
const mapDispatchToProps = (dispatch)=>({
    addLike: (id)=>dispatch({
        type:"LIKE",
        id
    }),
    removeLike: (id)=>dispatch({
        type:"DISLIKE",
        id
    }),
    removeLikedPosts:(id)=>dispatch({
        type:"REMOVE_LIKES_POSTS",
        id,
    }),
    changeCategory: (id, category)=>dispatch({
        type:"changeCategory",
        id,
        category
    })
})
export default connect (
    mapStateToProps,
    mapDispatchToProps
)( ContentPortfolioItems)