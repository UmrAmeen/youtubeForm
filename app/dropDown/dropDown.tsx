export default function DropDown({ rows }: any) {
  return (
    <label>
      channel:
      <select name="channel">
        {rows.map((row) => (
          <option key={row.id} value={row.id}>
            {row.name}
          </option>
        ))}
      </select>
    </label>
  );
}
