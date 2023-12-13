import classes from "./button.module.scss";
import { ICard } from "../../models/ICard";
import { SERVER_URL } from "../../utils/helpers";

const Button = ({ data }: ICard) => {

    return (
        <div className={classes.container} >
            {data?.map((button: any) => (

                <button key={button._id} className={classes.btn}>
                    <img src={SERVER_URL + button.image} alt="btn" />
                    <p>{button.screen_name}</p>
                </button>
            )
            )}




        </div>
    );
};
export default Button;