package com.springboot.playground.service;

import com.springboot.playground.dto.BookDto;
import org.springframework.stereotype.Service;

@Service
public interface BookService {
    public BookDto addBook(BookDto bookDto);

    public BookDto getBookById(Integer bookId);

    public BookDto updateBookById(int bookId, BookDto bookDto);

    public String deleteBookById(int bookId);

}
