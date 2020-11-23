import React, {useState, useEffect} from "react";
import { dbService } from "fbase";

const Home = () => {
    const [nweet, setNweet] = useState();
    const [nweets, setNweets] = useState([]);

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nwitter").get();        

        dbNweets.forEach((document) => {
            console.log(document.data());
            const nweetObject = {
                ...document.data(),
                id: document.id,
              };
            setNweets((prev) => [nweetObject, ...prev]);
        });
    }

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNweet(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nwitter").add({
            nweet,
            createdAt: Date.now(),
        })
        setNweet("");
    }  
    
    useEffect(() => {
        getNweets();
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Nweet"/>
            </form>
            <div>
                {nweets.map((nweet) => (
                    <div key={nweet.id}>
                        <h4>{nweet.nweet}</h4>
                    </div>                    
                ))}
            </div>
        </div>
    )
}

export default Home;