export class AppError extends Error {
    constructor(message, statusCode = 500, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (err, req, res, next) => {
    if (!(err instanceof AppError)) {
        console.error('Error inesperado:', err);
        err = new AppError('Error interno del servidor', 500, false);
    }

    res.status(err.statusCode).json({
        status: err.statusCode < 500 ? 'error' : 'fail',
        message: err.message,
    });
};
