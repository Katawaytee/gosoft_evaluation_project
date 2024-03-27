import { InputField, Button } from "shared/components";
import { useState } from "react";
import { Movie, newMovieId } from "movies/MovieModel";

export function AddMovieForm({movieList,setMovies}:{movieList:Movie[],setMovies:Function}) {
  // const setter = () => console.error("AddMovieForm.setter not implemented yet");

  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSub] = useState('')
  const [description, setDesc] = useState('')

  function onSubmit() {
    let tmpList = movieList
    
    let tmpMovie = {
      "id": newMovieId(),
      "title": title,
      "subtitle": subtitle,
      "description": description,
      "imageUrl": "",
      "ratings": []
    }
    tmpList.push(tmpMovie)

    console.log(movieList.length)
    setMovies(tmpList)
  }

  return (
    <form className="p-4 ">
      <InputField name="Url" value={url} setter={setUrl} />
      <InputField name="Title" value={title} setter={setTitle} />
      <InputField name="Subtitle" value={subtitle} setter={setSub} />
      <InputField name="Description" value={description} setter={setDesc} />
      <div className="text-center">
        {/* TODO: Implement form submission */}
        <Button onClick={onSubmit}>Submit</Button>
        {/* TODO: Implement form cancelling */}
        <Button>Cancel</Button>
      </div>
    </form>
  );
}
