const express = require('express');
const { Sequelize, DataTypes, Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const app = express();
app.use(express.json());

// MySQL Database connection
const mysqlSequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// SQL Server Database connection
const sqlServerSequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

// Define Models
const Driver = mysqlSequelize.define('Driver', {
  Driver_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  // Define other attributes similarly
  Driver_name: DataTypes.STRING,
  Driver_lat: DataTypes.FLOAT,
  Driver_lng: DataTypes.FLOAT,
  // Add all other attributes here...
});

const Rider = mysqlSequelize.define('Rider', {
  Rider_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  Rider_name: DataTypes.STRING,
  Rider_phone: DataTypes.STRING,
  Rider_imgUrl: DataTypes.STRING,
  Rider_rating: DataTypes.FLOAT,
  Rider_email: DataTypes.STRING,
  // Add all other attributes here...
});

const Request = mysqlSequelize.define('Request', {
  // Define attributes
});

const Message = mysqlSequelize.define('Message', {
  // Define attributes
});

const KnownPlace = mysqlSequelize.define('KnownPlace', {
  // Define attributes
});

const Card = mysqlSequelize.define('Card', {
  // Define attributes
});

// Helper functions
async function fetchCountryCode() {
  try {
    const response = await axios.get('http://ip-api.com/json');
    return response.data.countryCode || 'NG';
  } catch (error) {
    console.error('Error fetching country code:', error);
    return 'NG';
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

// Express Routes
app.post('/request-ride', async (req, res) => {
  const { user_Loc_coord, des, loco, user_Des_coord, ID, price, cash } = req.body;
  try {
    const rider = await Rider.findByPk(req.body.uid); // Assuming rider UID is passed in body
    const driver = await Driver.findByPk(ID);
    if (driver) {
      await driver.update({ onlineState: false });
      await Request.create({
        // include ride details
      });
      res.status(200).send('Ride requested successfully');
    } else {
      res.status(404).send('Driver not found');
    }
  } catch (error) {
    console.error('Error requesting ride:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/restart-request', async (req, res) => {
  const { ID } = req.body;
  try {
    await Request.update({ cancel: false }, { where: { id: ID } });
    res.status(200).send('Request restarted successfully');
  } catch (error) {
    console.error('Error restarting request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/delete-driver-request/:ID', async (req, res) => {
  const { ID } = req.params;
  try {
    await Request.destroy({ where: { id: ID } });
    res.status(200).send('Driver deleted from request successfully');
  } catch (error) {
    console.error('Error deleting driver from request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/cancel-ride', async (req, res) => {
  const { ID } = req.body;
  try {
    await Request.update({ cancel: true }, { where: { id: ID } });
    res.status(200).send('Ride cancelled successfully');
  } catch (error) {
    console.error('Error cancelling ride:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/push-driver-request', async (req, res) => {
  const { Driver } = req.body;
  try {
    const driverDetails = {
      geohash: Driver.geohash,
      Driver_lat: Driver.Driver_lat,
      Driver_lng: Driver.Driver_lng,
      Driver_id: Driver.Driver_id,
      Driver_name: Driver.Driver_name,
      Driver_car: Driver.Driver_car,
      Driver_imgUrl: Driver.Driver_imgUrl,
      Driver_rating: Driver.Driver_rating,
      distance: 0,
      duration: 0,
      seats: Driver.seats,
      start: false,
      stop: Driver.stop,
      intransit: Driver.intransit,
      cancel: Driver.cancel,
      Driver_cartype: Driver.Driver_cartype,
      Driver_plate: Driver.Driver_plate,
      time: '',
    };
    await Request.upsert(driverDetails, { where: { id: Driver.Driver_id } });
    res.status(200).send('Driver pushed to request successfully');
  } catch (error) {
    console.error('Error pushing driver to request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/create-history', async (req, res) => {
  const { Driver } = req.body;
  try {
    const historyDetails = {
      geohash: Driver.geohash,
      Driver_lat: Driver.Driver_lat,
      Driver_lng: Driver.Driver_lng,
      Driver_id: Driver.Driver_id,
      Driver_name: Driver.Driver_name,
      Driver_car: Driver.Driver_car,
      Driver_imgUrl: Driver.Driver_imgUrl,
      Driver_rating: Driver.Driver_rating,
      distance: 0,
      duration: 0,
      seats: Driver.seats,
      start: true,
      stop: Driver.stop,
      intransit: Driver.intransit,
      cancel: Driver.cancel,
      Driver_cartype: Driver.Driver_cartype,
      Driver_plate: Driver.Driver_plate,
      time: Sequelize.fn('NOW'),
    };
    await Request.create(historyDetails);
    res.status(200).send('History created successfully');
  } catch (error) {
    console.error('Error creating history:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/update-countdown', async (req, res) => {
  const { time, Driver } = req.body;
  try {
    await Request.update({ countDown: time }, { where: { id: Driver.Driver_id } });
    res.status(200).send('Countdown updated successfully');
  } catch (error) {
    console.error('Error updating countdown:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/add-known-place', async (req, res) => {
  const { place } = req.body;
  try {
    const placeDetails = {
      place,
    };
    await KnownPlace.upsert(placeDetails, { where: { id: place.full } });
    res.status(200).send('Known place added successfully');
  } catch (error) {
    console.error('Error adding known place:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/create-or-update-driver', async (req, res) => {
  const { coord, ID } = req.body;
  try {
    const driverDetails = {
      geohash: calculateGeohash(coord.coords.latitude, coord.coords.longitude),
      Driver_lat: coord.coords.latitude,
      Driver_lng: coord.coords.longitude,
      Driver_id: ID,
      Driver_name: 'james',
      Driver_car: 'Nissan',
      Driver_imgUrl: '',
      Driver_rating: 0,
      distance: 0,
      duration: 0,
      seats: 1,
      start: false,
      stop: false,
      intransit: false,
      cancel: false,
      Driver_cartype: '',
      Driver_plate: '',
      time: '',
    };
    await Driver.upsert(driverDetails, { where: { id: ID } });
    res.status(200).send('Driver created or updated successfully');
  } catch (error) {
    console.error('Error creating or updating driver:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/create-user', async (req, res) => {
  const { name, email, img, phone, uid } = req.body;
  try {
    await Rider.create({
      Rider_id: uid,
      Rider_name: name,
      Rider_phone: phone,
      Rider_imgUrl: img,
      Rider_rating: 0,
      Rider_email: email,
      countDown: 0,
      cancel: false,
      price: 0,
      cash: true,
    });
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/upload-image', async (req, res) => {
  const { cameraFile, uid } = req.body;
  try {
    // Implement image upload logic here
    const imageUrl = ''; // Get the URL of the uploaded image
    await Rider.update({ Rider_imgUrl: imageUrl }, { where: { Rider_id: uid } });
    res.status(200).send('Image uploaded successfully');
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/upload-file', async (req, res) => {
  const { file, ID } = req.body;
  try {
    // Implement file upload logic here
    const fileUrl = ''; // Get the URL of the uploaded file
    await Rider.update({ Rider_imgUrl: fileUrl }, { where: { Rider_id: ID } });
    res.status(200).send('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/verify-user', async (req, res) => {
  const { id } = req.body;
  try {
    const rider = await Rider.findByPk(id);
    res.status(200).send(rider ? 'User verified' : 'User not found');
  } catch (error) {
    console.error('Error verifying user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/push-token', async (req, res) => {
  const { token } = req.body;
  try {
    const countryCode = await fetchCountryCode();
    const id = uuidv4();
    await Message.create({
      id,
      token,
      countryCode,
    });
    res.status(200).send('Token pushed successfully');
  } catch (error) {
    console.error('Error pushing token:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/push-card', async (req, res) => {
  const { token } = req.body;
  try {
    const id = uuidv4();
    await Card.create({
      id,
      token,
    });
    res.status(200).send('Card pushed successfully');
  } catch (error) {
    console.error('Error pushing card:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/ride-exists', async (req, res) => {
  const { userID } = req.body;
  try {
    const rideExists = await Request.findOne({
      where: {
        Rider_id: userID,
        [Op.or]: [{ intransit: true }, { start: false }],
      },
    });
    res.status(200).json({ exists: !!rideExists });
  } catch (error) {
    console.error('Error checking ride existence:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/get-nearby-drivers', async (req, res) => {
  const { center, radius } = req.body;
  try {
    const drivers = await Driver.findAll();
    const nearbyDrivers = drivers.filter((driver) => {
      const distance = calculateDistance(center.lat, center.lng, driver.Driver_lat, driver.Driver_lng);
      return distance <= radius;
    });
    res.status(200).json(nearbyDrivers);
  } catch (error) {
    console.error('Error fetching nearby drivers:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/get-nearby-requests', async (req, res) => {
  const { center, radius } = req.body;
  try {
    const requests = await Request.findAll();
    const nearbyRequests = requests.filter((request) => {
      const distance = calculateDistance(center.lat, center.lng, request.Driver_lat, request.Driver_lng);
      return distance <= radius;
    });
    res.status(200).json(nearbyRequests);
  } catch (error) {
    console.error('Error fetching nearby requests:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, async () => {
  try {
    await mysqlSequelize.authenticate();
    await sqlServerSequelize.authenticate();
    console.log('Connection to databases has been established successfully.');
    app.emit('ready');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log('Server is running on port 3000');
});
