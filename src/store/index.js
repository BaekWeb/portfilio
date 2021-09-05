import { createStore } from "vuex";
import work from './modules/workInfo'
import skill from './modules/skill'


export default createStore({
  modules: {
    work,
    skill
  }
});
