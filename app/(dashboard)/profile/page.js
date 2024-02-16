import { fetchUserTokensById } from "@/utils/actions";
import { UserProfile, auth } from "@clerk/nextjs"

const ProfilesPage = async () => {
    const { userId } = auth();
    const currentTokens = await fetchUserTokensById(userId)
    return (
        <div>
            <h2 className="ml-8 mb-8 text-xl font-extrabold">
                Token Amount : {currentTokens}
            </h2>
            <UserProfile />
        </div>
    )
}

export default ProfilesPage