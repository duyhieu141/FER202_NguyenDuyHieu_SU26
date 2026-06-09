function People() {
  const people = [
    { id: 1, name: 'Hoàng Hoài Nam', age: 50 },
    { id: 2, name: 'Ngô Tuấn Hới', age: 13 },
    { id: 3, name: 'Ngô Hới Hới', age: 15 },
    { id: 4, name: 'Hoàng Hoài ', age: 90 },
    { id: 5, name: 'Ngô Tuấn Tuấn', age: 101 },
    { id: 6, name: 'Ngô Ngô Hới', age: 21 },
    { id: 7, name: 'Võ Văn Không Hay', age: 23 },
    { id: 8, name: 'Võ Không Giỏi ', age: 25 },
    { id: 9, name: 'Văn Không Giỏi', age: 37 },
    { id: 10, name: 'Võ Văn Thanh Phong', age: 29 },
  ];

  const teenager = people.find(
    (person) => person.age >= 13 && person.age <= 19
  );

  const sortedPeople = [...people].sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h2>Danh sách người dùng</h2>

      <ol>
        {sortedPeople.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age} tuổi
          </li>
        ))}
      </ol>

      <h2>Teenager đầu tiên</h2>

      {teenager ? (
        <p>
          {teenager.name} - {teenager.age} tuổi
        </p>
      ) : (
        <p>No result</p>
      )}
    </div>
  );
}

export default People;  