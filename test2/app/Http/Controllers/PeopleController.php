<?php

namespace App\Http\Controllers;

use App\Models\People;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PeopleController extends Controller
{
    public function jsonPeoples(Request $request) {
        if (Storage::disk('public')->has('peoples.json')) {
            return Storage::disk('public')->download("peoples.json");
        } else {
            return response()->json([
                'message' => 'Error',
                'status_code' => 500
            ], 500);
        }
        
    }

    public function add(Request $request) {
        $request->validate([
            'people.fio' => 'required|string|max:255',
            'people.email' => 'required|string|email',
            'people.phone' => 'required|string|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
        ]);

        $people = new People();
        $people->fio = $request->people['fio'];
        $people->email = $request->people['email'];
        $people->phone = $request->people['phone'];

        $file = Storage::disk('public')->has('peoples.json');
        if ($file) {
            $jsonString = Storage::disk('public')->get('peoples.json');
            $data = json_decode($jsonString, true);
            array_push($data['peoples'], $people);
            $jsonData = json_encode($data);
            Storage::disk('public')->put('peoples.json', $jsonData);
        } else {
            Storage::disk('public')->put('peoples.json', json_encode(["peoples" => [$people]]));
        }

        if ($people->save()) {

            

            return response()->json([
                'message' => 'Создан!',
                'status_code' => 201
            ], 201);
        } else {
            return response()->json([
                'message' => 'Error',
                'status_code' => 500
            ], 500);
        }
    
        return response()->json($request, 200);
       
    }

    public function peoples(Request $request) {
        $peoples = People::all();
        return response()->json($peoples, 200);
    }
}
