function ModeToggler () {
    const darkModeOn = true;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>
return (
    <div>
        {darkModeOn ? darkMode : lightMode}
    </div>
    )
}

export default ModeToggler;