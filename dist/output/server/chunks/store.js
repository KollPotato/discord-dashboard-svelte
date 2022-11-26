import { w as writable } from "./index2.js";
const user = writable(null, (set) => {
  return;
});
user.subscribe((user2) => {
  return;
});
const guilds = writable(null, (set) => {
  return;
});
guilds.subscribe((guilds2) => {
  return;
});
export {
  guilds as g,
  user as u
};
