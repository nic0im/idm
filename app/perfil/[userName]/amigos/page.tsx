import axios from 'axios';
import { getServerSession } from 'next-auth';
import SingleFriend from '../../../components/friendsComponents/SingleFriend';
import { getFriendsByName } from '../../../api/controllers/helpers';

export default async function Page() {
  const sesion = await getServerSession();
  const amigos = await getFriendsByName(sesion.user.name);

  

  return (
    <div className=' w-full h-screen justify-center flex bg-black/30'>
      <div className='w-[1100px] h-fit grid grid-cols-2 place-content-center gap-5 pt-5'>
        {amigos.length==0 ? <div className='items-center justify-center text-center col-span-2'> no friends :/</div> : amigos.map((a, index) => (
          <SingleFriend
            key={index}
            a={JSON.stringify(a)}
            classN={amigos.length === 1 ? 'col-span-2 place-self-center' : ''}
          />
        ))}
      </div>
    </div>
  );
}
