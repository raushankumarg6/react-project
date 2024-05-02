package com.springboot.playground.service;

import com.springboot.playground.dto.BookDto;
import com.springboot.playground.entity.Book;
import com.springboot.playground.exception.RecordNotFoundException;
import com.springboot.playground.repository.BookRepository;
import com.springboot.playground.utils.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public BookDto addBook(BookDto bookDto) {
        Book book = Converter.convertToEntity(bookDto, Book.class);
        Book savedBook = bookRepository.save(book);
        return Converter.convertToDTO(savedBook, BookDto.class);
    }

    @Override
    public BookDto getBookById(Integer bookId) {
        Optional<Book> optionalBook = Optional.ofNullable(bookRepository.findById(bookId)
                .orElseThrow(() -> new RecordNotFoundException("Book Record not found with the given id")));
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            return Converter.convertToDTO(book, BookDto.class);
        }
        return null;
    }

    @Override
    public BookDto updateBookById(int bookId, BookDto bookDto) {
        Optional<Book> optionalBook = Optional.ofNullable(bookRepository.findById(bookId)
                .orElseThrow(() -> new RecordNotFoundException("Book Record not found with the given id")));

        if (optionalBook.isPresent()) {
            Book book = Converter.convertToEntity(bookDto, Book.class);
            book.setId(bookId);
            Book updatedBook = bookRepository.save(book);
            return Converter.convertToDTO(updatedBook, BookDto.class);
        }
        return null;
    }

    @Override
    public String deleteBookById(int bookId) {
        Optional<Book> optionalBook = Optional.ofNullable(bookRepository.findById(bookId)
                .orElseThrow(() -> new RecordNotFoundException("Book record is not found with the given id")));
        if (optionalBook.isPresent()) {
            bookRepository.deleteById(bookId);
            return "Book is deleted successfully with the provided id" + bookId;
        }
        return null;
    }
}
