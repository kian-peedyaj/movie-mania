import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
    const supabase = createClient();

    let { data: notes, error } = await supabase
        .from('notes')
        .select('*')

    if (error) {
        console.log(error)
        return <div>Failed to fetch notes</div>
    }
    return <pre>{JSON.stringify(notes, null, 2)}</pre>
}