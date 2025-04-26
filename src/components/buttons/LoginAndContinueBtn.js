export default function LoginAndContineBtn({title,handle}){
      
    return(
        <div>
            <button onClick={handle} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">{title}</button>
        </div>
    )
}