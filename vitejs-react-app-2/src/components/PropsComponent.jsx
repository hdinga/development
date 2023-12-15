export default function PropComponent(data) {

  //const { name, grade, year } = data;
  const { name, grade, year } = data;
  return (
    <>
      <p>Student: { name }</p>
      <p>Grade: { grade }</p>
      <p>Year: { year }</p>
    </>
  )
}