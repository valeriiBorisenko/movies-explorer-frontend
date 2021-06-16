function Paragraph({ title, sectionClass }) {
  return (
    <h2 className={`paragraph ${sectionClass}`}>{title}</h2>
  );
}

export default Paragraph;
