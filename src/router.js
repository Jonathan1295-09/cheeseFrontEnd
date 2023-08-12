import {createBrowserRouter, createRoutesFromElemnts, Route,} from "react-router-dom";
import App from "./App"
import Index from "./pages";
import Show from "./pages/Show";
import { cheeseloader, cheesesLoader } from "./loaders";
import { createAction, updateAction, deleteAction} from "./actions";

const router = createBrowserRouter(createRoutesFromElemnts(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={cheeseloaderloader}/>
          <Route path=":id" element={<Show/>} loader={cheesesLoaderLoader}/>
          <Route path="/create" action={createAction}/>
          <Route path="update/:id" action={updateAction}/>
          <Route path="delete/:id"  action={deleteAction}/>
    </Route>
))