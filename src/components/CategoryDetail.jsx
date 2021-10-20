function CategoryDetail(props) {
  return (
    <div className="category-detail">
       <section className="category-detail">
        <h2>{props.category.categoryName}</h2> 
       </section>

      <div className="category-content">
        <h2>{props.category.categoryName}</h2>
        <p>{props.category.categoryDescription}</p>
      </div>

      <img src={props.category.categoryImg} alt="" className="category-img"/>
    </div>
  );
}

export default CategoryDetail;
