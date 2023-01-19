import Firstorder from "./Firstorder";
import GeneralDiscount from "./GeneralDiscount";


function Discount(){

    return(
        <div>
            <Firstorder Firstorderdiscount="50" style= {{padding:"33rem"}}/>
            <GeneralDiscount GeneralDiscount="30" style= {{padding:"33px"}}/>
        </div>
    )

}

export default Discount;