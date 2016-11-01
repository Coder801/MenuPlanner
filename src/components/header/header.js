export const Header = ({ user, onSettingsClick }) => {
    return (
        <div className="header">
            <h3 className="heading">Menu Planner</h3>
            <span>{user.name}</span>
            <button onClick={onSettingsClick}>Settings</button>
        </div>
    );
};
