/* import {Routes, Route, Link, useParams, Outlet, useNavigate} from "react-router-dom"

function Layout(){
    return (<div>
        <h3>Estoy en componente 1</h3> 
        <Link to="/rutarelativa/245">Ir a ruta245</Link>
        <Link to="/ruta1">Ruta 1</Link>
        <Link to="/ruta2">Ruta 2</Link>
        <Link to="/ruta3">Ruta 3</Link>
        <Link to="/ruta4">Ruta 4</Link>
        <Link to="/ruta4/anidado">Ir a ruta 4</Link>
        <Link to="/componentenavigate">Ir a comprobar useNavigate</Link>
          </div>)
}

function Componente1(){
    return (<div>
        <h3>Estoy en componente 1</h3> 
        <Link to="/rutarelativa/245">Ir a jugar</Link>
        <Link to="/ruta1">Ruta 1</Link>
        <Link to="ruta2">Ruta 2</Link>
        <Link to="ruta3">Ruta 3</Link>
    <Link to="/">Ir a jugar</Link>
          </div>)
}

function Componente2(){
    return (<>      
        <h3>Estoy en componente 2</h3> 
        <Link to="/">Ir a jugar</Link>
    </>)  
}

function Componente3(){
    return (<>      
    <h3>Estoy en componente 3</h3> 
    <Link to="/">Ir a jugar</Link>
</>)  
}

function ComponenteRuta4(){
    return (<div>      
    <h3>Compenente ruta 4</h3> 
    <Outlet />
</div>)  
}

function Componente404(){
    return (<>      
    <h3>Error 404</h3> 

</>)  
}

function CompenenteAnidado(){
    <h3>Compenente Anidado</h3>

}

function ComponenteNavigate(){
    let irAPaxina = useNavigate()

    const irARutas = (nome)=>{
        (nome === "juan") ? irAPaxina("/ruta2") : irAPaxina("/ruta3")
    }

    return (<div>
        <h3>Estamos en useNavigate</h3>
        <button onClick={irARutas}>Ir a ruta 3</button>
        <button onClick={()=>{irARutas("juan")}}>Ir a ruta 2</button>
    </div>)
}


function CompenteRelativas(){
    const {parametro} = useParams()
    console.log('o parametro recogido es', parametro)
    return (<div>
        <h3>Compenente relativo</h3>

    </div>)
}
export default function Rutas(){

    return(<>
        <Routes>
            <Route path="/" element={<Componente1 />}/>
            <Route path="/ruta1" element={<Componente2 />}/>            
            <Route path="/ruta2" element={<Componente2 />}/>
            <Route path="/ruta3" element={<Componente2 />}/>
            <Route path="login"></Route>
            <Route path="registro"></Route>
            <Route path="/rutarelativa/:paramentro" element={<CompenteRelativas />}/>

            <Route path="/ruta4" element={<ComponenteRuta4 />}>
                <Route path="anidado" element={<CompenenteAnidado/>}/>
            </Route>    
            <Route path="*" element={<Componente404 />} />
            <Route path="/useNavigate" element={<ComponenteNavigate/>} />
        </Routes>
    </>)
} */