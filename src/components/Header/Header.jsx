import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className=" flex justify-between border-b-2 items-center py-4">
            <img src={profile} alt="" />
            <h1 className=" text-4xl font-bold "> Knowledge Cafe</h1>

        </div>
    );
};

export default Header;