import VideoPlayer from './components/VideoPlayer'
import './App.css'

function App() {
  return (
    <main className="app">
      <header>
        <h1>Welcome</h1>
        <p>Thank you for taking the time to learn more about me.</p>
      </header>
      
      <VideoPlayer />
      
      <footer>
        <p>Feel free to reach out if you have any questions.</p>
      </footer>
    </main>
  )
}

export default App
