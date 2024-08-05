interface CustomResponseData {
    [key: string]: any;
  }
  
  export class CustomResponse {
    code: number;
    message: string;
    data: CustomResponseData | null;
  
    constructor(
      code: number,
      message: string,
      data: CustomResponseData | null = null,
    ) {
      this.code = code;
      this.message = message;
      this.data = data;
    }
  
    toJSON() {
      return {
        code: this.code,
        message: this.message,
        status: true,
        data: this.data,
      };
    }
  }