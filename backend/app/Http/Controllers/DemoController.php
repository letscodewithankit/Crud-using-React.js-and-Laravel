<?php

namespace App\Http\Controllers;

use App\Models\DemoModel;
use Illuminate\Http\Request;

class DemoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data=DemoModel::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $data=new DemoModel();
        $data->first_name=$request->firstname;
        $data->middle_name=$request->middlename;
        $data->last_name=$request->lastname;
        $data->e_mail=$request->email;
        $data->dob=$request->dob;
        $data->age=$request->age;
        $data->mobile_number=$request->mob;
        $data->save();

        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $data= DemoModel::where('id','=',$id)->first();
        $data->first_name=$request->firstname;
        $data->middle_name=$request->middlename;
        $data->last_name=$request->lastname;
        $data->e_mail=$request->email;
        $data->dob=$request->dob;
        $data->age=$request->age;
        $data->mobile_number=$request->mob;
        $data->save();
        return redirect()->back();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data=DemoModel::where('id','=',$id)->first();
        $data->delete();
        return "Done";
    }
}
