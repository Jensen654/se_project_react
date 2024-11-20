import "../blocks/ToggleSwitch.css";

function ToggleSwitch() {
  const onClick = () => {};

  return (
    <>
      <input type="checkbox" className="toggle-temperature__button" />

      <label className="toggle-temperature__label">
        <span className="toggle-temperature__span" />
        <p className="toggle-temperature__f toggle-temperature__text">F</p>
        <p className="toggle-temperature__c toggle-temperature__text">C</p>
      </label>
    </>
  );
}

export default ToggleSwitch;
