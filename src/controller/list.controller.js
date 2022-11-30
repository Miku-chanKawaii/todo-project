const ListService = require('../services/list.service');
const ApiError = require('../api-error');

exports.create = async (req, res, next) => {
    if(!req.body?.text) {
        return next(new ApiError(400, 'Text can not be empty'));
    }

    try {
        const listService = new ListService();
        const item = await listService.create(req.body);
        return res.send(item);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred')
        );
    }
    
};

exports.findAll = async (req, res, next) => {
    let item = [];

    try {
        const listService = new ListService();
        const item = await listService.all();
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred')
        );
    }

    return res.send(item);
};

exports.findOne = async (req, res, next) => {
    try {
        const listService = new ListService();
        const item  = await listService.findById(req.params.id);
        return res.send(item);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'Error')
        );
    }
};

exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, 'Data to update can not be empty'));
    }

    try {
        const listService = new ListService();
        const updated = await listService.update(req.params.id, req.body);
        if (!updated) {
            return next(new ApiError(404, 'Not found'));
        }
        return res.send({ message: 'Update succesful'});
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, 'Update error'));
    }
};

exports.delete = async (req, res, next) => {
    try {
        const listService = new ListService();
        const deleted = await listService.delete(req.params.id);
        if (!deleted) {
            return next(new ApiError(404, 'Not found'));
        }
        return res.send({ message: 'Delete succesful'});
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, 'Can not delete'));
    }
};