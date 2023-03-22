import { Request, Response, NextFunction } from 'express';

class ErrorHandle {
  static handle(error: Error, _req: Request, res: Response, _next: NextFunction) {
    if (error instanceof Error && error.stack) {
      return res.status(parseInt(error.stack, 10)).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export default ErrorHandle;