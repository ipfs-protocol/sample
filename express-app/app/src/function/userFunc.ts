import { Request, Response} from 'express';
import ResultError from './aResError'

const GetUser = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> =>
{
  try {
    const { id } = req.params;
    const user = await Role.findByPk(id);
    
  } catch (error: any) {
    return res.status(500).send(ResultError.ResponseError(500, '', error, null));
  }
}

const GetUsers = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> =>
{
  try {
    
  } catch (error: any) {
    return res.status(500).send(ResultError.ResponseError(500, '', error, null));
  }
}

const CreateUser = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> =>
{
  try {
    
  } catch (error: any) {
    return res.status(500).send(ResultError.ResponseError(500, '', error, null));
  }
}

const UpdateUser = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> =>
{
  try {
    
  } catch (error: any) {
    return res.status(500).send(ResultError.ResponseError(500, '', error, null));
  }
}

const DeleteUser = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> =>
{
  try {
    
  } catch (error: any) {
    return res.status(500).send(ResultError.ResponseError(500, '', error, null));
  }
}

export default { GetUser, GetUsers };