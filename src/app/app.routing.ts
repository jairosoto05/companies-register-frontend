import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateCompanyComponent } from "./components/create-company/create-company.component";
import { ManageCompanyComponent } from "./components/manage-company/manage-company.component";
import { UpdateCompanyComponent } from "./components/update-company/update-company.component";

const routes: Routes = [
    { path: "crear", component: CreateCompanyComponent },
    { path: "gestionar", component: ManageCompanyComponent },
    { path: "actualizar/:rnc", component: UpdateCompanyComponent },
    { path: "", pathMatch: "full", redirectTo: "crear" },
    { path: "**", redirectTo: "crear" }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}