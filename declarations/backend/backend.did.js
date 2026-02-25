export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getProjects' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getSocialLinks' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
