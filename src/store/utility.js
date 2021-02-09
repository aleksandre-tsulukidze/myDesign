export const updateObject = (oldObject, newProperties) => {
    return {
        ...oldObject,
        ...newProperties
    }
};

// export const newObject = (response) => {
//     for (let key in response)
// }