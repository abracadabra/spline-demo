import { cyto } from '../meta';
// import output from './output/core';
// import intput from './intput/core';

var seed = {
		state : {
			dom : document
		},
		// input : intput,
		// output : output
		input : function iOi(initState){

			return function Oi(state){
				return state;
			};
		},
		output : function iOo(initState){

			return function Oo(state){
				return state;
			};
		}
	};
/**
 * @name Output
 * @type output :: WorldData -> IO
 */
export default cyto(seed);