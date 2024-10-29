export default function Select({handle, val}) {
    return (
      <div className="flex justify-center items-center my-8">
        <p>Or select a day for get the image</p>  
        <label className="sr-only">Currency</label>
        <input
          className="p-4 mx-4" 
          onChange={handle} 
          type="date"
          value={val} 
        />
      </div>  
    )
}