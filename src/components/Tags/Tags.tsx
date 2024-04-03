import "./Tags.sass";

const Tags = (props: { tags: string[] }) => {
  return (
    <div className="tags-container">
      {props.tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
