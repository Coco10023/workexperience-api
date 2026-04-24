const db = require("../db/connection");

// Hämta alla poster
exports.getAllExperiences = (req, res) => {
    const sql = "SELECT * FROM workexperience ORDER BY id DESC";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Fel vid hämtning av poster." });
        }

        res.json(results);
    });
};

// Hämta en post med id
exports.getExperienceById = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM workexperience WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Fel vid hämtning av post." });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Ingen post hittades med detta id."});
        }

        res.json(results[0]);
    });
};

// Skapa ny post
exports.createExperience = (req, res) => {
    const { companyname, jobtitle, location, startdate, enddate, description } = req.body;

    if (!companyname || !jobtitle || !location || !startdate || !enddate || !description) {
        return res.status(400).json({ error: "Alla fält måste vara ifyllda."});
    }

    if (new Date(enddate) < new Date(startdate)) {
        return res.status(400).json({ error: "Slutdatum kan inte vara tidigare än startdatum."});
    }

    const sql = `
        INSERT INTO workexperience (companyname, jobtitle, location, startdate, enddate, description)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

    db.query(sql, [companyname, jobtitle, location, startdate, enddate, description], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Fel vid skapande av post."});
        }

        res.status(201).json({
            message: "Post skapad",
            id: result.insertId
        });
    });
 };