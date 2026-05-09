import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Session } from "../../types/profileTypes";
import Btn from "../../ui/Btn";
import Wrap from "../../ui/Wrap";

type SessionsProps = {
  sessions: Session[];
  isPending: boolean;
  removeSessionsHandler: () => void;
};

const Sessions = (props: SessionsProps): JSX.Element => {
  const { isPending, sessions, removeSessionsHandler } = props;

  return (
    <Wrap title="Sessions">
      <TableContainer>
        <Table size="small" aria-label="Sessions table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>#</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>User ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((session, index) => (
              <TableRow
                key={session._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell scope="row">{session.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {sessions.length > 1 && (
        <Box mt={6}>
          <Btn
            size="small"
            onClick={removeSessionsHandler}
            aria-label="Delete all sessions"
          >
            {isPending ? "Loading..." : "Delete all sessions"}
          </Btn>
        </Box>
      )}
    </Wrap>
  );
};

export default Sessions;
