<?php

namespace App\Models\Movie;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'release_date', 'synopsis', 'director', 'rate', 'poster_url'];

    /**
     * Set the movie's release date.
     *
     * @param  string  $value
     * @return void
     */
    public function setReleaseDateAttribute($value)
    {
        $this->attributes['release_date'] = date('Y-m-d', strtotime($value));
    }
}