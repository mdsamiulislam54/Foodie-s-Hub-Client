import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../ContextApi/userContext";

const OverviewCard = ({ recipe }) => {
  
    const [totalLikes, setTotalLikes] = React.useState(0);
    const {user} = useContext(UserContext)
    
    useEffect(()=>{
        const total = recipe.reduce((acc, curr) => acc + (curr.likeCount || 0), 0);
        setTotalLikes(total);
    },[recipe])

    const totalCategory = recipe.map((item) => item.categories).flat();



  return (
    <div>
      <div className=" flex shadow w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">{(totalLikes /1000).toFixed(1)}K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Recipe</div>
          <div className="stat-value text-secondary">{recipe.length}</div>
          <div className="stat-desc">10% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar avatar-online">
              <div className="w-16 rounded-full">
                <img src={user.photoURL}/>
              </div>
            </div>
          </div>
          <div className="stat-value">{totalCategory.length}</div>
          <div className="stat-title">Total Category</div>
          
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
