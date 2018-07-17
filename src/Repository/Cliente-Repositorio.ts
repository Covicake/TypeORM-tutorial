import { getManager, UpdateResult, DeleteResult } from 'typeorm';
import { Cliente } from '../Entities/Cliente';

export class ClienteRepositorio {

    crearCliente(cliente: Cliente): Promise<Cliente> {
        return getManager().getRepository(Cliente).save(cliente);
        }

    obtenerListaCLientes(): Promise<Cliente[]> {
        return getManager().getRepository(Cliente).createQueryBuilder('Cliente')
        .select(['Cliente.id', 'Cliente.nombre', 'Cliente.apellido'])
        .getMany(); // .getOne
        }

    obtenerCliente(idCliente: number): Promise<Cliente> {
        return getManager().getRepository(Cliente).findOne({
            where: {
                id: idCliente
            }
        });
    }

    actualizarCliente(idCliente: string, nuevosDatosCliente: Cliente): Promise<UpdateResult> {
        return getManager().getRepository(Cliente).update({id: idCliente}, nuevosDatosCliente);
        }

    eliminarCliente(idCliente: string): Promise<DeleteResult> {
        return getManager().getRepository(Cliente).delete({id: idCliente});
        }
}