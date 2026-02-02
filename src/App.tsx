function App() {
  (window as any).Telegram?.WebApp?.ready()
  const user = (window as any).Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <div className="text-large-border p-4">
      <h1>Hello World{user?.first_name}</h1>
    </div>
  )
}

export default App
