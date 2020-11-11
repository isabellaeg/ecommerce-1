import React from 'react'
import { Link} from "react-router-dom";

function Sidebar(props) {
    console.log('PROPS', props)
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => { props.handleSubmit("Cuerdas") }}>Cuerdas</button>
        </div>
    )
}

export default Sidebar
/* import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="col-xs-2">
      <section className='sidebar'>
        <img src="/juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <Link to="/albums">ALBUMS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/artists">ARTISTS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/lyrics">LYRICS</Link>
          </h4>
        </section>
        <hr />
        <section>
          <h4 className="text-muted">PLAYLISTS</h4>
          <ul className="list-unstyled"> */
            {/* {
              playlists.map(playlist => {
                return (
                  <li key={playlist.id} className="playlist-item menu-item">
                    <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
                  </li>
                );
              })
            } */}
{/*           </ul>
          <h4>
            <Link className="btn btn-primary btn-block" to="/playlists/new">
              <span className="glyphicon glyphicon-plus"></span> PLAYLIST
            </Link>
          </h4>
        </section>
      </section>
    </div>
); */}
