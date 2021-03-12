<?php

namespace App\Http\Controllers\Movie;

use App\Models\Movie\Movie;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class MovieController extends Controller
{
    /**
     * Lista todos os filmes.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(Movie::all(), 200);
    }

    /**
     * Armazena um novo filme no banco de dados.
     *
     * @param  Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $validatedRequest = $this->validate($request, [
            'name' => 'required|string|min:3|max:255',
            'release_date' => 'required|string|max:10',
            'synopsis' => 'string',
            'director' => 'required|string|min:3|max:255',
            'rate' => 'required|integer',
            'poster_url' => 'required|string'
        ]);

        return response()->json(Movie::create($validatedRequest), 201);
    }

    /**
     * Busca um filme pelo seu id.
     *
     * @param  int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        return response()->json(Movie::findOrFail($id), 200);
    }

    /**
     * Atualiza os dados de um filme.
     *
     * @param  Request $request
     * @param  int $id
     * @return JsonResponse
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $movie = Movie::findOrFail($id);

        $movie->update($request->all());

        return response()->json($movie, 200);
    }

    /**
     * Deleta um filme da base de dados.
     *
     * @param  int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        Movie::findOrFail($id)->delete();

        return response()->json([], 204);
    }
}
