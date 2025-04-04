import Cloud1 from "./(illustrator_components)/Cloud1";
import Cloud2 from "./(illustrator_components)/Cloud2";
import Logo from "./(shared)/Logo";
import Waves from "./(shared)/Waves";

export default function Page() {
  return (
    <div className="wave-container">
      <Logo className="logo" />
      <Waves className="wave wave--1" />
      <Waves className="wave wave--2" flip />
      <Waves className="wave wave--3" />
      <Cloud1 className="cloud cloud--1" />
      <Cloud2 className="cloud cloud--2" />
      {/* <svg
        id="Camada_3"
        data-name="Camada 3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920.4 51.94"
        className="wave--dragon"
      >
        <path
          d="M0,791a85.6,85.6,0,0,1,27.32-35,86.69,86.69,0,0,1,51.92-16.94,102.87,102.87,0,0,1,35,8.2c28.47,12.27,43.43,34.27,49.07,43.72a139.08,139.08,0,0,1,98.48-47,119.86,119.86,0,0,1,91,47,81.15,81.15,0,0,1,69.08-48.09c4.54-.21,27.88-.78,46.45,16.94A62.17,62.17,0,0,1,485.83,791H466.7a39.06,39.06,0,0,0-9.29-18c-12.36-13.4-30-12.72-32.79-12.57a50.19,50.19,0,0,0-29,10.39A49.54,49.54,0,0,0,380.36,791l-59-2.19a73.6,73.6,0,0,0-18.58-15.3,75.23,75.23,0,0,0-38.26-9.84c-7.55-.56-26-.85-44.26,10.39A71.36,71.36,0,0,0,201.33,791H133.89a68.24,68.24,0,0,0-55.74-31.15A49.36,49.36,0,0,0,30.82,791Z"
          transform="translate(0 -739.08)"
        />
        <path
          d="M486.17,791a85.66,85.66,0,0,1,27.32-35,86.69,86.69,0,0,1,51.92-16.94,103.35,103.35,0,0,1,35,8.2c28.47,12.28,43.43,34.28,49.07,43.72a139.19,139.19,0,0,1,98.48-47,119.94,119.94,0,0,1,91,47,81.2,81.2,0,0,1,69.08-48.09c4.54-.2,27.88-.78,46.45,16.94A62.21,62.21,0,0,1,972,791H952.87a39,39,0,0,0-9.29-18c-12.36-13.41-30-12.73-32.79-12.57a50.08,50.08,0,0,0-29,10.38A49.54,49.54,0,0,0,866.53,791l-59-2.19a73.6,73.6,0,0,0-18.58-15.3,75.09,75.09,0,0,0-38.26-9.83c-7.55-.56-26-.86-44.26,10.38A71.53,71.53,0,0,0,687.5,791H620.06a68.24,68.24,0,0,0-55.74-31.15A49.36,49.36,0,0,0,517,791Z"
          transform="translate(0 -739.08)"
        />
        <path
          d="M960.4,791a85.66,85.66,0,0,1,27.32-35,86.69,86.69,0,0,1,51.92-16.94,103.35,103.35,0,0,1,35,8.2c28.47,12.28,43.43,34.28,49.07,43.72a139.19,139.19,0,0,1,98.48-47,119.94,119.94,0,0,1,91,47,81.2,81.2,0,0,1,69.08-48.09c4.54-.2,27.88-.78,46.45,16.94A62.21,62.21,0,0,1,1446.23,791H1427.1a39,39,0,0,0-9.29-18c-12.36-13.41-30-12.73-32.79-12.57a50.08,50.08,0,0,0-29,10.38,49.54,49.54,0,0,0-15.3,20.22l-59-2.19a73.6,73.6,0,0,0-18.58-15.3,75.09,75.09,0,0,0-38.26-9.83c-7.55-.56-26-.86-44.26,10.38A71.53,71.53,0,0,0,1161.73,791h-67.44a68.24,68.24,0,0,0-55.74-31.15A49.36,49.36,0,0,0,991.22,791Z"
          transform="translate(0 -739.08)"
        />
        <path
          d="M1434.57,791a85.66,85.66,0,0,1,27.32-35,86.69,86.69,0,0,1,51.92-16.94,103.35,103.35,0,0,1,35,8.2c28.47,12.28,43.43,34.28,49.07,43.72a139.19,139.19,0,0,1,98.48-47,119.94,119.94,0,0,1,91,47,81.2,81.2,0,0,1,69.08-48.09c4.54-.2,27.88-.78,46.45,16.94A62.21,62.21,0,0,1,1920.4,791h-19.13a39,39,0,0,0-9.29-18c-12.36-13.41-30-12.73-32.79-12.57a50.08,50.08,0,0,0-29,10.38,49.54,49.54,0,0,0-15.3,20.22l-59-2.19a73.6,73.6,0,0,0-18.58-15.3,75.09,75.09,0,0,0-38.26-9.83c-7.55-.56-26-.86-44.26,10.38A71.53,71.53,0,0,0,1635.9,791h-67.44a68.24,68.24,0,0,0-55.74-31.15A49.36,49.36,0,0,0,1465.39,791Z"
          transform="translate(0 -739.08)"
        />
      </svg> */}
    </div>
  );
}
