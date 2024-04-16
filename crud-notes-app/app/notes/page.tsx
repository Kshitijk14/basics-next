import Link from "next/link";

async function getNotes() {

    // fetch api (standard fetch) : to retrieve data from backend
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
        // similar to => getServerSideProps
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    // to fetch data in the component => giving access to array of notes
    const notes = await getNotes();

    return(
        <main>
            <div>
                <h1>Notes</h1>
                <div>
                    {/* looping array of notes over to the ui => to render out an basic note component */}
                    {notes?.map((note) => {
                        return <Note key={note.id} note={note} />;
                    })}
                </div>
            </div>
        </main>
    );
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}