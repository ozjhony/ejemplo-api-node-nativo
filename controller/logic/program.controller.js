/** Dto */
const programDto = require("../../model/dto/program.dto");
const config = require("config");

exports.createProgram = (req, res, next) => {
    let program = {
        faculty_id:req.body.faculty_id,
        code: req.body.code,
        name: req.body.name,
        director_name: req.body.director_name
    };
    programDto.create(program, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.updateProgram = (req, res, next) => {
    let program = {
        faculty_id:req.body.faculty_id,
        code: req.body.code,
        name: req.body.name,
        director_name: req.body.director_name
    };
    programDto.update({ _id: req.body.id }, program, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {

    programDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};
exports.getByCode = (req, res, next) => {

    periodDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteProgram = () => {
    programDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}