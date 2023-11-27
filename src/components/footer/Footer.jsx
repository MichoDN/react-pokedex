import './footer.css'

function Footer () {
  return <footer>
    <div className='tooltip'>
      <ul>
        <li>
          <a href="https://michodnportfolio.netlify.app" target='_blanc'>Michael D. Portfolio</a>
        </li>
      </ul>
      <ul>
        <li>
          This Pokeapp was developed by Michael D.
        </li>
        <li>
          Pokeapi was created by Paul Hallet and contributors.
        </li>
        <li>
          Pokémon and Pokémon character names are trademarks of Nintendo.
        </li>
      </ul>
    </div>
  </footer>
};

export default Footer;