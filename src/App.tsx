
import './App.css'
import SplitText from "@/components/SplitText";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SplitText
        text="coming soon..."
        className="text-8xl font-bold text-center"
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
      />
    </div>
  );
}

export default App;