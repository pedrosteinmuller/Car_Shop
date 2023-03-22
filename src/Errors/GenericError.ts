class GenericError extends Error {
  constructor(status: number, message: string) {
    super(message);
    this.name = 'GenericError';
    this.stack = status.toString();
  }
}

export default GenericError;