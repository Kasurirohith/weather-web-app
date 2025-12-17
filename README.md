# weather-web-app
A web application to display weather information using weather API

## Description

This is a modern weather web application that allows users to search for real-time weather information for any city in the world. The application features a clean, responsive design with gradient backgrounds and smooth animations.

## Features

- 🌍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- 💨 Show wind speed information
- 💧 Display humidity levels
- 🔽 Show atmospheric pressure
- 📱 Responsive design for all devices
- ✨ Beautiful UI with gradient backgrounds and animations
- ⚡ Real-time weather data from OpenWeatherMap API

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling with gradients, flexbox, and animations
- **JavaScript (ES6+)** - API integration and DOM manipulation
- **OpenWeatherMap API** - Weather data provider

## File Structure

```
weather-web-app/
├── index.html      # Main HTML file
├── style.css       # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Setup Instructions

### 1. Get an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate your API key from the dashboard

### 2. Configure the Application

1. Open `script.js` file
2. Replace `'YOUR_API_KEY'` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

### 3. Run the Application

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
3. Navigate to `http://localhost:8000` in your browser

## Usage

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the weather information displayed:
   - City name and country
   - Current temperature
   - Weather description
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure

## API Reference

This application uses the OpenWeatherMap Current Weather Data API:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**:
  - `q`: City name
  - `appid`: Your API key
  - `units`: metric (for Celsius)

## Screenshots

*(Add screenshots of your application here)*

## Future Enhancements

- [ ] 5-day weather forecast
- [ ] Geolocation support
- [ ] Weather icons/animations
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Search history
- [ ] Multiple city comparison
- [ ] Dark/Light theme toggle

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Kasurirohith**
- GitHub: [@Kasurirohith](https://github.com/Kasurirohith)

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Inspired by modern weather application designs
