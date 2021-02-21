import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { searchUser } from '../../Redux/Action/userAction';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.users.search);

  const change = (e) => dispatch(searchUser(e.target.value));
  console.log(list);

  const select = (e, v, r) => {
    if (r === 'select-option') history.push(`/user/${v.id}`);
  };

  return (
    <>
      <Autocomplete
        freeSolo
        style={{
          width: '250px',
          height: '40px',
          backgroundColor: 'white',
          borderRadius: 5,
        }}
        id='free-solo-2-demo'
        disableClearable
        options={list || []}
        getOptionLabel={(o) => o.name}
        onInputChange={change}
        onChange={select}
        debug={true}
        renderInput={(params) => (
          <TextField
            style={{ marginTop: 0 }}
            {...params}
            size='small'
            placeholder='search...'
            margin='normal'
            variant='outlined'
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </>
  );
}
