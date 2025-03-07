export default function SearchBar({sendElement,onSubmit}){
    return <form onSubmit={onSubmit}>
    <input type="search" placeholder="Search events" ref={sendElement} />
    <button >Search</button>
</form> 
}