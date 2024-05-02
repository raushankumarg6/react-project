package com.springboot.playground.controller;

import com.springboot.playground.dto.BookDto;
import com.springboot.playground.service.BookService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("addBooks")
    public ResponseEntity<BookDto> createBook(@Valid @RequestBody BookDto bookDto) {
        BookDto savedBook = bookService.addBook(bookDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
    }

    @GetMapping("/{bookId}")
    public ResponseEntity<BookDto> getBookById(@PathVariable int bookId) {
        BookDto bookDto = bookService.getBookById(bookId);
        return ResponseEntity.ok(bookDto);
    }

    @DeleteMapping("/{bookId}")
    public ResponseEntity<String> deleteBookById(@PathVariable int bookId) {
        String resp = bookService.deleteBookById(bookId);
        return ResponseEntity.ok(resp);
    }

    @PutMapping("/{bookId}")
    public ResponseEntity<BookDto> updateBookById(@PathVariable int bookId, @Valid @RequestBody BookDto bookDto) {
        BookDto updatedBook = bookService.updateBookById(bookId, bookDto);
        return ResponseEntity.ok(updatedBook);
    }
}
