import * as React from 'react';
import AddTileButton from '../AddTileButton';
import { useSelector, useDispatch } from 'react-redux';
import Tile from '../Tile';

export default function Grid() {
  const colors = ['red', 'blue', 'pink', 'yellow', 'gray'];
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();
  return (
    <div>
      <div style={{ maxWidth: 400, overflow: 'hidden' }}>
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile}
              onDoubleClick={(_) =>
                dispatch({ type: 'REMOVE_TILE', id: tile.id })
              }
              key={index}
            />
          );
        })}{' '}
      </div>{' '}
      <br />
      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={() => dispatch({ type: 'ADD_TILE', color })}
            />
          );
        })}
      </div>
    </div>
  );
}
