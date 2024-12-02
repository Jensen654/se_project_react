import "../blocks/ToggleSwitch.css";

function ToggleSwitch({ value, onTempClick }) {
  return (
    <label className="toggle-temperature__label">
      <input
        onChange={onTempClick}
        checked={value}
        type="checkbox"
        className="toggle-temperature__button"
      />

      <span className="toggle-temperature__span" />
      <p className="toggle-temperature__f toggle-temperature__text">F</p>
      <p className="toggle-temperature__c toggle-temperature__text">C</p>
    </label>
  );
}

export default ToggleSwitch;
