export const basicEffect = `function UserStatus() {
  const [isOnline, setIsOnline] = React.useState(false);

  React.useEffect(() => {
    // Simulating an API call
    const checkStatus = () => {
      // In real app, this would be an API call
      setIsOnline(Math.random() > 0.5);
    };

    const interval = setInterval(checkStatus, 2000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return (
    <div>
      Status: {isOnline ? '🟢 Online' : '⚫ Offline'}
    </div>
  );
}`;

export const dataFetching = `function UserProfile() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchUser() {
      try {
        // Simulated API call
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchUser();
  }, []); // Empty dependency array = run once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`; 