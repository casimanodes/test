const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/userProfiles';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the User schema
const userSchema = new mongoose.Schema({
    nutzername: String,
    team: String,
    position: String,
    telefonnummer: String,
    password: String,
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Serve the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'mitglieder.html'));
});

// Handle form submission
app.post('/submit_profile', async (req, res) => {
    const { nutzername, team, position, telefonnummer, password, confirm_password } = req.body;

    // Validate password
    if (password !== confirm_password) {
        return res.send('Passwords do not match!');
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            nutzername,
            team,
            position,
            telefonnummer,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();
        res.send('User profile created successfully!');
    } catch (err) {
        res.send('Error saving user');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vercel-admin-user:<password>@cluster0.vxgknsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
