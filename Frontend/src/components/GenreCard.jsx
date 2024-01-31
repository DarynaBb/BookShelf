
const GenreCard = ({ name, image, onSelect }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={image} alt={name} className="mb-2" />
            <div>{name}</div>
            <button onClick={() => onSelect(name)}>Als Lieblingsgenre auswählen</button>
        </div>
    );
};

export default GenreCard;
