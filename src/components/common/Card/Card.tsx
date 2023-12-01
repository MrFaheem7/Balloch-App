import classes from "./Card.module.scss";
import { ICard } from "../../../models/ICard";
const Card = ({ cardClassName, src, title, description, ...props }: ICard) => {
  let cardClass = classes.card;
  if (cardClassName) {
    cardClass = `${cardClassName} ${cardClass}`
  }
  return (
    <div className={classes.container} {...props}>
      <section className={cardClass}>
        {src && <div><img src={src} alt="mnm" /></div>}
        {title && <h1>{title}</h1>}
        {description && <div className={classes.description}>
          {" "}
          <p>
            {description}
          </p>{" "}
        </div>}
      </section>
    </div>
  );
};

export default Card;
