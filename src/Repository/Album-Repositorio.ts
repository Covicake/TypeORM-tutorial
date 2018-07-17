import { getManager, UpdateResult, DeleteResult } from 'typeorm';
import { Album } from '../Entities/Album';

export class AlbumRepositorio {

    crearAlbum(cliente: Album): Promise<Album> {
        return getManager().getRepository(Album).save(cliente);
        }

    obtenerListaCLientes(): Promise<Album[]> {
        return getManager().getRepository(Album).createQueryBuilder('Album')
        .select(['Album.id', 'Album.titulo', 'Album.artista'])
        .getMany(); // .getOne
        }

    obtenerAlbum(idAlbum: number): Promise<Album> {
        return getManager().getRepository(Album).findOne({
            where: {
                id: idAlbum
            }
        });
    }

    actualizarAlbum(idAlbum: string, nuevosDatosAlbum: Album): Promise<UpdateResult> {
        return getManager().getRepository(Album).update({id: idAlbum}, nuevosDatosAlbum);
        }

    eliminarAlbum(idAlbum: string): Promise<DeleteResult> {
        return getManager().getRepository(Album).delete({id: idAlbum});
        }
}