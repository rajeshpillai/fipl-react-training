import React, {useState} from 'react'
import InputTag from '../component/input-tag';

export default function TagFeature() {
  const [tags, setTags] = useState(["javascript","react","vue"]);

  const onAddTag = (tag) => {
    console.log("newTag: ", tag);
    setTags((prev) =>{
      return [
        ...tags,
        ...tag
      ]
    })
  }

  const onDeleteTag = (tag) => {
    //alert(`${tag} to be deleted soon!`);
    let remainingTags = tags.filter(t => {
      return (t !== tag);
    });

    setTags([...remainingTags]);  // Use function syntax
  }

  return (
    <div>
      <h1>Tags</h1>

      <InputTag 
        onAddTag = {onAddTag} 
        onDeleteTag = {onDeleteTag} 
        defaultTags = {tags}
        placeholder = "enter tags separated by comma"
      />

      <div>You can also press &lt;return&gt;or&lt;enter&gt;key</div>

    </div>
  )
}
