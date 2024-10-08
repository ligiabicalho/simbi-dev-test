<?php

namespace App\Core\Domain\Library\Ports\Persistence;

use App\Core\Domain\Library\Entities\Author;

interface AuthorRepository
{
    /**
     * @param Author $author
     *
     * @return Author
     */
    public function create(Author $author): Author;

    /**
     *
     * @return array<Author>
     */
    public function getAll(): array;

    /**
     * @param string $authorId
     *
     * @return ?Author
     */
    public function findById(string $authorId): ?Author;
}
