

export function InputFinder({ location, onChangeLocation }) {
    const handleOnChangeLocation = (e) => {
      onChangeLocation(e.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search from location..."
          value={location}
          onChange={handleOnChangeLocation}
        />
      </div>
    );
  }
  