
import Route from '@ioc:Adonis/Core/Route'

Route.post("/auth/login", "AuthController.login");
Route.post("/auth/logout", "AuthController.logout");
Route.post('/user', "AuthController.create");

Route.post("/users", "UsersController.list").middleware('auth');
Route.put("/user", "UsersController.update").middleware('auth');
Route.post('/user_d', "UsersController.delete").middleware('auth');
Route.post('/user_id', "UsersController.listId").middleware('auth');

Route.post("/contact", "ContactsController.create").middleware('auth');
Route.post("/contacts", "ContactsController.list").middleware('auth');
Route.post('/contact_q', "ContactsController.listQ").middleware('auth');
Route.put('/contact_u', "ContactsController.update").middleware('auth');
Route.post('/contact_d', "ContactsController.delete").middleware('auth');
Route.post('/search', "ContactsController.search").middleware('auth');




