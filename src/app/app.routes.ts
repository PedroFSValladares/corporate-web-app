import { Routes } from '@angular/router';
import { UsersComponent } from './users-component/users-component';
import { DetailUserComponent } from './detail-user-component/detail-user-component';
import { AddUserComponent } from './add-user-component/add-user-component';
import { EditUserComponent } from './edit-user-component/edit-user-component';

export const routes: Routes = [
    {path: 'users', 
        children: [
            {path: '', component: UsersComponent},
            {path: 'add', component: AddUserComponent},
            {path: 'detail/:id', component: DetailUserComponent},
            {path: 'edit/:id', component: EditUserComponent}
        ]
    }
];
