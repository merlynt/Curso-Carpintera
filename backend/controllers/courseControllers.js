
const express = require("express");
const ruta = express.Router();
const Curso = require("../models/course");

exports.courseGet = async (req, res) => {
    try {
        const course = await Curso.find();
        res.json(course);
    } catch (err) {
        console.error("Error al obtener cursos:", err);
        res.status(500).json({ message: err.message })
    }
};

exports.courseCreate = async (req, res) => {
    const curso = new Curso({
        titulo: req.body.titulo,
        img: req.body.img,
        temas: req.body.temas
    });
    try {
        const nuevoCurso = await curso.save();
        res.status(201).json(nuevoCurso);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.courseGetById = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        if (!curso) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }
        res.json(curso); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.courseUpdate = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        if (!curso) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }

        if (req.body.titulo != null) curso.titulo = req.body.titulo;
        if (req.body.img != null) curso.img = req.body.img;

        // Actualizar temas si existen
        if (req.body.temas) {
            const temas = ["tema1", "tema2", "tema3"];
            temas.forEach((tema) => {
                if (req.body.temas[tema]) {
                    curso.temas[tema] = {
                        ...curso.temas[tema], 
                        ...req.body.temas[tema] 
                    };
                }
            });
        }

        const cursoActualizado = await curso.save();
        res.json(cursoActualizado);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.courseDelete = async (req, res) => {
    try {
        const cursoEliminado = await Curso.findByIdAndDelete(req.params.id);
        if (!cursoEliminado) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }
        res.json({ message: "Curso eliminado con éxito" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


