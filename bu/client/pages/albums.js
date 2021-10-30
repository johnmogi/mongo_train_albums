// albums will be populated at build time by getStaticProps()
function List({ albums }) {
  return (
    <table>
      <tbody>
        {albums.map((album, i) => (
          <tr key={i} id={i}>
            <td>{album.albumName}</td>
            <td>{album.albumImage}</td>
            <td>{album.artist}</td>
            <td>{album.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:4000/api/albums");
  const albums = await res.json();

  // By returning { props: { albums } }, the Blog component
  // will receive `albums` as a prop at build time
  return {
    props: {
      albums,
    },
  };
}

export default List;
