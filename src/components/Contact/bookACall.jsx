import { userBasicInfo } from '@/common/constants/userBasic';
import { Calendar, Clock, PhoneOutgoing, Video } from 'lucide-react';
import Link from 'next/link';

const BookACall = () => {
    return (
        <div className="space-y-5 pb-2">
            <div className="flex items-center gap-1.5 text-xl font-medium">
                <PhoneOutgoing className="mr-1 h-5 w-5" />
                <h1 className="capitalize">Book a Call</h1>
            </div>
            <Link
                href={userBasicInfo.bookACallLink}
                target="_blank"
                data-aos-duration="1000"
                className="flex cursor-pointer flex-col space-y-5 rounded-2xl border bg-white bg-gradient-to-tr px-6 py-5 transition-all duration-300 hover:scale-[101%] hover:shadow-sm dark:border-blue-500  border-[#e2e8f0] from-[#0033A0] to-[#00A3FF] dark:from-blue-600 dark:to-blue-900"
            >
                <div className="flex items-start justify-between gap-5">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-base font-medium md:text-lg text-white">
                            <span>Schedule a 1 on 1 meeting</span>
                        </div>
                        <p className="text-sm text-gray-300 md:text-base">
                            Minh Tran&apos;s calendar is open for booking a call
                        </p>
                    </div>
                    <div className="rounded-full border-2 p-3 text-gray-100 border-gray-100">
                        <Calendar className="h-5 w-5" />
                    </div>
                </div>
                <div className="flex items-center gap-5 text-sm text-gray-200">
                    <div className="flex items-center gap-2">
                        <Clock size={18} />
                        <span>30 Minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Video size={18} />
                        <span>Cal Video (Zoom)</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookACall;
