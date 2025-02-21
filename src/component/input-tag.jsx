import React from 'react'


function Tag({value, onDeleteTag}) {
  return (
    <div className = "tag-item">
        <span
          onClick = {(e) => onDeleteTag(e, value)}
        >
          &#x2716;{" "}
        </span>
        {value}
    </div>
  )
}

function TagList({tags, onDeleteTag}) {
  return (
    <div class="tag-list">
      {
        tags.map(tag => {
          return (
            <Tag key={tag} value={tag} onDeleteTag = {() => onDeleteTag(tag)} />
          );
        })
      }
    </div>
  )
}

export default function InputTag({defaultTags, onAddTag, onDeleteTag, placeholder}) {
  const handleKeyUp = (e) => {
    console.log(e.which);
    // comma (188), enter (13) 
    if (e.which === 188 || e.which === 13) {
      let input = e.target.value.trim().split(",");
      console.log("INPUT: ", input);
      if (input.length == 0 || input[0] === "") return;

      onAddTag(input);

      // TODO: clear input
      e.target.value = "";

    }
  }

  const handleDelete = (tag) => {
    onDeleteTag(tag);
  }

  return (
    <div>
      <TagList tags = {defaultTags} 
          onDeleteTag = {handleDelete} />
      <input type="text" 
        onKeyUp = {handleKeyUp}
        placeholder={placeholder} />
    </div>
  )
}
