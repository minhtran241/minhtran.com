import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building2, MapPin } from 'lucide-react';
import Link from 'next/link';

const GHUserCard = ({ ghInfo, username }) => {
    return (
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:border-[#0033A0] dark:hover:border-blue-600 transition duration-300 ease-in-out rounded p-4 mt-12">
            <div className="flex flex-col items-start gap-3">
                {/* Row, 1 col is name and username, 1 cl is Avatar */}
                <div className="flex flex-row items-center justify-center gap-2">
                    <Avatar>
                        <AvatarImage src={ghInfo.user.avatarUrl} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-xl font-semibold">
                            {ghInfo.user.name}
                        </h1>
                        <Link
                            href={`https://github.com/${username}`}
                            className="text-sm text-[#0033A0] dark:text-blue-600"
                        >
                            @{username}
                        </Link>
                    </div>
                </div>
                <p className="">{ghInfo.user.bio}</p>
                <div className="flex flex-col gap-1 items-start">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <Building2 size={18} />
                        {ghInfo.user.company}
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <MapPin size={18} />
                        {ghInfo.user.location}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GHUserCard;
