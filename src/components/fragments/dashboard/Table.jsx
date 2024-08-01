import TableElement from "../../elements/dashboard/TableBody";

export default function Table() {
    return (
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                        Name
                    </th>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                        Last name
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                        Phone
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                        Email
                    </th>
                </tr>
            </thead>
            <TableElement>
                <TableElement.Row1
                    name="Lian"
                    lastName="Smith"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
                <TableElement.Row1
                    name="Emma"
                    lastName="Johnson"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
                <TableElement.Row1
                    name="Oliver"
                    lastName="Williams"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
                <TableElement.Row1
                    name="Isabella"
                    lastName="Brown"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
                <TableElement.Row1
                    name="Lian"
                    lastName="Smith"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
                <TableElement.Row1
                    name="Emma"
                    lastName="Johnson"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
                <TableElement.Row1
                    name="Oliver"
                    lastName="Williams"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
                <TableElement.Row1
                    name="Isabella"
                    lastName="Brown"
                    phone="622322662"
                    email="jonsmith@mail.com"
                />
            </TableElement>
        </table>
    )
}
