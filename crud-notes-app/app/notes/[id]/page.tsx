import styles from '../Notes.module.css';

async function getNote(nodeId: string) {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/notes/records/${noteId}',
        // dynamic route won't auto cache every request
        // updating caching behavior => incremental static regeneration (ISR) => by adding the revalidate option to fetch
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({ params }: { params: { id: string } }) {

    const note = await getNote(params.id);
    
    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    );
}