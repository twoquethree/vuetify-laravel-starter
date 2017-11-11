<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest as LaravelRequest;
use Illuminate\Http\JsonResponse;

class FormRequest extends LaravelRequest
{
    /**
     * Get the proper failed validation response for the request.
     *
     * @param array $errors
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function response(array $errors)
    {
        if ($this->expectsJson()) {
            return new JsonResponse(['errors' => $errors], 422);
        }

        return $this->redirector->to($this->getRedirectUrl())
                                ->withInput($this->except($this->dontFlash))
                                ->withErrors($errors, $this->errorBag);
    }
}
