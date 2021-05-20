import NewsCard from "../components/NewsCard";
const News=()=>{
    return(
        <>
            <div className="grid grid-cols-3">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        </>
    )
}
export default News;