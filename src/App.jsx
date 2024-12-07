import React, { useState } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';

const Dropdown = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState(""); 

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value); 
    onOptionChange(value); 
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose an option</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option> 
        <option value="Dumbbell">Dumbbell</option>
        <option value="Barbell">Barbell</option>
        <option value="Machine">Machine</option>
      </select>
    </div>
  );
};



const App = () => {
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [activeImage, setActiveImage] = useState(null); 
  const [activeTip, setActiveTip] = useState(null); 
   const [randomWorkout, setRandomWorkout] = useState([])


  const workoutItems = [
    { png: "/images/barbell-bench.png", exercise: "barbell bench", type: "Barbell" },
    { png: "/images/dumbbell-bench-press.png", exercise: "dumbbell bench", type: "Dumbbell" },
    { png: "/images/cable-chest-fly.png", exercise: "machine cable chest fly", type: "Machine" },
    { png: "/images/barbell-incline-bench.png", exercise: "barbell incline bench", type: "Barbell" },
    { png: "/images/barbell-decline-bench.png", exercise: "barbell decline bench", type: "Barbell" },
    { png: "/images/barbell-squat.png", exercise: "barbell squat", type: "Barbell" },
    { png: "/images/dumbbell-bulgarian-squat.png", exercise: "dumbbell bulgarian squat", type: "Dumbbell" },
    { png: "/images/leg-extension.png", exercise: "machine leg extension", type: "Machine" },
    { png: "/images/barbell-romanian-deadlift.png", exercise: "barbell romanian deadlift", type: "Barbell" },
    { png: "/images/nordic-hamstring-curl.png", exercise: "machine nordic hamstring curl", type: "Machine" },
    { png: "/images/barbell-row.png", exercise: "barbell row", type: "Barbell" },
    { png: "/images/barbell-deadlift.png", exercise: "barbell deadlift", type: "Barbell" },
    { png: "/images/lateral-pulldown.png", exercise: "machine lateral pulldown", type: "Machine" },
    { png: "/images/machine-lateral-row.png", exercise: "machine lateral row", type: "Machine" },
    { png: "/images/dumbbell-lateral-row.png", exercise: "dumbbell lateral row", type: "Dumbbell" 

    },
  ];

  const workoutTips = [
    {
      exercise: "barbell bench", 
      tips: "1. Keep your feet flat on the ground. 2. Grip the bar slightly wider than shoulder-width. 3. Lower the bar to mid-chest level. 4. Keep your elbows at a 45-degree angle to your torso. 5. Press the bar back up, fully extending your arms."
    },
    {
      exercise: "dumbbell bench",
      tips: "1. Hold a dumbbell in each hand at chest level. 2. Keep your feet firmly on the ground. 3. Lower the dumbbells to your sides, maintaining control. 4. Press the dumbbells back up until your arms are fully extended. 5. Avoid locking your elbows at the top."
    },
    {
      exercise: "machine cable chest fly",
      tips: "1. Sit in the machine with your back straight. 2. Adjust the handles to shoulder height. 3. Bring the handles together in front of your chest. 4. Keep a slight bend in your elbows throughout the motion. 5. Slowly return to the starting position."
    },
    {
      exercise: "barbell incline bench",
      tips: "1. Set the bench to a 30-45 degree incline. 2. Grip the bar slightly wider than shoulder-width. 3. Lower the bar to the upper chest. 4. Keep your elbows at a 45-degree angle. 5. Press the bar back up until your arms are fully extended."
    },
    {
      exercise: "barbell decline bench",
      tips: "1. Secure your feet under the pads of the decline bench. 2. Grip the bar slightly wider than shoulder-width. 3. Lower the bar to the lower chest. 4. Keep your back arched slightly for stability. 5. Press the bar back up to full extension."
    },
    {
      exercise: "barbell squat",
      tips: "1. Stand with your feet shoulder-width apart. 2. Rest the barbell on your upper traps, not your neck. 3. Keep your chest up and core engaged. 4. Squat down until your thighs are parallel to the floor. 5. Push through your heels to return to standing."
    },
    {
      exercise: "dumbbell bulgarian squat",
      tips: "1. Place your back foot on a bench or elevated surface. 2. Hold a dumbbell in each hand by your sides. 3. Lower your body until your front thigh is parallel to the floor. 4. Keep your torso upright throughout the motion. 5. Push through your front heel to return to standing."
    },
    {
      exercise: "machine leg extension",
      tips: "1. Adjust the machine so your knees are aligned with the pivot point. 2. Place your feet under the pad and grip the handles. 3. Extend your legs fully without locking your knees. 4. Lower the weight slowly to the starting position. 5. Focus on controlling the motion."
    },
    {
      exercise: "barbell romanian deadlift",
      tips: "1. Stand with the barbell over your midfoot. 2. Grip the bar just outside your legs. 3. Keep a slight bend in your knees. 4. Hinge at your hips, lowering the bar down your thighs. 5. Squeeze your glutes to return to standing."
    },
    {
      exercise: "machine nordic hamstring curl",
      tips: "1. Secure your ankles under the pad. 2. Keep your torso upright and engage your core. 3. Slowly lower your torso forward, controlling the descent. 4. Use your hamstrings to pull yourself back up. 5. Avoid jerking or losing control during the movement."
    },
    {
      exercise: "barbell row",
      tips: "1. Stand with your feet shoulder-width apart. 2. Grip the barbell slightly wider than shoulder-width. 3. Bend your knees slightly and hinge forward at the hips. 4. Pull the barbell to your lower chest. 5. Lower the bar back down under control."
    },
    {
      exercise: "barbell deadlift",
      tips: "1. Stand with the barbell over your midfoot. 2. Grip the bar just outside your knees. 3. Keep your back straight and chest up. 4. Drive through your heels to lift the bar. 5. Lower the bar back to the ground under control."
    },
    {
      exercise: "machine lateral pulldown",
      tips: "1. Adjust the pad to secure your thighs. 2. Grip the bar slightly wider than shoulder-width. 3. Pull the bar down to your upper chest. 4. Keep your elbows close to your sides. 5. Slowly return the bar to the starting position."
    },
    {
      exercise: "machine lateral row",
      tips: "1. Sit with your chest against the pad and feet flat. 2. Grip the handles with your palms facing in. 3. Pull the handles toward your torso. 4. Squeeze your shoulder blades together at the end. 5. Slowly return to the starting position."
    },
    {
      exercise: "dumbbell lateral row",
      tips: "1. Hold a dumbbell in each hand with a neutral grip.  2. Bend your knees slightly and hinge forward at the hips. 3. Pull the dumbbells toward your torso. 4. Squeeze your shoulder blades together at the top. 5. Lower the dumbbells back to the starting position."
    }
  ];
  
  

  const filteredWorkouts =
    selectedEquipment === ""
      ? workoutItems 
      : workoutItems.filter((workout) => workout.type === selectedEquipment);
    

  const handleImageClick = (exercise) => {
    if (activeImage === exercise) {
      setActiveImage(null); 
    } else {
      setActiveImage(exercise);
      setActiveTip(exercise);
    }
  };

  const [weightInput, setWeightInput] = useState(''); // For weight input
  const [repsInput, setRepsInput] = useState(''); // For reps input
  const [oneRepMax, setOneRepMax] = useState(null); // To store and display the calculated one-rep max

  const handleWeightChange = (event) => {
    setWeightInput(event.target.value); // Update weight input value
};

const handleRepsChange = (event) => {
    setRepsInput(event.target.value); // Update reps input value
};

const calculateOneRepMax = () => {
  if (weightInput.trim() !== '' && repsInput.trim() !== '') {
      const weight = parseFloat(weightInput); // Parse weight as a number
      const reps = parseInt(repsInput, 10); // Parse reps as an integer
      if (reps > 0) {
          const calculatedMax = weight * (1 + reps / 30); // Epley Formula
          setOneRepMax(calculatedMax.toFixed(2)); // Round to 2 decimal places
      } else {
          setOneRepMax('Reps must be greater than 0');
      }
      setWeightInput(''); // Clear weight input
      setRepsInput(''); // Clear reps input
  } else {
      setOneRepMax('Please enter valid weight and reps');
  }
};

const handleRandomWorkout = () => {
  const shuffledWorkouts = [...filteredWorkouts].sort(() => 0.5 - Math.random());
  const selectedWorkouts = shuffledWorkouts.slice(0, 3);

  const workoutWithSetsReps = selectedWorkouts.map((workout) => ({
    ...workout,
    sets: Math.floor(Math.random() * 3) + 3,
    reps: Math.floor(Math.random() * 5) + 8, 
  }));
  setRandomWorkout(workoutWithSetsReps);
};

  return (
    <div>
      <div className="dropDownDiv">
        <div className="dropdown">
          <Dropdown onOptionChange={setSelectedEquipment} />
        </div>
      </div>
      <div className="workoutContainer">
        {filteredWorkouts.map((workout) => (
          <CreateWorkout
            key={workout.exercise}
            png={workout.png}
            exercise={workout.exercise}
            isActive={activeImage === null || activeImage === workout.exercise} 
            onClick={handleImageClick}
          />
        ))}
      </div>
      <div className="workoutTipsContainer">
        {workoutTips.map((workout) => (
          workout.exercise === activeImage ?  (
        <CreateWorkoutTip exercise={workout.tips}/>
           ) : null
           
        ))}
      </div>
        <div className="workoutCalculationContainer">
      <div>
                <input
                    placeholder="Enter weight"
                    value={weightInput}
                    onChange={handleWeightChange}
                    type="number"
                    className="repInput"
                />
            </div>
            <div>
                <input
                    placeholder="Enter reps"
                    value={repsInput}
                    onChange={handleRepsChange}
                    type="number"
                    className="repInput"
                />
            </div>
            <div>
                <button onClick={calculateOneRepMax} className="repCalculatorButton">
                    Calculate 
                </button>
            </div>
            <div className="repmaxText"> 
                <p>One-Rep Max: {oneRepMax ? `${oneRepMax} lbs` : 'Enter values to calculate.'}</p>

            </div>
        </div>

        
        <div className="randomWorkoutButtonContainer">
        <button onClick={handleRandomWorkout} className="randomWorkoutButton">
        Generate Random Workout
      </button>
      </div>
      
      <div className="randomWorkoutContainer">
        {randomWorkout.length > 0 && (
          <div>
            <h2 style={{textAlign: 'center'}}>Your Random Workout</h2>
            <div className="workoutList">
            {randomWorkout.map((workout, index) => (
              <div key={index} className="randomWorkoutItem">
                <img src={workout.png} alt={workout.exercise} width="100" />
                <p>{workout.exercise}</p>
                <p>{workout.sets} sets of {workout.reps} reps</p>
              </div>
            ))}
          </div>
          </div>
        )}
        </div>
          
        

    </div>
  );
};

function CreateWorkout({ png, exercise, isActive, onClick }) {
  if (!isActive) return null; 

  return (
    <div className="workout" onClick={() => onClick(exercise)} style={{ cursor: 'pointer' }}>
      <img
        src={png}
        alt={exercise}
        style={{ width: '100px', height: '100px' }}
      />
      <p>{exercise}</p>
    </div>
  );
}

function CreateWorkoutTip({exercise}) {
  return (
    <div className="workoutTips">
      <p> 
        {exercise}
      </p>
    </div>
  );
}

export default App;
