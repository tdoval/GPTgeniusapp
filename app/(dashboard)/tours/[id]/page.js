import TourInfo from '@/components/TourInfo';
import { getSingleTour } from '@/utils/actions'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link';

const SingleTourPage = async ({ params }) => {
    const tour = await getSingleTour(params.id)

    if (!tour) {
        redirect('/tours');
    }

    return (
        <div>
            <Link href='/tours' className='btn btn-secondary mb-12'>
                Back to Tours
            </Link>
            <TourInfo tour={tour} />
        </div>
    )
}

export default SingleTourPage