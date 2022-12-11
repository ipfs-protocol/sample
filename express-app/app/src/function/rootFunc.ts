import { Request, Response} from 'express';
import ResultError from './aResError'

const RootView = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> =>
{
  try {
    return res.status(200).send({
      status: 200,
      message: 'Web Main Page ...... OK!!',
      data: null
    });
  } catch (error: any) {
    return res.status(500).send(ResultError.ResponseError(500, '', error, null));
  }
}

export default { RootView };