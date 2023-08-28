<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class CallApiService{

    private   $client; 

    public function __construct(HttpClientInterface $client)
     {   

       $this->client=$client;
    }

     
    public function getMetioData(): array
    {
        $response = $this->client->request(
            'GET',
            'http://api.weatherstack.com/current?access_key=5b8062290c108fa2f8d8e6932e87f474&query=Paris&langues=fr'
            

           
        );

        return $response->toArray();


}
}