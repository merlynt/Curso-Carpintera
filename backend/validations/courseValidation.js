// validations/courseValidation.js

function validateCourse(data) {
    const errors = [];

    if (!data.titulo || typeof data.titulo !== "string") {
        errors.push("El titulo es requerido");
    }

    if (!data.img || typeof data.img !== "string" || !data.img.startsWith("http")) {
        errors.push("La URL de la imagen tiene que ser válida");
    }

    if (!data.temas || typeof data.temas !== "object") {
        errors.push("Los temas tienen que ser objetos");
    }

    return errors;
}

function validateCourseUpdate(data) {
    const errors = [];

    if ("titulo" in data && typeof data.titulo !== "string") {
        errors.push("El titulo tiene que ser de tipo string.");
    }

    if ("img" in data && (typeof data.img !== "string" || !data.img.startsWith("http"))) {
        errors.push("La URL de la imagen tiene que ser válida");
    }

    if ("temas" in data && typeof data.temas !== "object") {
        errors.push("Los temas tienen que ser objetos");
    }

    return errors;
}

module.exports = {
    validateCourse,
    validateCourseUpdate
};
