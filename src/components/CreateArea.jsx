import React from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });
    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleNote(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && 
                    <input 
                        onChange={handleNote}
                        name="title"
                        placeholder="Title"
                        value={note.title}
                    />
                }
                <textarea 
                    onChange={handleNote}
                    onClick={expand}
                    value={note.content}
                    name="content"
                    placeholder="Take a note.."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={(event) => {
                        props.onAdd(note);
                        setNote({title: "", content: ""});
                        event.preventDefault();
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;