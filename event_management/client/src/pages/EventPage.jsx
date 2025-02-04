import { useState, useEffect } from "react";
import { Card, CardContent, Button } from '@mui/material';
import "../styles/EventPage.css";

function EventsPage() {
  const [events, setListOfEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Entertainment", "Business", "Art", "Food"];

  // Fetch events from backend when component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events/all"); // Update API URL if needed
        const data = await response.json();
        setListOfEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Filter events based on category
  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="events-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Filter by Category</h3>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${selectedCategory === category ? "selected-category" : ""}`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card key={event.id} className="event-card">
              <CardContent>
                <h3>{event.name}</h3>
                <p>{event.category}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}

export default EventsPage;
