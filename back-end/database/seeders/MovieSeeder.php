<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->insert([
            'name'=> 'Guardiões da Galáxia',
            'release_date' => date('Y-m-d', strtotime('07/21/2014')),
            'director' => 'Jamen Gunn',
            'synopsis' => 'Em 1988, na Terra, após a morte de sua mãe, o jovem Peter Quill é raptado da terra pelos Ravagers, um grupo de piratas espaciais liderados por Yondu Udonta (Michael Rooker). Vinte e seis anos mais tarde, Quill, agora um mercenário autoentitulado Senhor das Estrelas (Chris Pratt), rouba uma esfera metálica no planeta Morag e é interceptado pelo alienígena Kree, Korath (Djimon Hounsou), subordinado do terrorista Ronan (Lee Pace). Embora Quill fuja com o artefato, Yondu descobre o seu roubo e emite uma recompensa por sua captura. Ao mesmo tempo, Ronan envia a assassina Gamora (Zoe Saldana) atrás do orbe.',
            'rate' => 5,
            'poster_url' => 'https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
