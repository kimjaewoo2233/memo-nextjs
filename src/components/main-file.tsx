
interface Props {
    id: string;
}
const MainFile = ({ id }: Props) => {

    return (
        <section className="p-10">
            {id}
        </section>
    )
}

export default MainFile;
