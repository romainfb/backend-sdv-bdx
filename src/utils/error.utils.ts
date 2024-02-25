import { Response } from "express";

export class CustomError extends Error {
  public statusCode;
  public errCode;
  public traductKey;

  constructor(
    statusCode = 500,
    errCode = "ERR-global",
    traductKey = "global.internalError"
  ) {
    super();

    this.name = "CustomError";
    this.statusCode = statusCode;
    this.errCode = errCode;
    this.traductKey = traductKey;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const sendSuccessResponse = (code, message, data, res: Response) => {
  if (data !== null) {
    res.status(code).json({ code, message, data });
  } else {
    res.status(code).json({ code, message });
  }
};

export const sendErrorResponse = (code, message, res: Response) => {
  res.status(code).json({ code, message });
};
