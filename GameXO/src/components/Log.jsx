export default function Log({ tuns }) {


    return <ol id="log">
        {tuns.map(turn =>
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} select {turn.square.row}, {turn.square.col}
            </li>)}
    </ol>
}