const tools = {
    moveArrayElementUpOne: (array, element) => {
        const index = array.indexOf(element);
        const newIndex = index - 1;
        if (newIndex < 0) return; //Already at the top
        const indexes = [newIndex, index];
        console.log(indexes)
        array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]])
    },
    moveArrayElementDownOne: (array, element) => {
        const index = array.indexOf(element);
        const newIndex = index + 1;
        if (newIndex === array.length) return; //Already at the top
        const indexes = [index, newIndex];
        console.log(indexes)
        array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]])
    }
}



export default tools;