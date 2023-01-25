import { renderHook, waitFor } from "@testing-library/react";
import { useUserFetcher } from "hooks/api-fetch/useUserFetcher";
import React from "react";

test('test spyon', async () => {
    const useEffect = jest.spyOn(React, 'useEffect');
    const useState = jest.spyOn(React, 'useState');
    const { result } = renderHook(() => useUserFetcher()) ;
    await waitFor(() => {
        expect(useEffect).toBeCalledTimes(4);
        expect(useState).toBeCalledTimes(2);
        // console.log(result.current.dataSource);
        expect(result.current.dataSource).toEqual({"completed": false, "id": 1, "title": "delectus aut autem", "userId": 1})
    })
})
export { };

