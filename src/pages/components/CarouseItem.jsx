import Carousel from 'react-bootstrap/Carousel'
import img from "../../assets/flaccid-anemone-6203188_1920.jpg";
const CarouselItem=()=>{
    return(
        <Carousel className="">
            <Carousel.Item interval={5000}>
                <img
                    className="w-full h-72"
                    src={img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="w-full h-72"
                    src={img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default CarouselItem;