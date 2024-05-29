interface IProfileCard {
  img: string;
  name: string;
  occupation: string;
  description: string;
}
export const ProfileCard: React.FC<IProfileCard> = ({
  img,
  name,
  occupation,
  description,
}) => {
  return (
    <article>
      <figure>
        <img src={img} />
        <h3>{name}</h3>
        <span>{occupation}</span>
        <p>{description}</p>
        <button>Contact me</button>
        <div></div>
      </figure>
    </article>
  );
};
